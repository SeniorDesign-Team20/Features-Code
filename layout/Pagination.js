import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';

import * as features from './../selectedFeatures'

import Navbar from './Navbar';

import Home from './home_page/Home';

const LazyAbout        = React.lazy(() => import('../pages/About/About'));
const LazyPrivacy      = React.lazy(() => import('../pages/Privacy/Privacy'));
const LazyHours        = React.lazy(() => import('../pages/Hours/hours'));
const LazyContact      = React.lazy(() => import('../pages/Contact/Contact'));
const LazyThank_You    = React.lazy(() => import('../pages/Contact/ThankYou'));
const LazyHelp         = React.lazy(() => import('./../pages/Help'));
const LazyCareers      = React.lazy(() => import('../pages/Careers/Careers'));
const LazyPeople       = React.lazy(() => import('./../pages/People/People'));
const LazyFAQ          = React.lazy(() => import('./../pages/FAQs'));
const LazyWeather      = React.lazy(() => import('./../pages/Weather/Weather'));
const LazyCalendar     = React.lazy(() => import('./../pages/Calendar/Calendar'));
const LazyChat         = React.lazy(() => import('./../pages/Chat/Chat'));
const LazyFile_Upload  = React.lazy(() => import('./../pages/File_Upload/File_Upload'));
const LazyMap          = React.lazy(() => import('./../pages/Map/Map'));
const LazyApply        = React.lazy(() => import('./../pages/Apply/Apply'));
const LazyApplyThankYou= React.lazy(() => import('./../pages/Apply/Apply_Thank_You'));

function Pagination(){
    return(
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                {features.include_privacy     && <Route path='/privacy'    element={<Suspense><LazyPrivacy /></Suspense>} />}
                {features.include_about       && <Route path='/about'      element={<Suspense><LazyAbout /></Suspense>} />}
                {features.include_hours       && <Route path='/hours'      element={<Suspense><LazyHours /></Suspense>} />}
                {features.include_contact     && <Route path='/contact'    element={<Suspense><LazyContact/></Suspense>} />}
                {features.include_contact     && <Route path='/thankyou'   element={<Suspense><LazyThank_You/></Suspense>} />}
                {features.include_help        && <Route path='/help'       element={<Suspense><LazyHelp/></Suspense>} />}
                {features.include_careers     && <Route path='/careers'    element={<Suspense><LazyCareers/></Suspense>} />}
                {features.include_people      && <Route path='/people'     element={<Suspense><LazyPeople/></Suspense>} />}
                {features.include_faq         && <Route path='/faq'        element={<Suspense><LazyFAQ/></Suspense>} />}
                {features.include_weather     && <Route path='/weather'    element={<Suspense><LazyWeather/></Suspense>} />}
                {features.include_calendar    && <Route path='/calendar'   element={<Suspense><LazyCalendar/></Suspense>} />}
                {features.include_chat        && <Route path='/chat'       element={<Suspense><LazyChat/></Suspense>} />}
                {features.include_fileUpload  && <Route path='/fileUpload' element={<Suspense><LazyFile_Upload/></Suspense>} />}
                {features.include_map         && <Route path='/map'        element={<Suspense><LazyMap/></Suspense>} />}
                {features.include_apply       && <Route path='/apply'      element={<Suspense><LazyApply /></Suspense>} />}
                {features.include_apply       && <Route path='/thanks'   element={<Suspense><LazyApplyThankYou/></Suspense>} />}
            </Routes>
        </div>
    );
}

export default Pagination;