import React from "react";
import Navbar from "./Navbar";
import Jumbotorn from "./Jumbotorn";
import Feature from "./Feature";
import Cardsection from "./Cardsection";
import Footer from "./Footer";

const App = ()=>{
    return(
        <div>
            <Navbar />
            <Jumbotorn />
            <Feature />
            <Cardsection />
            <Footer/>
        </div>
    );
}

export default App;