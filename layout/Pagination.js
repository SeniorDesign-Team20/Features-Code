import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';

import * as features from './../selectedFeatures'

import Navbar from './Navbar';

import Home from './home_page/Home';
import About from './../pages/About/About';
import Privacy from './../pages/Privacy';

const LazyContact      = React.lazy(() => import('./../pages/Contact'));
const LazyHelp         = React.lazy(() => import('./../pages/Help'));
const LazyCareers      = React.lazy(() => import('./../pages/Careers'));
const LazyJobs         = React.lazy(() => import('./../pages/Jobs'));
const LazyPeople       = React.lazy(() => import('./../pages/People/People'));
const LazyFAQ          = React.lazy(() => import('./../pages/FAQs'));
const LazyWeather      = React.lazy(() => import('./../pages/Weather/Weather'));
const LazyCalendar     = React.lazy(() => import('./../pages/Calendar/Calendar'));
const LazyChat         = React.lazy(() => import('./../pages/Chat/Chat'));
const LazyFile_Upload  = React.lazy(() => import('./../pages/File_Upload/File_Upload'));
const LazyReviews      = React.lazy(() => import('./../pages/Reviews/Reviews'));
const LazyMap          = React.lazy(() => import('./../pages/Map/Map'));

function Pagination(){
    return(
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/about' element={<About />} />
                {features.include_contact     && <Route path='/contact'    element={<Suspense><LazyContact/></Suspense>} />}
                {features.include_help        && <Route path='/help'       element={<Suspense><LazyHelp/></Suspense>} />}
                {features.include_jobs        && <Route path='/jobs'       element={<Suspense><LazyJobs/></Suspense>} />}
                {features.include_careers     && <Route path='/careers'    element={<Suspense><LazyCareers/></Suspense>} />}
                {features.include_people      && <Route path='/people'     element={<Suspense><LazyPeople/></Suspense>} />}
                {features.include_faq         && <Route path='/faq'        element={<Suspense><LazyFAQ/></Suspense>} />}
                {features.include_weather     && <Route path='/weather'    element={<Suspense><LazyWeather/></Suspense>} />}
                {features.include_calendar    && <Route path='/calendar'   element={<Suspense><LazyCalendar/></Suspense>} />}
                {features.include_chat        && <Route path='/chat'       element={<Suspense><LazyChat/></Suspense>} />}
                {features.include_fileUpload  && <Route path='/fileUpload' element={<Suspense><LazyFile_Upload/></Suspense>} />}
                {features.include_reviews     && <Route path='/reviews'    element={<Suspense><LazyReviews/></Suspense>} />}
                {features.include_map         && <Route path='/map'        element={<Suspense><LazyMap/></Suspense>} />}
            </Routes>
        </div>
    );
}

export default Pagination;