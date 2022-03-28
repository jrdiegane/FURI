import React from 'react'
import "./services.css";
import {ImNewspaper} from "react-icons/im";
import {BiBed} from "react-icons/bi";
import {FcTodoList} from "react-icons/fc"
import {MdMeetingRoom} from "react-icons/md"
import {AiOutlineFileProtect} from "react-icons/ai"
import {RiCustomerService2Fill} from "react-icons/ri"
import {FaUserClock , FaBoxOpen} from "react-icons/fa"






export default function Services() {
  return (
    <div className=''>
        <div className='container text-center mt-5'>
            <h2>What We Offer</h2>
            <p>Furi offers the highest quality wholesale furniture for real estate developers, furniture stores, interior designers, and online retailers. We provide worldwide access to our furniture with such advantages as:</p>
            <div className="row">
                <div className="col-md-3">
                    <span className='icons'><ImNewspaper /></span>
                    <p>Furi Furniture Company Information</p>
                </div>
                <div className="col-md-3">
                    <span className='icons'><BiBed /></span>
                    <p>A wide range of mid-level to high-end furnishings</p>
                </div>
                <div className="col-md-3">
                    <span className='icons'><FcTodoList /></span>
                    <p>No minimum warehouse order requirements</p>
                </div>
                <div className="col-md-3">
                    <span className='icons'><MdMeetingRoom /></span>
                    <p>Constantly updated catalog of products we offer</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <span className='icons'><RiCustomerService2Fill /></span>
                    <p>Impeccable customer service and smooth ordering process</p>
                </div>
                <div className="col-md-3">
                    <span className='icons'><AiOutlineFileProtect /></span>
                    <p>Worldwide container programs mixed from Italy and Asia</p>
                </div>
                <div className="col-md-3">
                    <span className='icons'><FaUserClock /></span>
                    <p>Round the clock client support service</p>
                </div>
                <div className="col-md-3">
                    <span className='icons'><FaBoxOpen /></span>
                    <p>In-stock items ready for delivery</p>
                </div>
            </div>
        </div>

        {/* Newsletter  */}
        <div className=' my-5 py-5 d-flex text-center align-items-center justify-content-center bg-secondary'>
            <div className='text-white'>
                <h3 >Subscribe to Our Newsletter </h3>
                <h3>and receive a 7% discount on the wholesale furniture order!</h3>
                <div className="row justify-content-center">
                    <div className="col-7 ">
                        <div class="my-3 d-flex ">
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                            <div >
                                <button className="btn btn-primary subscribe">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
