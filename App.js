import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Suspense } from 'react';

//import Logo from './logo';
import Home from './pages/Home';
//import About from './pages/About';
//import Contact from './pages/Contact';
//import Help from './pages/Help';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./styles.css"

import {include_about, include_contact, include_help, include_jobs} from './selectedFeatures'
const LazyAbout = React.lazy(() => import('./pages/About'));
const LazyContact = React.lazy(() => import('./pages/Contact'));
const LazyHelp = React.lazy(() => import('./pages/Help'));
const LazyJobs = React.lazy(() => import('./pages/Jobs'));
{/*npm install --save react-router-dom*/}

export default function App() {
  return (
    <View>
      {/* Show the Logo */}
      {/* Navbar */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          {include_about && <Route path='/about' element={<Suspense><LazyAbout/></Suspense>} />}
          {include_contact && <Route path='/contact' element={<Suspense><LazyContact/></Suspense>} />}
          {include_help && <Route path='/help' element={<Suspense><LazyHelp/></Suspense>} />}
          {include_jobs && <Route path='/jobs' element={<Suspense><LazyJobs/></Suspense>} />}
        </Routes>
      </Router>  

      <View style={styles.container}>
        <Text>This is the generated app</Text>
        <StatusBar style="auto" />
      </View>
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
