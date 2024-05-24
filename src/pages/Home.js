import React from "react";
import Weather from "../components/Weather";
import Header from "../components/Header";

function Home(){
    return(
        <div>
            <div>
                <Header/>
                <div className="container_weather">
                    <h1>Météo</h1>
                    <Weather />  
                </div>
                
            </div>
            
        </div>
    )
}

export default Home