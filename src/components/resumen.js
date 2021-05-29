import React from 'react';
import ImgPerfil from '../images/foto_perfil.jpg';

const Resumen = () => {
    return (
    <section className="site-section section-resumen">
		<div className="container">
			<div className="row">

				<div className="sidebar-wrapper col-md-4">
					<div className="foto-cv">
							<img src={ImgPerfil} alt="photoCV" />
					</div>
			
					<section className="about">
						<h3 className="title-profile rectangle">Sobre mí</h3>
						<h4 className="title-formacion">
							Licenciada en Bellas Artes
							<span>Especialidad Medios Audiovisuales</span>
							<p className="formacion-data">UPV/EHU - 1989/94</p>
						</h4>
						<p className="mx-3 text-center">
							Diseñadora UX senior y Desarrolladora web experimentada con un historial demostrado de
							trabajo
							en tecnologías de la
							información.
							Tengo experiencia en trabajo con equipos, pero también me considero un persona autónoma,
							resolutiva e involucrada en los
							procesos de desarrollo de productos digitales de calidad.
							Mi fuerte es la creatividad, mi capacidad de trabajo y una gran inquietud por la
							innovación, que
							me han llevado a seguir
							formándome en áreas de programación.
						</p>
					</section>
		
					<section className="contact">
						<h3 className="title-profile rectangle">
							Contacto
						</h3>
						<ul className="contact-list">
							<li>
								<span className="icon">
									<i className="icon-envelop"></i>
								</span>
								<a href="mailto:jelenreifs@gmail.com">
									jelenreifs@gmail.com
								</a>
							</li>
									
							<li>
								<span className="icon">
									<i className="icon-phone"></i>
								</span>
								<a href="tel: +34 607 426 291">+34 607 426 291</a>
						
							</li>

							<li>
								<span className="icon">
									<i className="icon-linkedin"></i>
								</span>
								<a href="https://www.linkedin.com/in/elena-reifs/" target="_blank">linkedin.com/in/elena-reifs</a>
							</li>
						</ul>
						</section>
						
						<h3 className="title-profile rectangle">Skills</h3>
						<div className="skills">
							<div class="graph">
								<div class="circular-progress html5"></div>
							</div>
							<div class="graph">
								<div class="circular-progress css3"></div>
							</div>
							<div class="graph">
								<div class="circular-progress jscript"></div>
							</div>
						</div>
				</div>

				<div className="main-wrapper col-md-8">
					<h2><span>Elena</span>Reifs</h2>
			
					<div className="title-section filet">
						Experiencia
					</div>
					<div className="details">
						<div className="job">
							<div className="left-side">
								<div className="period">
									2002-Actualidad
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Serikat</h3>
								<p className="cargo">Webdesigner</p>

								<p>
									Diseño centrado en el usuario (Análisis , Arquitectura de la información,
									Usabilidad, Accesibilidad). Creación de
									prototipos. Maquetación HTML 5, CSS3 y JavaScript.
								</p>
							</div>
						</div>
						<div className="job">
							<div className="left-side">
								<div className="period">
									2001-2002
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Iberdrola</h3>
								<p className="cargo">Diseñadora Web y gráfica / Formadora</p>

								<p>
									Prototipado, Wireframes, y diseño de aplicaciones.
									Formación tecnológica a trabajadores de la empresa.
								</p>
							</div>
						</div>
						<div className="job">
							<div className="left-side">
								<div className="period">
									2001
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Isored S.L.</h3>
								<p className="cargo">Diseñadora y desarrolladora multimedia</p>
								<p>
									Diseñadora Web y gráfica / Formadora.
								</p>
							</div>
						</div>
						<div className="job">
							<div className="left-side">
								<div className="period">
									2000-2001
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Excelencia,Ideas publicitarias</h3>
								<p className="cargo">Diseñadora Web y gráfica / Fotógrafa / Maquetadora</p>
								<p>
									Diseño y maquetación de webs de ayuntamientos . Fotografía.
								</p>
							</div>
						</div>

						<div className="job">
							<div className="left-side">
								<div className="period">
									2000-2001
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Excelencia,Ideas publicitarias</h3>
								<p className="cargo">Diseñadora Web y gráfica / Fotógrafa / Maquetadora</p>
								<p>
									Diseño y maquetación de webs de ayuntamientos . Fotografía.
								</p>
							</div>
						</div>

						<div className="job">
							<div className="left-side">
								<div className="period">
									1996-2000
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">San Bartolomé, La Asunción eta Eskibel Ikastetxeak</h3>
								<p className="cargo">Profesora de ESO y Bachillerato</p>
								<p>
									Materias: Diseño, Educación plástica y visual, Diseño técnico, Autocad y Tecnología.
								</p>
							</div>
						</div>
					</div>
	
					<div className="title-section filet">
						Formación
					</div>
					<div className="details">
						<div className="job">
							<div className="left-side">
								<div className="period">
									2020-2021
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Bootcamp Desarrollo Web Full Stack Javascript</h3>
								<p className="cargo">Code4jobs Bootcamps</p>

								<p>
									HTML5, CSS3 y JavaScript  BBDD MongoDB, Node Js, Express Js  Git 
									Frameworks de SPA: React Js  Scrum (metodologías ágiles)  Proyecto final MERN.
								</p>
							</div>
						</div>
						<div className="job">
							<div className="left-side">
								<div className="period">
									2001-2002
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Posgrado de Desarrollo de Aplicaciones Web</h3>
								<p className="cargo">UOC Universitat Oberta de Catalunya - 1050h</p>

								<p>
									Diseño de interfaces interactivas  Maquetación HTML5, CSS3 y JavaScript 
									Desarrollo back-end (PHP)  Desarrollo
									front-end (JavaScrip)t  Programación JavaScript.
								</p>
							</div>
						</div>
						<div className="job">
							<div className="left-side">
								<div className="period">
									2014-2015
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Posgrado de Diseño de Experiencia de Usuario (Ux)</h3>
								<p className="cargo">UOC Universitat Oberta de Catalunya - 750h</p>
								<p>
									Diseño centrado en el usuario (DCU)  Diseño de interacción: Arquitectura de la
									información. Prototipado  Evaluación de
									la usabilidad  Accesibilidad: Codificación y buenas prácticas.

								</p>
							</div>
						</div>
						<div className="job">
							<div className="left-side">
								<div className="period">
									2000-2001
								</div>
							</div>
							<div className="details">
								<h3 className="empresa">Curso de Aptitud Pegagógica (Cap)</h3>
								<p className="cargo">UPV/EHU. Escuela de Magisterio - 1500h</p>
								<p>
									Habilitación para la enseñanza en ESO, Bachillerato y Formación Profesional.
								</p>
							</div>
						</div>
					</div>
		
					<div className="title-section filet">
						Cursos y Certificaciones
					</div>
					<div className="details">
						<div className="job">
							<div className="details">
								<p>
									Desarrollo con React + GraphQl y testing  Javascript y JQuery  HTML, CSS3 y
									JavaScript  Interacción
									Persona-Ordenador: Diseño y Productos de apoyo  Prototipado para productos
									digitales  Responsive Frameworks 
									Creatividad y pensamiento lateral  Sistemas de Accesibilidad Web  Analítica Web 
									Animación multimedia con Flash 
									Autocad  Diseño web aplicado al comercio electrónico  3D Studio Max  Programación
									en Flash con ActionScript 
									Análisis y elaboración del proyecto curricular de un centro trilingüe
								</p>
							</div>
						</div>

					</div>
			
				</div>
			</div>
		</div>
	</section> 
    )
}

export default Resumen
