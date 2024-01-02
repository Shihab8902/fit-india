const productCollection = require("../../models/productModel");

const getAllProducts = async (req, res, next) => {
    try {
        const { limit, page, price, categories, sort, search } = req.query;
        const skip = parseInt(page) * parseInt(limit);

        //Send data based on categories
        if (categories) {
            const categoriesArray = categories.split(",") || [];
            const filter = { category: { $in: categoriesArray } };
            const result = await productCollection.find(filter);
            return res.status(200).send(result);

        }


        //Sort based on condition
        if (sort) {
            switch (sort) {
                case "all": {
                    const result = await productCollection.find();
                    return res.status(200).send(result);
                }


                case "new": {
                    const result = await productCollection.find().sort({ createdAt: -1 });
                    return res.status(200).send(result);
                }

                case "low": {
                    const result = await productCollection.find().sort({ discountedPrice: 1 });
                    return res.status(200).send(result);
                }

                case "high": {
                    const result = await productCollection.find().sort({ discountedPrice: -1 });
                    return res.status(200).send(result);
                }

                default: {
                    const result = await productCollection.find();
                    return res.status(200).send(result);
                }
            }
        }


        //Sort based on price range

        if (price) {
            const prices = price.split(",");
            if (prices[1] === "higher") {
                const result = await productCollection.find({ discountedPrice: { $gt: parseFloat(prices[0]) } });
                return res.status(200).send(result);
            }

            const query = { discountedPrice: { $gte: parseFloat(prices[0]), $lte: parseFloat(prices[1]) } };

            const result = await productCollection.find(query);
            return res.status(200).send(result);
        }


        //Search by name
        if (search) {
            const query = { name: { $regex: new RegExp(search, 'i') } }
            const result = await productCollection.find(query);
            return res.status(200).send(result);
        }


        const result = await productCollection.find().skip(skip).limit(parseInt(limit));
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
}



module.exports = { getAllProducts };