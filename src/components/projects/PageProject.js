import React from 'react'
import header from "../../img/header.png";
import Footer from '../footer/Footer';

export default function PageProject() {
  return (
    <div>
        <header className='d-flex justify-content-center align-items-center bg-secondary py-5'>
            <h2 className='py-5 text-white fs-1'>Our Projects</h2>
        </header>

        <div className="container text-center pt-5 my-5">
           <div className="row justify-content-center">
                <div className="col-md-8">
                <h3 className='fs-2 pb-3'>Our Work</h3>
                    <p>At Furi, we provide wholesale clients with a wide range of furniture items for any room online and directly from our warehouse.</p>
                    <p>Our furniture is created by real craftsmen and famous designers with customers' needs in mind. All the items perfectly combine style, functionality, comfort, and the highest quality possible. Look through the latest design projects and see the difference!</p>
                </div>
            </div>
        </div>

        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={header} className="w-100" alt="" />
                </div>
                <div className="col-md-6   d-flex align-items-center">
                    <div className='ps-5'>
                        <span >BENCHES</span>
                        <h3 className='py-2'>Cherry Bench with Leather Seat</h3>
                        <p>This solid cherry wood bench comes with a leather seat in white, black, and brown colors. The bench features American style and modern design.</p>
                        <span>Read more</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className='ps-5'>
                        <span >DESKS</span>
                        <h3 className='py-2'>Modern Writing Desk</h3>
                        <p>The high-quality modern writing desk is designed to impress anybody who visits your home office. Everything you need is organized at your fingertips.</p>
                        <span>Read more</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={header} className="w-100" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={header} className="w-100" alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className='ps-5'>
                        <span >SOFAS</span>
                        <h3 className='py-2'>Modern Sofa</h3>
                       <p>We create the exceptional designs of contemporary sofas which complete the style of your living room and reflect your own lifestyle. Choose the one that suits you.</p>
                        <span>Read more</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
