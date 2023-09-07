import { eventInfo } from '@/lib/data'

const dateFormatOptions = {
	timeZone: 'America/New_York',
	month: 'long',
	weekday: 'long',
	day: '2-digit',
	year: 'numeric'
}
//@ts-ignore
const formatter = new Intl.DateTimeFormat('en-US', dateFormatOptions)

export default function Home() {
	return (
		<div>
			<nav className='navbar navbar-expand-lg fixed-top'>
				<div className='container'>
					<a className='navbar-brand' href='index.html'>
						{eventInfo.host}
					</a>

					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div className='navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav ml-lg-auto'>
							<li className='nav-item'>
								<a
									href='#home'
									className='nav-link smoothScroll'
								>
									Event Info
								</a>
							</li>

							<li className='nav-item'>
								<a
									href='#about'
									className='nav-link smoothScroll'
								>
									Location
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#contact'
									className='nav-link smoothScroll'
								>
									Register
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#about'
									className='nav-link smoothScroll'
								>
									Volunteer
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* <!-- HERO --> */}
			<section
				className='hero d-flex flex-column justify-content-center align-items-center'
				id='home'
			>
				<div className='bg-overlay'></div>

				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-md-10 mx-auto col-12'>
							<div className='hero-text mt-5 text-center'>
								<h6 data-aos='fade-up' data-aos-delay='300'>
									presented by{' '}
									<a href='#'>{eventInfo.host}</a>
								</h6>

								<h1
									className='text-white'
									data-aos='fade-up'
									data-aos-delay='500'
								>
									{eventInfo.name}
								</h1>

								<h6 data-aos='fade-up' data-aos-delay='300'>
									{formatter.format(eventInfo.date)}
								</h6>
								<a
									href='#feature'
									className='btn custom-btn mt-3'
									data-aos='fade-up'
									data-aos-delay='600'
								>
									Learn more
								</a>

								<a
									href='#about'
									className='btn custom-btn bordered mt-3'
									data-aos='fade-up'
									data-aos-delay='700'
								>
									Register Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='feature' id='feature'>
				<div className='container'>
					<div className='row'>
						<div
							className='d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12'>
							<h2
								className='mb-3 text-white'
								data-aos='fade-up'
								data-aos-delay='100'
							>
								{eventInfo.about.title}
							</h2>

							{eventInfo.about.description.split('\n').map((item, i) => (
								<p
									data-aos='fade-up' data-aos-delay={50 + (i * 25)}
									key={i}
								>
									{item}
								</p>
							))}

							<a
								href='#'
								className='btn custom-btn bg-color mt-3'
								data-aos='fade-up'
								data-aos-delay='100'
								data-toggle='modal'
								data-target='#membershipForm'
							>
								Register for the race
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- CLASS --> */}
			<section className='class section' id='class'>
				<div className='container'>
					<div className='col-lg-12 col-12 text-center mb-5'>
						{/* <!-- <h6 data-aos="fade-up">Join the race</h6> --> */}
						<h2 data-aos='fade-up' data-aos-delay='200'>
							Registration & Fees
						</h2>
					</div>
					<div className='row'>
						{eventInfo.registrationInfo.products.map((product, i) => (
							<div
								key={i}
								className='col-lg-6 col-md-6 col-12'
								data-aos='fade-up'
								data-aos-delay='275'
							>
								<div className='class-thumb'>
									<img
										src={`/nextjs-github-pages/${product.image}`}
										className='img-fluid'
										alt='Class'
									/>
									<div className='class-info mx-auto'>
										<h3 className='mb-1'>
											{product.name}
										</h3>

										{product.tiers.map((tier, i) => (
											<div key={i}>
												<h6>{tier.name}</h6>
												<span className='d-block'>
													${tier.price}
												</span>
												{tier.gifts.map((gift, i) => (
													<small key={i} className='mt-3'>
														{gift}
													</small>
												))}
											</div>
										))}
										<a
											href='#'
											className='btn mb-3 custom-btn bg-color mt-3'
											data-aos='fade-up'
											data-toggle='modal'
											data-target='#membershipForm'
										>
											Register for the race
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* <!-- ABOUT --> */}
			<section className='about section' id='about'>
				<div className='container'>
					{/* <!-- center iframe --> */}
					<a
						href='https://www.google.com/maps/search/?api=1&query=6.82003017,-58.15059702'
						data-aos='fade-up'
						data-aos-delay='150'
					>
						<i className='fa fa-map-marker mr-1'></i> {eventInfo.routeInfo.location}
					</a>
					<div
						className='google-map mx-auto d-block'
						data-aos='fade-up'
						data-aos-delay='250'
					>
						<img
							src={`/nextjs-github-pages/${eventInfo.routeInfo.mapImage}`}
							className='img-fluid'
							alt='map' to
						/>
						{/*<iframe*/}
						{/*	src='https://routes.rungoapp.com/embedded/a2LTuChETH?units=km&hasTurns=false&hasPOIs=true&hideMetrics=false&isStatic=true'*/}
						{/*	width='1200px'*/}
						{/*	height='650px'*/}
						{/*	name='route'*/}
						{/*></iframe>*/}
					</div>
				</div>
			</section>


			<section className='feature' id='packetPickup'>
				<div className='container'>
					<div className='row'>
						<div className='mr-lg-auto mt-3 col-lg-6 col-md-6 col-12'>
							<h2
								className='mb-3 text-white'
								data-aos='fade-up'
								data-aos-delay='100'
							>
								Packet Pickup
							</h2>
							<p>
								We will have early packet pick-up on Thursday November and Friday from 11am to 6:00pm at
								the STRIDE592 offices located at XXXXX
							</p>
						</div>
						<div
							className='about-working-hours d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12'>
							<div>
								<h2
									className='mb-3 text-white'
									data-aos='fade-up'
									data-aos-delay='100'
								>
									Bib Pickup
								</h2>
								<p>
									Pre-registered runners and walkers can pick-up bibs at Date and Time TBA
									Strollers are welcome with the understanding they will start behind all other
									runners and push in a safe and prudent manner.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='about section' id='sponsors'>
				<div className='container'>
					<h3>Thank you to our Sponsors!</h3>
					<p>
						{eventInfo.sponsorInfo.message}
					</p>
					<div className='row'>
						{eventInfo.sponsorInfo.sponsors.map((sponsor, i) => (
							<div key={i} className='col-lg-3 col-md-6 col-12' data-aos='fade-up' data-aos-delay='700'>
								<div className='team-thumb'>
									<img src='/nextjs-github-pages/images/team/team-image.jpg' className='img-fluid' alt='Trainer' />

									<div className='team-info d-flex flex-column'>

										<h3>{sponsor.name}</h3>
										<small>{sponsor.name}.com</small>

										{/*<ul className='social-icon mt-3'>*/}
										{/*	<li><a href='#' className='fa fa-twitter'></a></li>*/}
										{/*	<li><a href='#' className='fa fa-instagram'></a></li>*/}
										{/*</ul>*/}
									</div>
								</div>
							</div>
						))}
					</div>
					<small className={"mt-5 d-block"}>{eventInfo.sponsorInfo.pitch}</small>
				</div>
			</section>


			{/* <!-- FOOTER --> */}
			<footer className='site-footer'>
				<div className='container'>
					<div className='row'>
						<div className='ml-auto col-lg-4 col-md-5'>
							<p className='copyright-text'>
								Copyright &copy; 2023 Bourda 5K
								{/* <!-- <br>Design: <a href="https://www.tooplate.com">Tooplate</a> --> */}
							</p>
						</div>

						<div className='d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12'>
							<p className='mr-4'>
								<i className='fa fa-envelope-o mr-1'></i>
								<a href='mailto:stride592GY@gmail.com'>
									stride592GY@gmail.com
								</a>
							</p>

							<p>
								<i className='fa fa-phone mr-1'></i>{' '}
								010-020-0840
							</p>
						</div>
					</div>
				</div>
			</footer>

			{/* <!-- Modal --> */}
			<div
				className='modal fade'
				id='membershipForm'
				tabIndex={-1}
				role='dialog'
				aria-labelledby='membershipFormLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h2
								className='modal-title'
								id='membershipFormLabel'
							>
								Registration Form
							</h2>

							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>

						<div className='modal-body'>
							<form
								className='membership-form webform'
								role='form'
							>
								<input
									type='text'
									className='form-control'
									name='cf-name'
									placeholder='John Doe'
								/>

								<input
									type='email'
									className='form-control'
									name='cf-email'
									placeholder='Johndoe@gmail.com'
								/>

								<input
									type='tel'
									className='form-control'
									name='cf-phone'
									placeholder='123-456-7890'
									pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
									required
								/>

								<textarea
									className='form-control'
									rows={3}
									name='cf-message'
									placeholder='Additional Message'
								></textarea>

								<button
									type='submit'
									className='form-control'
									id='submit-button'
									name='submit'
								>
									Submit Button
								</button>

								<div className='custom-control custom-checkbox'>
									<input
										type='checkbox'
										className='custom-control-input'
										id='signup-agree'
									/>
									<label
										className='custom-control-label text-small text-muted'
										htmlFor='signup-agree'
									>
										I agree to the
										<a href='#'>Terms &amp;Conditions</a>
									</label>
								</div>
							</form>
						</div>

						<div className='modal-footer'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
