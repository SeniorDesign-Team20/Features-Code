import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Reviews.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import * as reviews from '../../files_to_modify/reviews';

function Reviews(){
    return(
        <div>
            <section className="section bg-c-dark">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading name">Testimonials</h3>
                            <div className="underline mx-auto"></div>
                            
                            <div className="row">
                                {reviews.review1 != ""  && <div className="col-sm-4">
                                    <div className="card bg-dark h-100">
                                    <div className="card-body">
                                        <h5 className="card-title review">{"-- " + reviews.name1}</h5>
                                        <p className="card-text review">
                                            <FontAwesomeIcon icon={faQuoteLeft}/>
                                            {" " + reviews.review1 + " "}
                                            <FontAwesomeIcon icon={faQuoteRight}/>
                                        </p>
                                    </div>
                                    </div>
                                </div>}
                                {reviews.review2 != ""  && <div className="col-sm-4">
                                    <div className="card bg-dark h-100">
                                    <div className="card-body">
                                        <h5 className="card-title review">{"-- " + reviews.name2}</h5>
                                        <p className="card-text review">
                                            <FontAwesomeIcon icon={faQuoteLeft}/>
                                            {" " + reviews.review2 + " "}
                                            <FontAwesomeIcon icon={faQuoteRight}/>
                                        </p>
                                    </div>
                                    </div>
                                </div>}
                                {reviews.review3 != ""  && <div className="col-sm-4">
                                    <div className="card bg-dark h-100">
                                    <div className="card-body">
                                        <h5 className="card-title review">{"-- " + reviews.name3}</h5>
                                        <p className="card-text review">
                                            <FontAwesomeIcon icon={faQuoteLeft}/>
                                            {" " + reviews.review3 + " "}
                                            <FontAwesomeIcon icon={faQuoteRight}/>
                                        </p>
                                    </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    );
}

export default Reviews;