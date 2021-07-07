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
import 'assets/css/bootstrap.min.css';


// core components



//header


import FrenchNavBar from "components/Navbars/FrenchNavBar";
import FrenchHeader from "components/Headers/FrenchHeader";
import FrenchFooterPage from "components/Footers/FrenchFooterPage";





const FrenchPage = () => {

  return (
    <>
    <FrenchNavBar></FrenchNavBar> 

    <FrenchHeader></FrenchHeader>

    <div className="main">

  

      </div>

      <FrenchFooterPage />
    </>
  );
}

export default FrenchPage;
