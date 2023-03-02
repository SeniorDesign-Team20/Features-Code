import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';

import Protected from './Protected';
import { AuthContextProvider } from './AuthContext';

import * as features from './../../selectedFeatures'

import Home from './../../layout/home_page/Home';
import About from './..//About/About';
import Privacy from './../Privacy';
import Google_Navbar from './Google_Navbar';

const LazyContact      = React.lazy(() => import('./../Contact'));
const LazyHelp         = React.lazy(() => import('./../Help'));
const LazyCareers      = React.lazy(() => import('./../Careers'));
const LazyJobs         = React.lazy(() => import('./../Jobs'));
const LazyPeople       = React.lazy(() => import('./../People/People'));
const LazyFAQ          = React.lazy(() => import('./../FAQs'));
const LazyWeather      = React.lazy(() => import('./../Weather/Weather'));
const LazyCalendar     = React.lazy(() => import('./../Calendar/Calendar'));
const LazyChat         = React.lazy(() => import('./../Chat/Chat'));
const LazyFile_Upload  = React.lazy(() => import('./../File_Upload/File_Upload'));
const LazyAccount      = React.lazy(() => import('./../Google_Login/Account'));
const LazySignin       = React.lazy(() => import('./../Google_Login/Signin'));
const LazyReviews      = React.lazy(() => import('./../Reviews/Reviews'));

function Pagination(){
    return(
        <div>
            <AuthContextProvider>
                <Google_Navbar />
                <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/privacy' element={<Protected><Privacy /></Protected>} />
                <Route path='/about' element={<Protected><About /></Protected>} />
                {features.include_contact     && <Route path='/contact'    element={<Protected><Suspense><LazyContact/></Suspense></Protected>} />}
                {features.include_help        && <Route path='/help'       element={<Protected><Suspense><LazyHelp/></Suspense></Protected>} />}
                {features.include_jobs        && <Route path='/jobs'       element={<Protected><Suspense><LazyJobs/></Suspense></Protected>} />}
                {features.include_careers     && <Route path='/careers'    element={<Protected><Suspense><LazyCareers/></Suspense></Protected>} />}
                {features.include_people      && <Route path='/people'     element={<Protected><Suspense><LazyPeople/></Suspense></Protected>} />}
                {features.include_faq         && <Route path='/faq'        element={<Protected><Suspense><LazyFAQ/></Suspense></Protected>} />}
                {features.include_weather     && <Route path='/weather'    element={<Protected><Suspense><LazyWeather/></Suspense></Protected>} />}
                {features.include_calendar    && <Route path='/calendar'   element={<Protected><Suspense><LazyCalendar/></Suspense></Protected>} />}
                {features.include_chat        && <Route path='/chat'       element={<Protected><Suspense><LazyChat/></Suspense></Protected>} />}
                {features.include_fileUpload  && <Route path='/fileUpload' element={<Protected><Suspense><LazyFile_Upload/></Suspense></Protected>} />}
                {features.include_reviews     && <Route path='/reviews'    element={<Protected><Suspense><LazyReviews/></Suspense></Protected>} />}
                {<Route path='/account'    element={<Protected><Suspense><LazyAccount/></Suspense></Protected>} />}
                { <Route path='/signin'    element={<Suspense><LazySignin/></Suspense>} />}
                </Routes>
            </AuthContextProvider>
        </div>
    );
}

export default Pagination;