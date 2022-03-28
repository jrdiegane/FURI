import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import About from '../about/About';
import Blog from '../blog/Blog';
import Catalogue from '../catalogue/Catalogue';
import Home from '../Home/Home';
import PageProject from '../projects/PageProject';
export default function Navigation() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3 px-5">
                    <div className="container-fluid   text-dark">
    
                        <p><Link className="navbar-brand  mx-3 fs-2 " to="/">Furi</Link></p> 
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
    
                        <div className="collapse navbar-collapse display-navbar fs-5 d-md-flex flex-row-reverse" id="navbarText">     
                            <div >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                    <li  className="nav-item ">
                                        <p ><Link className="nav-link  px-3" to="/about">About us</Link></p>                    
                                    </li>
                                      
                                    <li  className="nav-item">
                                        <p ><Link className="nav-link  px-3" to="/catalogue">Catalogue</Link></p>                    
                                    </li> 

                                    <li  className="nav-item">
                                        <p ><Link className="nav-link  px-3" to="/project">Project</Link></p>    
                                    </li>                
                            
                                    <li  className="nav-item">
                                        <p ><Link className="nav-link  px-3" to="/blog">Blog</Link></p>                    
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                    <Route path="/project" element={<PageProject />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>

    </div>
  )
}
