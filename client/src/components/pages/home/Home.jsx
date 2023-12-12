import Category from "./category/Category";
import Discount from "./discount/Discount";
import FirstSection from "./first-section/FirstSection";
import Review from "./review/Review";
import ShirtCart from "./shirt cart/ShirtCart";
import ShoesCart from "./shoesCart/ShoesCart";
import Shop3Items from "./shop-3-items/Shop3Items";
import Shop5items from "./shopbyoffer/Shop5items";
import TshirtCart from "./t-shirt cart/TshirtCart";


const Home = () => {
    return (
        <div>
            <FirstSection></FirstSection>
            <Category></Category>
            <ShoesCart></ShoesCart>
            <Shop3Items></Shop3Items>
            <TshirtCart></TshirtCart>
            <Shop5items></Shop5items>
            <ShirtCart></ShirtCart>
            <Discount></Discount>
            <Review></Review>
        </div>
    );
};

export default Home;