import React, { Suspense } from 'react';
import Header from './Header.js'
import {include_reviews} from './../../selectedFeatures'
import "./../../styles.css"

const LazyReviews = React.lazy(() => import('./../../pages/Reviews/Reviews'));

function Home(){
    return(
        <div className="gradient__bg">
            <Header ></Header>
            {include_reviews && <Suspense><LazyReviews/></Suspense>}
        </div>
    );
}


export default Home;
