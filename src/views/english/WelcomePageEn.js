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
import WelcomePictures from 'components/WelcomePictures';

// Header and Footer
import EnglishFooterPage from 'components/Footers/EnglishFooterPage';
import EnglishNavBar from 'components/Navbars/EnglishNavBar';


// reactstrap components
import {  Container } from "reactstrap";


// core components

function WelcomePageEn() {
  return (
    <>
    <div className="section section-image section-login"
            style={{ backgroundImage: "url(" + require("assets/img/background/10.png") + ")" }} > 
            <EnglishNavBar />
            <br />  <br />
    <div id="images">
        <Container>
            <div className="title"  >
                <h2 align="center"> We are APR CONTROL</h2>
                    <br />
                    <h4 align="justify"> 
                    APR-Control offers the highest degree of expertise in the proposal, bidding, design, and implementation of automation projects and SCADA in sectors such as Electric, water and wastewater, oil & gas, environment, food and beverage, power generation, manufacturing, mining, and material handling, renewable energy, government, fishing.   
                    </h4>
                    <h4 align="justify">
                    APR Control's priority is serving the customer and providing technically sound and cost-effective solutions. More than fifteen years are a testimony of our success.
                    </h4>
                    <br />
                    <h4 align="justify"> 
                    In addition to the latest in automation and SCADA, here you will also find state-of-the-art solutions for highly specialized engineering services in variable frequency drive systems, power systems, resonant and non-resonant large power supplies for the induction heating industry, simulation, and analysis.   
                    </h4>
                    <br />
                    <WelcomePictures></WelcomePictures>


            </div>
        </Container>
    </div>
    </div>
    <EnglishFooterPage></EnglishFooterPage>

    </>
  );
}

export default WelcomePageEn;
