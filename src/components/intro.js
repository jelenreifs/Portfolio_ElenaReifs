import React from 'react';
import ImgIntro from '../images/background_intro_01.svg';

const Intro = () => {
	return (
		<section className="site-intro"
			style={{ backgroundImage: `url(${ImgIntro})` }}
			id="section-home"
			data-stellar-background-ratio="0.">
		<div className="container">
			<div className="row intro-text align-items-center justify-content-center">
				<div className="col-md-10 text-center pt-5">
					<h1 className="site-heading site-animate">
							Elena Reifs <strong className="d-block">Diseño UX/UI</strong>
					</h1>
					<strong className="d-block text-white text-uppercase letter-spacing">Programación</strong>

				</div>
			</div>

			<div className="container">
				<div className="row mb-5 align-items-center">
					<div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
						<img src="images/image_1.jpg" alt="intro" className="img-fluid" />
					</div>
					<div className="col-lg-5 pl-lg-5">
						<div className="section-heading">
							<h2>About <strong>Me</strong></h2>
						</div>
						<p className="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a
							large
							language ocean.</p>
						<p className="mb-5  ">A small river named Duden flows by their place and supplies it with the
							necessary
							regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
							mouth.</p>

						<p>
							<a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
							<a href="#" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export default Intro

