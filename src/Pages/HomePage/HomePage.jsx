import About from "./About";
import Banner from "./Banner";
import PopularProduct from "./PopularProduct";
import MyExp from "./MyExp";
import Study from "./Study";
import Contact from "./Contact";

const HomePage = () => {
    return (
        <div>
        <Banner></Banner>
        <About></About>
        <MyExp></MyExp>
        <PopularProduct></PopularProduct>
        <Study></Study>
        <Contact></Contact>
        
        </div>
    );
};

export default HomePage;