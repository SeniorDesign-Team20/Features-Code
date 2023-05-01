// need be public pages

import React, {useState} from "react";
import {Helmet} from "react-helmet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {InstagramEmbed, FacebookEmbed , TwitterEmbed} from 'react-social-media-embed';

import './Activity_Feed.css'
import * as URLs from './../../files_to_modify/activity_feed'

function Activity_Feed(){ 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <div>
            <section className="section gradient__bg">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading name">Company Activity</h3>
                            <div className="underline mx-auto"></div>
                            
                            {URLs.social_media_type == "twitter" && <div className="row">
                                {URLs.twitter_url1 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><TwitterEmbed url={URLs.twitter_url1}/></div>
                                        </div>
                                    </div>
                                </div>}
                                {URLs.twitter_url2 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><TwitterEmbed url={URLs.twitter_url2}/></div>
                                        </div>
                                    </div>
                                </div>}
                                {URLs.twitter_url3 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><TwitterEmbed url={URLs.twitter_url3}/></div>
                                        </div>
                                    </div>
                                </div>}
                            </div>}

                            {URLs.social_media_type == "instagram" && <div className="row">
                                {URLs.instagram_url1 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><InstagramEmbed url={URLs.instagram_url1}/></div>
                                        </div>
                                    </div>
                                </div>}
                                {URLs.instagram_url2 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><InstagramEmbed url={URLs.instagram_url2}/></div>
                                        </div>
                                    </div>
                                </div>}
                                {URLs.instagram_url3 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><InstagramEmbed url={URLs.instagram_url3}/></div>
                                        </div>
                                    </div>
                                </div>}
                            </div>}

                            {URLs.social_media_type == "facebook" && <div className="row">
                                {URLs.facebook_url1 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><FacebookEmbed url={URLs.facebook_url1} width={320}/></div>
                                        </div>
                                    </div>
                                </div>}
                                {URLs.facebook_url2 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><FacebookEmbed url={URLs.facebook_url2} width={320}/></div>
                                        </div>
                                    </div>
                                </div>}
                                {URLs.facebook_url3 != ""  && <div className="col-sm-4">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div><FacebookEmbed url={URLs.facebook_url3} width={320}/></div>
                                        </div>
                                    </div>
                                </div>}
                            </div>}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Activity_Feed;
