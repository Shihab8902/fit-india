import Category from "./category/Category";
import Discount from "./discount/Discount";
import FirstSection from "./first-section/FirstSection";
import Review from "./review/Review";


const Home = () => {
    return (
        <div>
            <FirstSection></FirstSection>
            <Category></Category>
            <Discount></Discount>
            <Review></Review>
        </div>
    );
};

export default Home;