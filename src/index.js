/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles navbar bootstrap
import 'assets/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// styles

import "assets/scss/paper-kit.scss";
// import "assets/demo/demo.css";


// pages
import Index from "views/Index.js";


import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

// English Pages

import EnglishPage from 'views/examples/EnglishPage.js';



// others
import Values from "components/Values";
import Projects from "components/Projects";
import Alliance from "components/Alliance";
import About from "components/About";
import Automatization from "components/Automatization";
import Telemetry from "components/Telemetry";
import Telecontrol from "components/Telecontrol";
import ScadaSystems from "components/ScadaSystem";
import Hydrometeorology from "components/Hydrometeorology";
import HydrometeorologyPictures from 'components/HydrometeorologyPictures';
import Engineering from "components/Engineering";
import Consulting from "components/Consulting";
import FlowRate from "components/FlowRate";
import Support from "components/Support";
import DamWaterControl from "components/DamWaterControl";
import SpecializedEngineering from "components/SpecializedEngineering";
import Clients from "components/Clients";
import ContactForm from "components/ContactForm";
import WelcomePage from "components/WelcomePage";
import WelcomePictures from 'components/WelcomePictures';
import Experience from "components/Experience";


// English
import WelcomePageEn from 'views/english/WelcomePageEn.js';


import ValuesEn from 'views/english/ValuesEn.js';
import ProjectsEn from 'views/english/ProjectsEn.js';

import AllianceEn from 'views/english/AllianceEn.js';
import AboutEn from 'views/english/AboutEn.js';

import AutomatizationEn from 'views/english/AutomatizationEn.js';

import TelemetryEn from 'views/english/TelemetryEn.js';
import TelecontrolEn from 'views/english/TelecontrolEn.js';
import ScadaSystemEn from 'views/english/ScadaSystemEn.js';
import HydrometeorologyEn from 'views/english/HydrometeorologyEn.js';
import EngineeringEn from 'views/english/EngineeringEn.js';
import ConsultingEn from 'views/english/ConsultingEn.js';
import FlowRateEn from 'views/english/FlowRateEn.js';
import SupportEn from 'views/english/SupportEn.js';
import DamWaterControlEn from 'views/english/DamWaterControlEn.js';
import SpecializedEngineeringEn from 'views/english/SpecializedEngineeringEn.js';


import ClientsEn from 'views/english/ClientsEn.js';

import ContactFormEn from 'views/english/ContactFormEn.js';

import ExperienceEn from 'views/english/ExperienceEn.js';

// French
import FrenchPage from "views/examples/FrenchPage";
import ValuesFr from "views/french/ValuesFr";
import ExperienceFr from "views/french/ExperienceFr";
import AllianceFr from "views/french/AllianceFr";
import AutomatizationFr from "views/french/AutomatizationFr";
import AboutFr from "views/french/AboutFr";

import TelemetryFr from "views/french/TelemetryFr";
import TelecontrolFr from "views/french/TelecontrolFr";
import ScadaSystemsFr from "views/french/ScadaSystemFr";
import HydrometeorologyFr from "views/french/HydrometeorologyFr";
import EngineeringFr from "views/french/EngineeringFr";
import ConsultingFr from "views/french/ConsultingFr";
import SupportFr from "views/french/SupportFr";
import FlowRateFr from "views/french/FlowRateFr";
import DamWaterControlFr from "views/french/DamWaterControlFr";
import SpecializedEngineeringFr from "views/french/SpecializedEngineeringFr";


