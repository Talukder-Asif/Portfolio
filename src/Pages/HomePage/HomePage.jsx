import About from "./About";
import Banner from "./Banner";
import MyExp from "./MyExp";
import Study from "./Study";
import Contact from "./Contact";
import Projects from "./Projects";
import { useEffect, useState } from "react";

const HomePage = () => {


    const [myData, setMyData] = useState([]);
    useEffect(()=>{
        fetch('/projects.json')
        .then( ref => ref.json())
        .then(data => setMyData(data))
    },[])
  

    return (
        <div>
        <Banner></Banner>
        <About></About>
        <MyExp></MyExp>
        <Projects myProject={myData}></Projects>
        <Study></Study>
        <Contact></Contact>
        
        </div>
    );
};

export default HomePage;