import React from "react";
import {Helmet} from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./People.css"
import * as people from "./../../files_to_modify/People/people_info"

function People(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>People</title>
            </Helmet>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Our Team</h3>
                    <div className="underline mx-auto"></div>
                    <div className="row">

                        {/* Person #1 */}
                        {people.name1 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person1.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name1}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title1}</h5>
                                    <p className="card-text">{people.bio1}</p>
                                    <p>
                                        {people.phone1 !="" &&
                                        <a href= {'tel:' + people.phone1} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone1 + "    "}

                                        {people.email1 !="" &&
                                        <a href= {'mailto:' + people.email1} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email1}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #2 */}
                        {people.name2 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person2.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name2}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title2}</h5>
                                    <p className="card-text">{people.bio2}</p>
                                    <p>
                                        {people.phone2 !="" &&
                                        <a href= {'tel:' + people.phone2} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone2 + "    "}

                                        {people.email2 !="" &&
                                        <a href= {'mailto:' + people.email2} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email2}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #3 */}
                        {people.name3 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person3.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name3}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title3}</h5>
                                    <p className="card-text">{people.bio3}</p>
                                    <p>
                                        {people.phone3 !="" &&
                                        <a href= {'tel:' + people.phone3} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone3 + "    "}

                                        {people.email3 !="" &&
                                        <a href= {'mailto:' + people.email3} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email3}
                                    </p>
                                </div>
                            </div>
                        </div>}
                        
                        {/* Person #4 */}
                        {people.name4 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person4.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name4}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title4}</h5>
                                    <p className="card-text">{people.bio4}</p>
                                    <p>
                                        {people.phone4 !="" &&
                                        <a href= {'tel:' + people.phone4} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone4 + "    "}

                                        {people.email4 !="" &&
                                        <a href= {'mailto:' + people.email4} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email4}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #5 */}
                        {people.name5 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person5.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name5}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title5}</h5>
                                    <p className="card-text">{people.bio5}</p>
                                    <p>
                                        {people.phone5 !="" &&
                                        <a href= {'tel:' + people.phone5} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone5 + "    "}

                                        {people.email5 !="" &&
                                        <a href= {'mailto:' + people.email5} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email5}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #6 */}
                        {people.name6 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person6.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name6}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title6}</h5>
                                    <p className="card-text">{people.bio6}</p>
                                    <p>
                                        {people.phone6 !="" &&
                                        <a href= {'tel:' + people.phone6} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone6 + "    "}

                                        {people.email6 !="" &&
                                        <a href= {'mailto:' + people.email6} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email6}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #7 */}
                        {people.name7 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person7.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name7}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title7}</h5>
                                    <p className="card-text">{people.bio7}</p>
                                    <p>
                                        {people.phone7 !="" &&
                                        <a href= {'tel:' + people.phone7} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone7 + "    "}

                                        {people.email7 !="" &&
                                        <a href= {'mailto:' + people.email7} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email7}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #8 */}
                        {people.name8 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person8.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name8}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title8}</h5>
                                    <p className="card-text">{people.bio8}</p>
                                    <p>
                                        {people.phone8 !="" &&
                                        <a href= {'tel:' + people.phone8} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone8 + "    "}

                                        {people.email8 !="" &&
                                        <a href= {'mailto:' + people.email8} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email8}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #9 */}
                        {people.name9 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person9.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name9}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title9}</h5>
                                    <p className="card-text">{people.bio9}</p>
                                    <p>
                                        {people.phone9 !="" &&
                                        <a href= {'tel:' + people.phone9} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone9 + "    "}

                                        {people.email9 !="" &&
                                        <a href= {'mailto:' + people.email9} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email9}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #10 */}
                        {people.name10 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person10.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name10}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title10}</h5>
                                    <p className="card-text">{people.bio10}</p>
                                    <p>
                                        {people.phone10 !="" &&
                                        <a href= {'tel:' + people.phone10} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone10 + "    "}

                                        {people.email10 !="" &&
                                        <a href= {'mailto:' + people.email10} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email10}
                                    </p>
                                </div>
                            </div>
                        </div>}

                        {/* Person #11 */}
                        {people.name11 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person11.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name11}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title11}</h5>
                                    <p className="card-text">{people.bio11}</p>
                                    <p>
                                        {people.phone11 !="" &&
                                        <a href= {'tel:' + people.phone11} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone11 + "    "}

                                        {people.email11 !="" &&
                                        <a href= {'mailto:' + people.email11} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email11}
                                    </p>
                                </div>
                            </div>
                        </div>}
                        
                        {/* Person #12 */}
                        {people.name12 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src={require("./../../files_to_modify/People/person12.png")} alt="Card image cap"></img>
                                <div className="card-header h-100">{people.name12}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{people.title12}</h5>
                                    <p className="card-text">{people.bio12}</p>
                                    <p>
                                        {people.phone12 !="" &&
                                        <a href= {'tel:' + people.phone12} className="phone contact">
                                            <FontAwesomeIcon icon={faPhone}/>
                                        </a>}
                                        {" " + people.phone12 + "    "}

                                        {people.email12 !="" &&
                                        <a href= {'mailto:' + people.email12} className="mail contact">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </a> }
                                        {" " + people.email12}
                                    </p>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default People;