import React from 'react';
import header from "../../img/header.png";
import "./innovations.css";
export default function Innovations() {
  return (
    <div>
        <div className="container text-center py-5">
            <h2>Passion for Innovations</h2>
            <p>The extensive experience of our talented craftsmen helps them create products with more capabilities, functionality, and safety Safety We can ensure our clients that all our furniture products are safe for the health of all their home inhabitants.</p>
            <div className="row my-5 px-5 justify-content-center">
                <div className="col-sm-6 col-md-4">
                    <img className='w-100' src="https://c8.alamy.com/comp/KXA8K4/web-and-internet-related-words-designed-in-different-sizes-and-directions-KXA8K4.jpg" alt="product image" />
                    <h4  className='py-2'>Safety</h4 >
                    <p className=''>We can ensure our clients that all our furniture products are safe for the health of all their home inhabitants..</p>
                </div>
                <div className="col-sm-6 col-md-4">
                    <img className='w-100' src="https://c8.alamy.com/comp/2C8FGDP/software-development-and-it-operation-words-in-different-sizes-isolated-on-a-blue-background-2C8FGDP.jpg" alt="product image" />
                    <h4 className='py-2' >Functionality</h4 >
                    <p className=''>Be it a strengthened support structure or hidden support legs for futons, our craftsmen strive to push the boundaries in design functionality..</p>
                </div>
                <div className="col-sm-6 col-md-4">
                    <img className='w-100' src="https://cdn.pixabay.com/photo/2018/02/15/18/29/devops-3155972_1280.jpg" alt="product image" />
                    <h4  className='py-2'>Design</h4 >
                    <p className=''>Our market is overfilled with unique furniture designs. Our goal is to stand out from the crowd and continue to impress our clients..</p>
                </div>
            </div>
        </div>
    </div>
  )
}
