import React from 'react';
import "./catalogueDownload.css";
import {FaDownload} from "react-icons/fa"
import header from "../../img/header.png";
export default function CatalogueDownload() {
  return (
    <div className='text-center'>
        <div className=' mb-5 py-5 d-flex text-center align-items-center justify-content-center bg-secondary'>
            <div>
                <h3 className='text-white'>Download Furniture Catalog</h3>
                <button className="btn btn-outline-light btn-lg my-3"> <span><FaDownload /> </span> Download PDF</button>
            </div>
        </div>
        <div className='container my-5'>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <img src="https://thumbs.dreamstime.com/b/logo-de-pirate-informatique-vecteur-121036050.jpg" alt="image" className=' w-75 h-auto' />  
                   <div className="row justify-content-center text-center ">
                        <div className="col-8">
                            <p className='mt-5 fs-1 '>About Us</p>  
                            <p>Furi is a leading furniture manufacturer known worldwide for its impeccable quality, exceptional customer service, and the most affordable prices. This is a family-owned, professional furniture company conveniently nestled in the heart of London. For more than 35 years, Furi has been building its own brand whilst also becoming the best licensing partner to such top lifestyle brands like Ralph Lauren, Perennials, and Kelly Wearstler.</p>
                            <p>We take pride in our dedicated employees committed to design and build the best-in-class furniture for wholesale dealers at reasonable prices.</p>
                            <button className="btn btn-outline-secondary">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
