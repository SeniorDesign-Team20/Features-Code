import React from "react";
import {Helmet} from "react-helmet";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./hours.css"
import * as hours from './../../files_to_modify/store_hours';

function Hours(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Hours</title>
            </Helmet>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Our Hours</h3>
                    <div className="underline mx-auto"></div>
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        {hours.type_of_hours1 != "" && <th scope="col">{hours.type_of_hours1}</th>}
                                        {hours.type_of_hours2 != "" && <th scope="col">{hours.type_of_hours2}</th>}
                                        {hours.type_of_hours3 != "" && <th scope="col">{hours.type_of_hours3}</th>}
                                        {hours.type_of_hours4 != "" && <th scope="col">{hours.type_of_hours4}</th>}
                                        {hours.type_of_hours5 != "" && <th scope="col">{hours.type_of_hours5}</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Sunday</th>
                                        {hours.type_of_hours1 != "" && <td>{hours.Sunday1}</td>}
                                        {hours.type_of_hours2 != "" && <td>{hours.Sunday2}</td>}
                                        {hours.type_of_hours3 != "" && <td>{hours.Sunday3}</td>}
                                        {hours.type_of_hours4 != "" && <td>{hours.Sunday4}</td>}
                                        {hours.type_of_hours5 != "" && <td>{hours.Sunday5}</td>}
                                    </tr>
                                    <tr>
                                        <th scope="row">Monday</th>
                                        {hours.type_of_hours1 != "" && <td>{hours.Monday1}</td>}
                                        {hours.type_of_hours2 != "" && <td>{hours.Monday2}</td>}
                                        {hours.type_of_hours3 != "" && <td>{hours.Monday3}</td>}
                                        {hours.type_of_hours4 != "" && <td>{hours.Monday4}</td>}
                                        {hours.type_of_hours5 != "" && <td>{hours.Monday5}</td>}
                                    </tr>
                                    <tr>
                                        <th scope="row">Tuesday</th>
                                        {hours.type_of_hours1 != "" && <td>{hours.Tuesday1}</td>}
                                        {hours.type_of_hours2 != "" && <td>{hours.Tuesday2}</td>}
                                        {hours.type_of_hours3 != "" && <td>{hours.Tuesday3}</td>}
                                        {hours.type_of_hours4 != "" && <td>{hours.Tuesday4}</td>}
                                        {hours.type_of_hours5 != "" && <td>{hours.Tuesday5}</td>}
                                    </tr>
                                    <tr>
                                        <th scope="row">Wednesday</th>
                                        {hours.type_of_hours1 != "" && <td>{hours.Wednesday1}</td>}
                                        {hours.type_of_hours2 != "" && <td>{hours.Wednesday2}</td>}
                                        {hours.type_of_hours3 != "" && <td>{hours.Wednesday3}</td>}
                                        {hours.type_of_hours4 != "" && <td>{hours.Wednesday4}</td>}
                                        {hours.type_of_hours5 != "" && <td>{hours.Wednesday5}</td>}
                                    </tr>
                                    <tr>
                                        <th scope="row">Thursday</th>
                                        {hours.type_of_hours1 != "" && <td>{hours.Thursday1}</td>}
                                        {hours.type_of_hours2 != "" && <td>{hours.Thursday2}</td>}
                                        {hours.type_of_hours3 != "" && <td>{hours.Thursday3}</td>}
                                        {hours.type_of_hours4 != "" && <td>{hours.Thursday4}</td>}
                                        {hours.type_of_hours5 != "" && <td>{hours.Thursday5}</td>}
                                    </tr>
                                    <tr>
                                        <th scope="row">Friday</th>
                                        {hours.type_of_hours1 != "" && <td>{hours.Friday1}</td>}
                                        {hours.type_of_hours2 != "" && <td>{hours.Friday2}</td>}
                                        {hours.type_of_hours3 != "" && <td>{hours.Friday3}</td>}
                                        {hours.type_of_hours4 != "" && <td>{hours.Friday4}</td>}
                                        {hours.type_of_hours5 != "" && <td>{hours.Friday5}</td>}
                                    </tr>
                                    <tr>
                                        <th scope="row">Saturday</th>
                                        {hours.type_of_hours1 != "" && <td>{hours.Saturday1}</td>}
                                        {hours.type_of_hours2 != "" && <td>{hours.Saturday2}</td>}
                                        {hours.type_of_hours3 != "" && <td>{hours.Saturday3}</td>}
                                        {hours.type_of_hours4 != "" && <td>{hours.Saturday4}</td>}
                                        {hours.type_of_hours5 != "" && <td>{hours.Saturday5}</td>}
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Hours;