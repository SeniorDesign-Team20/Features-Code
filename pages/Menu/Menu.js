import React from "react";
import {Helmet} from "react-helmet";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./menu.css"

function Menu(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Menu</title>
            </Helmet>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Menu</h3>
                    <div className="underline mx-auto"></div>
                    <div className="card">
                        <img className="card-img-top h-100" src={require("../../files_to_modify/menu.png")} alt="Menu"></img>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Menu;