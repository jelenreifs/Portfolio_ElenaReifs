import React from 'react';
import IcoLinkedin from '../images/ico_linkedin.svg';
import IcoWeb from '../images/ico_wikis.svg';
import IcoTwitter from '../images/ico_twitter.svg';

const Contacto = () => {
    return (
        <section className="site-section section-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <div className="section-heading text-center">
                            <h2>Contacta<strong> Conmigo</strong></h2>
                        </div>
                    </div>

                    <div className="col-md-7 mb-5 mb-md-0">
                             
                        <div className="section-heading mb-4">
                            <h4>Envíame tos datos y te responderé</h4>
                        </div>
                   
                        <form action="" className="site-form">
                            <div className="form-group">
                                <input type="text" className="form-control px-3 py-4" placeholder="Tu nombre" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control px-3 py-4" placeholder="Tu email" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control px-3 py-4" placeholder="Tu teléfono" />
                            </div>
                            <div className="form-group mb-5">
                                <textarea className="form-control px-3 py-4" cols="30" rows="10"
                                    placeholder="Escribe un mensaje"></textarea>
                            </div>
                            <div className="form-group">
                            </div>
                        </form>                                <input type="submit" className="btn btn-outline-primary  px-4 py-3" value="Enviar mensaje" />

                    </div>
                    <div className="col-md-5 pl-md-3 site-social-links">
                        { /* <div className="section-heading mb-4 text-left">
                            <h4>A través de mis redes y web</h4>
                            </div> */}
                        <ul className="site-contact-links">
                            <li>
                               <img src={IcoLinkedin} alt="ico linkedin"/> 
                                <a href="https://www.linkedin.com/in/elena-reifs/" className="social-item">
                                    www.linkedin.com/in/elena-reifs/
                                </a>
                            </li>
                            <li>
                                <img src={IcoWeb} alt="ico web"/> 
                                <a href="#" className="social-item">
                                    www.elenareifs.com
                                </a>
                            </li>
                            <li>
                                <img src={IcoTwitter} alt="ico twitter"/>
                                <a href="#" className="social-item">
                                    @jelenreifs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto
