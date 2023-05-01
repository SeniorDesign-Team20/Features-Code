import React, { Suspense } from 'react';
import Header from './Header.js'
import {include_reviews, include_activityFeed} from './../../selectedFeatures'
import "./../../styles.css"

const LazyReviews = React.lazy(() => import('./../../pages/Reviews/Reviews'));
const LazyActivity = React.lazy(() => import('./../../pages/Activity_Feed/Activity_Feed'));

function Home(){
    return(
        <div className="gradient__bg">
            <Header ></Header>
            {include_reviews && <Suspense><LazyReviews/></Suspense>}
            {include_activityFeed && <Suspense><LazyActivity/></Suspense>}
        </div>
    );
}


export default Home;
