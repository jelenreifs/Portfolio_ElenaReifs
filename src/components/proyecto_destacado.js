import React from 'react';
import ImgProyectoDestacado from '../images/img_proyecto.jpg';

const ProyectoDestacado = () => {

  return (
    	<section className="site-section-proyect-outstanding">
        <div className="container">
          <div className="row">
            <div className="section-heading text-center col-md-12">
              <h2>Mi último<strong>Proyecto</strong></h2>
          </div>
            <div className="col-lg-6 proyecto-destacado">
            <img src={ImgProyectoDestacado} alt="proyecto_destacado" className="img-fluid" />
                </div>
            <div className="col-lg-6 bg-primary text-outstanding"> 
              <div className="row mb-4">
                  <div className="row mb-4">
                      <div className="col-md-12">
                          <div className="section-heading">
                              <h4>Descripción</h4>
                          </div>
                      </div>
                  </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec sodales ipsum, at mollis dui. Aliquam sed libero ullamcorper, consectetur odio eu, aliquet ex. Integer vel massa arcu.
                    Donec tincidunt nisi sed metus placerat, ac accumsan nunc commodo. Praesent pellentesque magna id sagittis egestas. Sed egestas congue sagittis. 
                </p>
              </div>

            <div className="row">
              <div className="row mb-4">
                  <div className="col-md-12">
                      <div className="section-heading">
                          <h4>Tecnología</h4>
                      </div>
                  </div>
              </div>
              <ul className="technology">
                <li>
                  <img src="images/ico_css3.svg" alt="css3" />
                  <p>Front-end JavaScript: React, Redux, Bootstrap, HTML5, CSS3</p>
                </li>
                <li>
                  <img src="images/ico_css3.svg" alt="css3" />
                  <p>Front-end JavaScript: React, Redux, Bootstrap, HTML5, CSS3</p>
                </li>
              </ul>
            </div>
            </div>
            </div>
          </div>
      	</section>

  ) 
}

export default ProyectoDestacado;



