import React from "react";
import Github from '../assets/github.webp'
import LinkedIn from '../assets/linkedIn.svg'
const Footer = () => 
<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                    </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
    <a href="https://github.com/ericrey93">
        <img src={Github}
        width={"50px"}
        style={{alignItems: "center", display: "flex", marginTop: "-20px"}}/>
    </a>
    <a href="https://www.linkedin.com/in/eric-reyes-0404b8273/">
        <img src={LinkedIn}
        width={"50px"}
        style={{alignItems: "center",
         display: "flex",
          marginTop: "-50px",
          marginLeft: "155px"}}/>
    </a>
            </div>
        </div>
    </div>
</footer>
export default Footer;