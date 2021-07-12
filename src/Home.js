import React from 'react';
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
         <div className="home__container">
         <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
           
           <div className="home__row">

           <Product  id="1" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={252} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating= {5}/>
            <Product id="2" title="Redmi Note 10 Pro Max (Glacial Blue, 6GB RAM, 128GB Storage) -108MP Quad Camera|120Hz Super Amoled Display | NCEMI Upto 6 Months
             " price={15999} image="https://m.media-amazon.com/images/I/61GQAkqz0iL._SL1500_.jpg"
            rating= {4}/>
                    

           </div>

           <div className="home__row">
           <Product id="3" title="Roll over image to zoom in
Dr Trust Signature Series Finger Tip Pulse Oximeter With Audio Visual Alarm (Midnight Black)- 201" price={1999} image="https://images-na.ssl-images-amazon.com/images/I/71Q3b861IEL._SL1500_.jpg"
            rating= {4}/>
           
           
           <Product id="4" title="Homesake Diamond Cluster Pendant Light, Home Decor Items, Hanging Ceiling Decorative Chandelier Roof Light Lamp for Indoor Outdoor Jhumar Lighing" price={1099} image="https://images-na.ssl-images-amazon.com/images/I/81hOP7Rx0bL._SL1500_.jpg"
            rating= {3}/>

             <Product id="5" title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (Blue)" price={4899} image="https://images-na.ssl-images-amazon.com/images/I/61u0y9ADElL._SL1000_.jpg"
            rating= {4}/>    
           

             </div>

             <div className="home__row">

             <Product id="6" title="LG 23.8 inch (60.45 cm) Borderless LED Monitor - Full HD, IPS Panel with VGA, HDMI, Audio in/Out Ports and in-Built Speakers - 24MP88HV (Silver/White)" price={15899} image="https://images-na.ssl-images-amazon.com/images/I/81rpK20lAtL._SL1500_.jpg"
            rating= {5}/>  
               

             </div>


         </div>   
        </div>
    );
}

export default Home;
