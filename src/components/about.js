import React from 'react';
import ImgAbout from '../images/about.jpg';


const About = () => {
    return (
        
        <section className="site-about">
            <div className="container">
            <div className="row mb-5-lg-5 mb-5 mb-lg-0"> 
                <div className="col-lg-5 p-0 img-about">
                    <img src={ImgAbout} alt="foto perfil" className="img-fluid" />
                </div>
                {/*   <div className="col-lg-7 pl-lg-5 bg-primary-dark text-white"> */}
                 <div className="col-lg-7 bg-primary-light text-about"> 
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Sobre <strong>Mí</strong></h2>
                            </div>
                        </div>
                         </div>
                        <p>
                            Soy Licenciada en Bellas Artes, en la especialidad de Medios audiovisuales.
                            Me considero una persona proactiva, con muchas inquietudes y aptitudes para el trabajo en
                            equipo.
                        </p>
                        <p>
                            Me licencié en Bellas Artes, porque la creatividad es mi motor, y el arte mi espíritu.
                            Tuve la oportunidad de poder compartir mis conocimientos con otras personas, y fue muy
                            enriquecedor.
                        </p>
                        <p>
                            Fue entonces, en la búsqueda de conocimientos, donde tomé contacto con el diseño y
                            desarrollo web. Continué investigando y formándome en un el sector de la informática y
                            comunicaciones, donde realizo mi actividad
                            actualmente.
                        </p>
                        <p>
                            Tengo amplia experiencia en Diseño y Gestión de proyectos, pero de forma paralela he ido
                            incorporándome a proyectos como desarrolladora front-end.
                        </p>
                        <p>
                            Últimamente estoy centrada en formarme y adquirir experiencia en el entorno de programación
                            front-end y back-end, porque entre mis aspiraciones se encuentra el poder alcanzar un perfil
                            de Full Stack Javascript y
                            web Developer.
                        </p>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default About
