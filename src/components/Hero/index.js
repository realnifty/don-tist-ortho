const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-overlay d-flex flex-column justify-content-center text-center text-white px-4 raleway'>
				<h1 className="fw-bolder">Your Local Houston Orthodontist</h1>
        <p className="fs-3">Creating Lifelong Smiles for Kids and Adults</p>
        <button type="button" className="btn btn-lg consult-btn mt-5">
          <a href="#" className="text-decoration-none text-white">Schedule a Consultation</a>
        </button>
			</div>
		</div>
	);
};

export default Hero;