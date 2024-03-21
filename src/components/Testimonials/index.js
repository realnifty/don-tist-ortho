import googleRating from '../../images/don-tist-google-rating.webp';

const Testimonials = () => {
	return (
		<section className='testimonials text-white p-4 raleway'>
			<h1 className="mb-4">Patients love coming here...</h1>
			<div>
				<p className="fs-4">
					“Dr. Tist is conservative in his approach which I appreciate. He
					would not put braces on my kids until they were truly ready for them.
					He is professional and his entire staff is amazing. I like how my
					child thoroughly understands and can explain to me what is happening
					at each appointment. My favorite thing about Dr. Tist is that he
					sponsors the kids with their sports activities. Take a look at his
					wall. Impressive!”
				</p>
        <h3 className="fw-bold m-0">Keith K.</h3>
        <button className="consult-btn btn btn-lg text-white my-4">Learn More</button>
      </div>
      <img src={googleRating} alt="google rating" className="img-fluid rounded mx-auto" />
		</section>
	);
};

export default Testimonials;
