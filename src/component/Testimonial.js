import React, { useEffect } from "react";
import Photo from "../assets/images/img_photo.png";
import Stars from "../assets/images/Star.png";




const Testimonial = () => {
  
  return (
    <div>
      <section className="py-5" id="testimoni">
        <div className="text-center py-3">
          <span className="p-text-24">Testimonial</span>
          <p className="p-text">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <div className="container-fluid row gap-0 m-2 testi-items" id="Testimonial">  
                    
            <div className="col d-none d-lg-block">
                <div className="card border border-0 mb-3 bg-testimonial">
                    <div className="row g-0">
                        <div className="col-lg text-center">
                            <img src={Photo} className="img-fluid rounded-start my-lg-5 my-2" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="rate">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg ">
                <div className="card border border-0 mb-3 bg-testimonial">
                    <div className="row g-0">
                        <div className="col-lg text-center">
                            <img src={Photo} className="img-fluid rounded-start my-lg-5 mt-3" alt="..."/>
                        </div>
                        <div className="col col-lg-8 text-lg-center">
                            <div className="card-body">
                                <div className="rate text-lg-start text-center my-lg-0 my-2">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg d-none d-lg-block">
                <div className="card border border-0 mb-3 bg-testimonial">
                    <div className="row g-0">
                        <div className="col-lg text-center">
                            <img src={Photo} className="img-fluid rounded-start my-lg-5 my-2" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="rate">
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                    <img src={Stars} className="img-fluid" alt=""/>
                                </div>
                                <p className="card-title p-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”</p>
                                <p className="card-text p-text-testi-footer">John Dee 32, Bromo</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </div>

        <div
          className="glide__arrows d-flex gap-3 justify-content-center"
          data-glide-el="controls"
        >
          <button className="testi-arrow testi-arrow-left" data-glide-dir="<">
            <span aria-hidden="true">&lt;</span>
          </button>
          <button className="testi-arrow testi-arrow-right" data-glide-dir=">">
            <span aria-hidden="true">&gt;</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
