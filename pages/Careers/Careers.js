import React from "react";
import {Helmet} from "react-helmet";
import * as jobs from "./../../files_to_modify/careers"
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Careers.css"

function Careers(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Careers</title>
            </Helmet>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Careers</h3>
                    <div className="underline mx-auto"></div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{jobs.carreers_message}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Position Openings</h3>
                    <div className="underline mx-auto"></div>
                    <div className="row">

                        {/* JOB #1 */}
                        {jobs.job_title1 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title1}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption1}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #2 */}
                        {jobs.job_title2 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title2}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption2}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #3 */}
                        {jobs.job_title3 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title3}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption3}</p>
                                </div>
                            </div>
                        </div>}
                        
                        {/* JOB #4 */}
                        {jobs.job_title4 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title4}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption4}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #5 */}
                        {jobs.job_title5 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title5}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption5}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #6 */}
                        {jobs.job_title6 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title6}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption6}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #7 */}
                        {jobs.job_title7 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title7}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption7}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #8 */}
                        {jobs.job_title8 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title8}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption8}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #9 */}
                        {jobs.job_title9 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title9}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption9}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #10 */}
                        {jobs.job_title10 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title10}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption10}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #11 */}
                        {jobs.job_title11 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title11}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption11}</p>
                                </div>
                            </div>
                        </div>}

                        {/* JOB #12 */}
                        {jobs.job_title12 != "" && <div className="col-sm-4 mb-4">
                            <div className="card h-100">
                                <div className="card-header">{jobs.job_title12}</div>
                                <div className="card-body">
                                    <p className="card-text">{jobs.job_desciption12}</p>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Careers;