export default function Home() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg fixed-top">
				<div className="container">
					<a className="navbar-brand" href="index.html">
						Bourda 5K
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-lg-auto">
							<li className="nav-item">
								<a
									href="#home"
									className="nav-link smoothScroll"
								>
									Event Info
								</a>
							</li>

							<li className="nav-item">
								<a
									href="#about"
									className="nav-link smoothScroll"
								>
									Location
								</a>
							</li>
							<li className="nav-item">
								<a
									href="#contact"
									className="nav-link smoothScroll"
								>
									Groups/Teams
								</a>
							</li>
							<li className="nav-item">
								<a
									href="#contact"
									className="nav-link smoothScroll"
								>
									Register
								</a>
							</li>
							<li className="nav-item">
								<a
									href="#about"
									className="nav-link smoothScroll"
								>
									Volunteer
								</a>
							</li>
							<li className="nav-item">
								<a
									href="#about"
									className="nav-link smoothScroll"
								>
									Training Info{' '}
								</a>
							</li>
							<li className="nav-item">
								<a
									href="#about"
									className="nav-link smoothScroll"
								>
									Partnership
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* <!-- HERO --> */}
			<section
				className="hero d-flex flex-column justify-content-center align-items-center"
				id="home"
			>
				<div className="bg-overlay"></div>

				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto col-12">
							<div className="hero-text mt-5 text-center">
								<h6 data-aos="fade-up" data-aos-delay="300">
									presented by <a href="#">STRIDE592</a>
								</h6>

								<h1
									className="text-white"
									data-aos="fade-up"
									data-aos-delay="500"
								>
									Bourda 5K Classic Run/Walk
								</h1>

								<a
									href="#feature"
									className="btn custom-btn mt-3"
									data-aos="fade-up"
									data-aos-delay="600"
								>
									Learn more
								</a>

								<a
									href="#about"
									className="btn custom-btn bordered mt-3"
									data-aos="fade-up"
									data-aos-delay="700"
								>
									Register Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="feature" id="feature">
				<div className="container">
					<div className="row">
						<div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
							<h2
								className="mb-3 text-white"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								Celebrate Caribbean Culture
							</h2>

							<p data-aos="fade-up" data-aos-delay="150">
								The inaugural 5K Run, a celebration of Caribbean
								culture and sports presented by STRIDE592, Trail
								Masters Adventure Tours and Chung Global, will
								take part during the last week of Cricket
								Carnival.{' '}
							</p>
							<p data-aos="fade-up" data-aos-delay="250">
								The race will start at the National Park and
								loop out onto the street to passing the historic
								Bourda ground and loop back to the park for a
								spectacular finish and wellness jam party
							</p>

							<a
								href="#"
								className="btn custom-btn bg-color mt-3"
								data-aos="fade-up"
								data-aos-delay="300"
								data-toggle="modal"
								data-target="#membershipForm"
							>
								Register for the race
							</a>
						</div>

						<div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
							<div className="about-working-hours">
								<div>
									<strong
										className="d-block"
										data-aos="fade-up"
										data-aos-delay="100"
									>
										Date
									</strong>

									<p data-aos="fade-up" data-aos-delay="150">
										Saturday, September 23
									</p>

									<strong
										className="d-block"
										data-aos="fade-up"
										data-aos-delay="200"
									>
										Time
									</strong>

									<p data-aos="fade-up" data-aos-delay="250">
										6:00 - 11am
									</p>

									<strong
										className="d-block"
										data-aos="fade-up"
										data-aos-delay="300"
									>
										Start Line
									</strong>

									<p data-aos="fade-up" data-aos-delay="350">
										National Park
									</p>

									<strong
										className="d-block"
										data-aos="fade-up"
										data-aos-delay="400"
									>
										Finish Line
									</strong>

									<p data-aos="fade-up" data-aos-delay="450">
										National Park
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- ABOUT --> */}
			<section className="about section" id="about">
				<div className="container">
					{/* <!-- center iframe --> */}
					<a
						href="https://www.google.com/maps/search/?api=1&query=6.82003017,-58.15059702"
						data-aos="fade-up"
						data-aos-delay="150"
					>
						<i className="fa fa-map-marker mr-1"></i> Carifesta
						Avenue, Georgetown, Guyana
					</a>
					<div
						className="google-map mx-auto d-block"
						data-aos="fade-up"
						data-aos-delay="250"
					>
						<iframe
							src="https://routes.rungoapp.com/embedded/a2LTuChETH?units=km&hasTurns=false&hasPOIs=true&hideMetrics=false&isStatic=true"
							width="1200px"
							height="650px"
							name="route"
						></iframe>
					</div>
				</div>
			</section>

			{/* <!-- CLASS --> */}
			<section className="class section" id="class">
				<div className="container">
					<div className="col-lg-12 col-12 text-center mb-5">
						{/* <!-- <h6 data-aos="fade-up">Join the race</h6> --> */}
						<h2 data-aos="fade-up" data-aos-delay="200">
							Registration & Fees
						</h2>
					</div>
					<div className="row">
						<div
							className="col-lg-6 col-md-6 col-12"
							data-aos="fade-up"
							data-aos-delay="275"
						>
							<div className="class-thumb">
								<img
									src="images/class/class1.jpg"
									className="img-fluid"
									alt="Class"
								/>

								<div className="class-info mx-auto">
									<h3 className="mb-1">
										Adult 5k (Run/Walk)
									</h3>

									{/* <!-- <span className="class-price">$25</span> --> */}

									<h6>Early Bird</h6>
									<span className="d-block">
										$25 USD | $5,000 GYD
									</span>
									<small className="mt-3">
										Free T-Shirt for 1st 100 persons to
										register
									</small>

									<h6 className="mt-4">Late Bird</h6>
									<span className="d-block">
										$30 USD | $6,000 GYD
									</span>
									<small className="mt-3">
										Free T-Shirt for 1st 100 persons to
										register
									</small>
									<a
										href="#"
										className="btn mb-3 custom-btn bg-color mt-3"
										data-aos="fade-up"
										data-toggle="modal"
										data-target="#membershipForm"
									>
										Register for the race
									</a>
								</div>
							</div>
						</div>

						<div
							className="col-lg-6 col-md-6 col-12"
							data-aos="fade-up"
							data-aos-delay="275"
						>
							<div className="class-thumb">
								<img
									src="images/class/class2.jpg"
									className="img-fluid"
									alt="Class"
								/>

								<div className="class-info">
									<h3 className="mb-1">
										Adult 5k (Run/Walk)
									</h3>

									{/* <!-- <span className="class-price">$25</span> --> */}

									<h6>Early Bird</h6>
									<span className="d-block">
										$25 USD | $5,000 GYD
									</span>
									<small className="mt-3">
										Free T-Shirt for 1st 100 persons to
										register
									</small>

									<h6 className="mt-4">Late Bird</h6>
									<span className="d-block">
										$30 USD | $6,000 GYD
									</span>
									<small className="mt-3">
										Free T-Shirt for 1st 100 persons to
										register
									</small>
									<a
										href="#"
										className="btn mb-3 custom-btn bg-color mt-3"
										data-aos="fade-up"
										data-toggle="modal"
										data-target="#membershipForm"
									>
										Register for the race
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- FOOTER --> */}
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="ml-auto col-lg-4 col-md-5">
							<p className="copyright-text">
								Copyright &copy; 2023 Bourda 5K
								{/* <!-- <br>Design: <a href="https://www.tooplate.com">Tooplate</a> --> */}
							</p>
						</div>

						<div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
							<p className="mr-4">
								<i className="fa fa-envelope-o mr-1"></i>
								<a href="mailto:stride592GY@gmail.com">
									stride592GY@gmail.com
								</a>
							</p>

							<p>
								<i className="fa fa-phone mr-1"></i>{' '}
								010-020-0840
							</p>
						</div>
					</div>
				</div>
			</footer>

			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="membershipForm"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="membershipFormLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h2
								className="modal-title"
								id="membershipFormLabel"
							>
								Registration Form
							</h2>

							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div className="modal-body">
							<form
								className="membership-form webform"
								role="form"
							>
								<input
									type="text"
									className="form-control"
									name="cf-name"
									placeholder="John Doe"
								/>

								<input
									type="email"
									className="form-control"
									name="cf-email"
									placeholder="Johndoe@gmail.com"
								/>

								<input
									type="tel"
									className="form-control"
									name="cf-phone"
									placeholder="123-456-7890"
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									required
								/>

								<textarea
									className="form-control"
									rows={3}
									name="cf-message"
									placeholder="Additional Message"
								></textarea>

								<button
									type="submit"
									className="form-control"
									id="submit-button"
									name="submit"
								>
									Submit Button
								</button>

								<div className="custom-control custom-checkbox">
									<input
										type="checkbox"
										className="custom-control-input"
										id="signup-agree"
									/>
									<label
										className="custom-control-label text-small text-muted"
										htmlFor="signup-agree"
									>
										I agree to the
										<a href="#">Terms &amp;Conditions</a>
									</label>
								</div>
							</form>
						</div>

						<div className="modal-footer"></div>
					</div>
				</div>
			</div>
		</div>
	)
}
