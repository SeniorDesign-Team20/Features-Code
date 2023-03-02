import { StyleSheet, Text, View } from 'react-native';
import React, { Suspense } from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {company_name} from './files_to_modify/company_info'
import {include_googleLogin} from './selectedFeatures'

import "./styles.css"

import Footer from './layout/Footer/Footer';

const LazyPagination              = React.lazy(() => import('./layout/Pagination'));
const LazyGoogle_Login_Pagination = React.lazy(() => import('./pages/Google_Login/Pagination'));
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
        {!include_googleLogin && <Suspense> <LazyPagination/> </Suspense>}
        {include_googleLogin  && <Suspense> <LazyGoogle_Login_Pagination/> </Suspense>}

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
