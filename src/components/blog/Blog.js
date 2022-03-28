import React from 'react'
import header from "../../img/header.png";
import Footer from '../footer/Footer';

export default function Blog() {
  return (
    <div>
        <header className='d-flex justify-content-center align-items-center bg-secondary py-5'>
            <h2 className='py-5 text-white fs-1'>Blog</h2>
        </header>

        <div className="container my-5">
            <div className="row pt-5">
                <div className="col-md-7">
                    <img src={header} className="w-100" alt="" />
                </div>
                <div className="col-md-5  d-flex align-items-center">
                    <div className='ps-5=3'>
                        <span >September 28, 2018 | Furniture Care</span>
                        <h3 className='py-2'>Easy Care Tips to Keep Your Furniture Looking Newt</h3>
                        <p>Once you have purchased the ideal item of furniture and your home design has been completed, you think you can relax and enjoy it. Follow some useful advice to enjoy it for as long as you can.</p>
                        <span>Read more</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='container my-5'>
            <div className="row">
                <div className="col-md-4">
                    <img src={header} className="w-100" alt="" />
                    <span>Special Offer | September 22, 2018</span>
                    <h5 className='py-2'>Special Offer: Cozy Winter Bedroom Sale</h5>
                    <p>Each furniture piece in Bedroom category is on sale this month! Get up to 10% off on one item, 15% off on two items, and 20% off on three or more items. </p>
                    <span>Read more</span>
                </div>
                <div className="col-md-4">
                    <img src={header} className="w-100" alt="" />
                    <span>Advice | September 18, 2018</span>
                    <h5 className='py-2'>4 of the Best Furniture Quotes of All Time</h5>
                    <p>We are surrounded by furniture items throughout our whole life, at home, at work, or anywhere else. So furniture is of great importance for us. We have gathered the...</p>
                    <span>Read more</span>
                </div>
                <div className="col-md-4">
                    <img src={header} className="w-100" alt="" />
                    <span>Tips | September 11, 2018</span>
                    <h5 className='py-2'>Matching Your Furniture to Your Space</h5>
                    <p>If you decided to purchase some piece of furniture, you should take into account will it into your space. There are some questions you need to answer.</p>
                    <span>Read more</span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
