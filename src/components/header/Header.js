import React from 'react'
import "./header.css";
export default function Header() {
  return (
    <div >
        <header className="header  bg-img text-white row ps-5 " >
              <div className="d-flex align-items-center">
                <div className="">
                  <h1 className='fs-1'>Furi — Wholesale Furniture Production</h1>
                  <p className='fs-2'>Creating affordable and functional furniture for your home</p>
                  <button className="fs-5 py-2 px-4 btn-outline-light  btn ">About us</button>
                </div>
              </div>
        </header>
    </div>
  )
}