import ProjectsFr from "views/french/ProjectsFr";
import ClientsFr from "views/french/ClientsFr";
import ContactFormFr from "views/french/ContactFormFr";
import WelcomePageFr from "views/french/WelcomePageFr";





ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
       <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />


      {/* About Us */}

      <Route
        path="/welcome-page"
        render={props => <WelcomePage {...props} />}
      />
      <Route
        path="/welcome-pictures"
        render={props => <WelcomePictures {...props} />}
      />
       <Route
        path="/values-page"
        render={props => <Values {...props} />}
      />
          
       <Route
        path="/experience-page"
        render={props => <Experience {...props} />}
      />
      <Route
        path="/alliance-page"
        render={props => <Alliance {...props} />}
      />
       <Route
        path="/about-page"
        render={props => <About {...props} />}
      />

      {/* Products */}

       <Route
        path="/automatization-page"
        render={props => <Automatization {...props} />}
      />
      <Route
        path="/telemetry-page"
        render={props => <Telemetry {...props} />}
      />
      <Route
        path="/telecontrol-page"
        render={props => <Telecontrol {...props} />}
      />
      <Route
        path="/scadaSystems-page"
        render={props => <ScadaSystems {...props} />}
      />
      <Route
        path="/hydrometeorology-page"
        render={props => <Hydrometeorology {...props} />}
      />
      <Route
        path="/hydrometeorology-pictures"
        render={props => <HydrometeorologyPictures {...props} />}
      />
      



      {/* Services */}
      <Route
        path="/engineering-page"
        render={props => <Engineering {...props} />}
      />
      <Route
        path="/consulting-page"
        render={props => <Consulting {...props} />}
      />
      <Route
        path="/support-page"
        render={props => <Support {...props} />}
      />
      <Route
        path="/flowRate-page"
        render={props => <FlowRate {...props} />}
      />
      <Route
        path="/damWaterControl-page"
        render={props => <DamWaterControl {...props} />}
      />
      <Route
        path="/specializedEngineering-page"
        render={props => <SpecializedEngineering {...props} />}
      />
 
      {/* Projects  */}

      <Route
        path="/projects-page"
        render={props => <Projects {...props} />}
      />

      {/* Clients  */}

      <Route
        path="/clients-page"
        render={props => <Clients {...props} />}
      /> 

      {/* Contact Us */}

      <Route
        path="/contactForm-page"
        render={props => <ContactForm {...props} />}
      />

               {/* ---------------------------------------------- English --------------------------------------------------- */}

        <Route
         path="/english-page"
         render={props => <EnglishPage {...props} />}
       />
       <Route
         path="/welcome-page-en"
         render={props => <WelcomePageEn {...props} />}
       />
        <Route
         path="/values-page-en"
         render={props => <ValuesEn {...props} />}
       />      
        <Route
         path="/experience-page-en"
         render={props => <ExperienceEn {...props} />}
       />
       <Route
         path="/alliance-page-en"
         render={props => <AllianceEn {...props} />}
       />
        <Route
         path="/about-page-en"
         render={props => <AboutEn {...props} />}
       />

      {/* Product  */}
        <Route
         path="/automatization-page-en"
         render={props => <AutomatizationEn {...props} />}
       />
       <Route
         path="/telemetry-page-en"
         render={props => <TelemetryEn {...props} />}
       />
       <Route
         path="/telecontrol-page-en"
         render={props => <TelecontrolEn {...props} />}
       />
       <Route
         path="/scadaSystems-page-en"
         render={props => <ScadaSystemEn {...props} />}
         
       />
       <Route
         path="/hydrometeorology-page-en"
         render={props => <HydrometeorologyEn {...props} />}
       />

       {/* SERVICES  */}
 
 
       
       <Route
         path="/engineering-page-en"
         render={props => <EngineeringEn {...props} />}
       />
       <Route
         path="/consulting-page-en"
         render={props => <ConsultingEn {...props} />}
       />
       <Route
         path="/support-page-en"
         render={props => <SupportEn {...props} />}
       />
       <Route
         path="/flowRate-page-en"
         render={props => <FlowRateEn {...props} />}
       />
       <Route
         path="/damWaterControl-page-en"
         render={props => <DamWaterControlEn {...props} />}
       />
           <Route
         path="/specializedEngineering-page-en"
         render={props => <SpecializedEngineeringEn {...props} />}
       />
     


  
       {/* Projects  */}
 
       <Route
         path="/projects-page-en"
         render={props => <ProjectsEn {...props} />}
       />
 
       {/* Clients  */}
 
       <Route
         path="/clients-page-en"
         render={props => <ClientsEn {...props} />}
       /> 
 
       
 
       <Route
         path="/contactForm-page-en"
         render={props => <ContactFormEn {...props} />}
         /> 



{/* ---------------------------------------------- French --------------------------------------------------- */}

<Route
         path="/french-page"
         render={props => <FrenchPage {...props} />}
       />
 
       <Route
         path="/welcome-page-fr"
         render={props => <WelcomePageFr {...props} />}
       />
        <Route
         path="/values-page-fr"
         render={props => <ValuesFr {...props} />}
       />
           
        <Route
         path="/experience-page-fr"
         render={props => <ExperienceFr {...props} />}
       />
       <Route
         path="/alliance-page-fr"
         render={props => <AllianceFr {...props} />}
       /> 
        <Route
         path="/about-page-fr"
         render={props => <AboutFr {...props} />}
       /> 
      
 
      
 
        <Route
         path="/automatization-page-fr"
         render={props => <AutomatizationFr {...props} />}
       />
       <Route
         path="/telemetry-page-fr"
         render={props => <TelemetryFr {...props} />}
       />
       <Route
         path="/telecontrol-page-fr"
         render={props => <TelecontrolFr {...props} />}
       />
       <Route
         path="/scadaSystems-page-fr"
         render={props => <ScadaSystemsFr {...props} />}
         
       />
       <Route
         path="/hydrometeorology-page-fr"
         render={props => <HydrometeorologyFr {...props} />}
       />
 
 
       
       <Route
         path="/engineering-page-fr"
         render={props => <EngineeringFr {...props} />}
       />
       <Route
         path="/consulting-page-fr"
         render={props => <ConsultingFr {...props} />}
       />
       <Route
         path="/support-page-fr"
         render={props => <SupportFr {...props} />}
       />
       <Route
         path="/flowRate-page-fr"
         render={props => <FlowRateFr {...props} />}
       />
       <Route
         path="/damWaterControl-page-fr"
         render={props => <DamWaterControlFr {...props} />}
       />
       <Route
         path="/SpecializedEngineering-page-fr"
         render={props => <SpecializedEngineeringFr {...props} />}
       />

  
       {/* Projects  */}
 
       <Route
         path="/projects-page-fr"
         render={props => <ProjectsFr {...props} />}
       />
 
       {/* Clients  */}
 
       <Route
         path="/clients-page-fr"
         render={props => <ClientsFr {...props} />}
       /> 
 
       
 
       <Route
         path="/contactForm-page-fr"
         render={props => <ContactFormFr {...props} />}
         /> 




      <Redirect to="/index" />
     
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
