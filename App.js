import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Suspense } from 'react';
import {Helmet} from "react-helmet";

import Home from './home_page/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./styles.css"

import {company_name} from './files_to_modify/company_info'
import {include_contact, include_help, include_jobs, include_careers, include_people, include_faq} from './selectedFeatures'

const LazyContact = React.lazy(() => import('./pages/Contact'));
const LazyHelp = React.lazy(() => import('./pages/Help'));
const LazyCareers = React.lazy(() => import('./pages/Careers'));
const LazyJobs = React.lazy(() => import('./pages/Jobs'));
const LazyPeople = React.lazy(() => import('./pages/People'));
const LazyFAQ = React.lazy(() => import('./pages/FAQs'));
{/*npm install --save react-router-dom*/}

export default function App() {
  return (
    <View>
      {/* Tab Name */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{company_name}</title>
      </Helmet>

      <Router >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/about' element={<About />} />
          {include_contact && <Route path='/contact' element={<Suspense><LazyContact/></Suspense>} />}
          {include_help && <Route path='/help' element={<Suspense><LazyHelp/></Suspense>} />}
          {include_jobs && <Route path='/jobs' element={<Suspense><LazyJobs/></Suspense>} />}
          {include_careers && <Route path='/careers' element={<Suspense><LazyCareers/></Suspense>} />}
          {include_people && <Route path='/people' element={<Suspense><LazyPeople/></Suspense>} />}
          {include_faq && <Route path='/faq' element={<Suspense><LazyFAQ/></Suspense>} />}
        </Routes>

        <div className="footer">
        <Footer />
        </div>
      </Router>  

    {/*
      <View style={styles.container}>
        <Text>This is the generated app</Text>
        <StatusBar style="auto" />
      </View>
    */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
