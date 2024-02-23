import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";

function Sidebar() {
  return (
    <div> <div class="group-313-Yp5" id="241:735">

    <p class="up-return-1hf" id="241:749">
      Up

      <br /><br />
      Return

    </p>
    <div class="auto-group-ksrs-5Sd" id="Lvgdu7b6kHxbb1qN89KSRs">
    
      <div class="group-314-hU1" id="241:737">
        <Link to={"/Dashboard"} class="dashboard-QdK" id="241:747"> <MdDashboard style={{marginRight: '50px'}}/>
   Dashboard</Link>
        <Link to={"/services"} class="services-xqB" id="241:746"><MdOutlineDesignServices style={{marginRight: '50px'}} /> Services</Link>
        <Link to={"/Aboutus"} class="about-us-4dK" id="241:739"><FaUser style={{marginRight: '50px'}}/>About us</Link>
        <Link to={"/Contact"} class="contact-us-yEV" id="241:740"><IoCall style={{marginRight: '50px'}}/>Contact us</Link>
        <Link to={"/Upload"} class="upload-pdf-fd7" id="241:744"><FaCloudUploadAlt style={{marginRight: '50px'}}/>Upload pdf</Link>
        <Link to={"/Download"} class="download-pdf-xs7" id="241:745"><FaCloudDownloadAlt style={{marginRight: '50px'}}/>Download pdf</Link>
        <Link to={"/Due"} class="reminder-sjB" id="241:742"><FaCalendarAlt style={{marginRight: '50px'}}/>Reminder</Link>
        <Link to={"/Feedback"} class="feedback-AyB" id="241:741"><MdFeedback style={{marginRight: '50px'}}/>Feedback </Link>
        <Link to={"/News"} class="news-updates-VEm" id="241:738"><IoNewspaper style={{marginRight: '50px'}}/>News &amp; Updates</Link>
        <Link to={"/Calc"} class="gst-calculator-p29" id="241:748"><FaCalculator style={{marginRight: '50px'}}/>Gst Calculator</Link>
     
      </div>
    </div>
  </div></div>
  )
}

export default Sidebar