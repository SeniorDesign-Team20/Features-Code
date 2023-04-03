import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';

import Protected from './Protected';
import { AuthContextProvider } from './AuthContext';
import ProductPage from '../Shopping/ProductPage';

import * as features from './../../selectedFeatures'

import Home from './../../layout/home_page/Home';
import Google_Navbar from './Google_Navbar';
//import {CartProvider} from './../Shopping/CartContext';


const LazyAbout        = React.lazy(() => import('./../About/About'));
const LazyPrivacy      = React.lazy(() => import('../Privacy/Privacy'));
const LazyHours        = React.lazy(() => import('./../Hours/hours'));
const LazyContact      = React.lazy(() => import('../Contact/Contact'));
const LazyThank_You    = React.lazy(() => import('../Contact/ThankYou'));
const LazyHelp         = React.lazy(() => import('./../Help'));
const LazyCareers      = React.lazy(() => import('../Careers/Careers'));
const LazyPeople       = React.lazy(() => import('./../People/People'));
const LazyFAQ          = React.lazy(() => import('./../FAQs'));
const LazyWeather      = React.lazy(() => import('./../Weather/Weather'));
const LazyCalendar     = React.lazy(() => import('./../Calendar/Calendar'));
const LazyChat         = React.lazy(() => import('./../Chat/Chat'));
const LazyFile_Upload  = React.lazy(() => import('./../File_Upload/File_Upload'));
const LazyAccount      = React.lazy(() => import('./../Google_Login/Account'));
const LazySignin       = React.lazy(() => import('./../Google_Login/Signin'));
const LazyMap          = React.lazy(() => import('./../Map/Map'));
const LazyApply        = React.lazy(() => import('./../Apply/Apply'));
const LazyApplyThankYou= React.lazy(() => import('./../Apply/Apply_Thank_You'));
const LazyProducts     = React.lazy(() => import('./../Shopping/Products'))
const LazyCart         = React.lazy(() => import('./../Shopping/ShoppingCart'))
const CartProvider     = React.lazy(() => import('./../Shopping/CartContext').then(module => ({ default: module.CartProvider })));
const LazyCheckout     = React.lazy(() => import('./../Shopping/Checkout'));
function Pagination(){
    return(
        <div>
            <AuthContextProvider>
            <CartProvider>
                    <Google_Navbar />
                    <Routes>
                    <Route exact path='/' element={<Home />} />
                    {features.include_privacy     && <Route path='/privacy'    element={<Protected><Suspense><LazyPrivacy /></Suspense></Protected>} />}
                    {features.include_about       && <Route path='/about'      element={<Protected><Suspense><LazyAbout /></Suspense></Protected>} />}
                    {features.include_hours       && <Route path='/hours'      element={<Protected><Suspense><LazyHours /></Suspense></Protected>} />}
                    {features.include_contact     && <Route path='/contact'    element={<Protected><Suspense><LazyContact/></Suspense></Protected>} />}
                    {features.include_contact     && <Route path='/thankyou'   element={<Protected><Suspense><LazyThank_You/></Suspense></Protected>} />}
                    {features.include_help        && <Route path='/help'       element={<Protected><Suspense><LazyHelp/></Suspense></Protected>} />}
                    {features.include_careers     && <Route path='/careers'    element={<Protected><Suspense><LazyCareers/></Suspense></Protected>} />}
                    {features.include_people      && <Route path='/people'     element={<Protected><Suspense><LazyPeople/></Suspense></Protected>} />}
                    {features.include_faq         && <Route path='/faq'        element={<Protected><Suspense><LazyFAQ/></Suspense></Protected>} />}
                    {features.include_weather     && <Route path='/weather'    element={<Protected><Suspense><LazyWeather/></Suspense></Protected>} />}
                    {features.include_calendar    && <Route path='/calendar'   element={<Protected><Suspense><LazyCalendar/></Suspense></Protected>} />}
                    {features.include_chat        && <Route path='/chat'       element={<Protected><Suspense><LazyChat/></Suspense></Protected>} />}
                    {features.include_fileUpload  && <Route path='/fileUpload' element={<Protected><Suspense><LazyFile_Upload/></Suspense></Protected>} />}
                    {features.include_map         && <Route path='/map'        element={<Protected><Suspense><LazyMap/></Suspense></Protected>} />}
                    {features.include_apply       && <Route path='/apply'      element={<Protected><Suspense><LazyApply /></Suspense></Protected>} />}
                    {features.include_apply       && <Route path='/thanks'   element={<Protected><Suspense><LazyApplyThankYou/></Suspense></Protected>} />}
                    {features.include_products    && <Route path ='/products'  element={<Protected><Suspense><LazyProducts/></Suspense></Protected>}/>}
                    {features.include_products    && <Route path='/mycart'     element={<Protected><Suspense><LazyCart/></Suspense></Protected>}/>}
                    {features.include_products    && <Route path='/products/:productId' element={<Protected><Suspense><ProductPage/></Suspense></Protected>}/>}
                    {features.include_products    && <Route path='/checkout' element={<Protected><Suspense><LazyCheckout/></Suspense></Protected>}/>}
                    {<Route path='/account'    element={<Protected><Suspense><LazyAccount/></Suspense></Protected>} />}
                    {<Route path='/signin'    element={<Suspense><LazySignin/></Suspense>} />}
                    </Routes>
            </CartProvider>
            </AuthContextProvider>
        </div>
    );
}

export default Pagination;