import React from 'react'
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineInstagram } from "react-icons/ai";
import {BsYoutube}  from "react-icons/bs";
import {TiSocialPinterest} from "react-icons/ti"
export default function Footer() {
  return (
    <div className='bg-light p-5'>
        <div className="row container">
            <div className="col-md-4">
                <h3>Furi</h3>
                <p>Furi is a leading furniture manufacturer known worldwide for its impeccable quality, exceptional customer service, and fair prices. </p>
                <p>Created with Draftium ©</p>
            </div>
            <div className="col-md-4">
                <div className="row justify-content-between">
                    <div className="col-md-3 mx-1"><p>Catalog</p></div>
                    <div className="col-md-3 mx-1"><p>About Us</p></div>
                    <div className="col-md-3 mx-1"><p>Blog</p></div>
                    <div className="col-md-3 mx-1"><p>Testimonials</p></div>
                    <div className="col-md-3 mx-1"><p>FAQ</p></div>
                    <div className="col-md-3 mx-1"><p>Projects</p></div>
                    <div className="col-md-3 mx-1"><p>Contacts</p></div>
                </div>
            </div>
            <div className="col-md-4 text-center">
                <p>Follow Us</p>    
                <div className="d-flex justify-content-center">
                    <span ><FaFacebookF className='fs-2 border border-secondary rounded-circle p-1  mx-1' /></span>
                    <span><AiOutlineInstagram  className='fs-2 border border-secondary rounded-circle p-1  mx-1' /></span>
                    <span><BsYoutube  className='fs-2 border border-secondary rounded-circle p-1  mx-1' /></span>
                    <span><TiSocialPinterest  className='fs-2 border border-secondary rounded-circle p-1 mx-1' /></span>
                </div>
            </div>
        </div>
    </div>
  )
}
