import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Contact() {
  return (
    <div class="contact-us-2oo" id="241:733">
      <div class="rectangle-3852-rH3" id="243:442"></div>
      <div class="rectangle-3850-8kM" id="243:440"></div>
      <div class="group-2322-Fpy" id="241:734">
        <Sidebar />
        <div class="rectangle-10-cih" id="241:803"></div>
        <div class="table-style" id="241:804">
          <table class="capTable">
            <thead class="th">
              <tr>
                <td >First Name</td>
                <td >Last Name</td>
                <td >Phone no</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Isha</td>
                <td>Khatri</td>
                <td>7048746562</td>
              </tr>
              <tr>
                <td>Simran</td>
                <td>Khatri</td>
                <td>9856215626</td>
              </tr>
              <tr>
                <td>Mansi</td>
                <td>Soni</td>
                <td>7845874565</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-s3" id="201:807">
          <table class="captable3">
            <thead class="c1">
              <tr>
                <td >Email</td>
                <td >Subject</td>
                <td >Message</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>isha@gmil.com</td>
                <td>Advice</td>
                <td>-</td>
              </tr>
              <tr>
                <td>simran@gmil.com</td>
                <td>Inquiry</td>
                <td>-</td>
              </tr>
              <tr>
                <td>mansi@gmil.com</td>
                <td>Inquiry</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cnus-heading" id="1234">
          <h1>Contact us</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact