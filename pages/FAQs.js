import React from "react";
import {Helmet} from "react-helmet";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as faqs from "./../files_to_modify/FAQs"

function FAQ(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>FAQs</title>
            </Helmet>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Frequently Asked Questions</h3>
                    <div className="underline mx-auto"></div>
                    <div className="row">

                        {/* FAQ #1 */}
                        {faqs.question1 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question1}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer1}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #2 */}
                        {faqs.question2 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question2}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer2}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #3 */}
                        {faqs.question3 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question3}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer3}</p>
                                </div>
                            </div>
                        </div>}
                        
                        {/* FAQ #4 */}
                        {faqs.question4 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question4}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer4}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #5 */}
                        {faqs.question5 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question5}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer5}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #6 */}
                        {faqs.question6 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question6}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer6}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #7 */}
                        {faqs.question7 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question7}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer7}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #8 */}
                        {faqs.question8 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question8}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer8}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #9 */}
                        {faqs.question9 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question9}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer9}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #10 */}
                        {faqs.question10 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question10}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer10}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #11 */}
                        {faqs.question11 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question11}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer11}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #12 */}
                        {faqs.question12 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question12}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer12}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #13 */}
                        {faqs.question13 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question13}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer13}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #14 */}
                        {faqs.question14 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question14}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer14}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #15 */}
                        {faqs.question15 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question15}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer15}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #16 */}
                        {faqs.question16 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question16}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer16}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #17 */}
                        {faqs.question17 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question17}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer17}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #18 */}
                        {faqs.question18 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question18}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer18}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #19 */}
                        {faqs.question19 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question19}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer19}</p>
                                </div>
                            </div>
                        </div>}

                        {/* FAQ #20 */}
                        {faqs.question20 != "" && <div className="col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{faqs.question20}</div>
                                <div className="card-body">
                                    <p className="card-text">{faqs.answer20}</p>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;
