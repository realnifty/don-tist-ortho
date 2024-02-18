import DonTist from '../../images/dont-tist-w-patient.jpg';

const About = () => {
	return (
		<section>
			<div className='about p-4'>
				<h1 className='text-white text-center raleway'>
					Dr. Don Tist is your local Board Certified Houston Orthodontist. At
					Don Tist Orthodontics, you can expect a treatment plan that fits your
					needs and your schedule – whether that requires Invisalign, braces, or
					any other orthodontic treatment we offer.
				</h1>
			</div>
			<div className='p-4'>
				<img src={DonTist} alt='dont tist' className='doctist' />
			</div>
			<div className='raleway px-4 bol-col'>
				<h1 className='fw-bold m-0 mb-4 name'>Dr. Don Tist</h1>
				<p className='fs-5 mb-4'>
					Dr. Tist is board-certified by the American Board of Orthodontics,
					and as a resident in the local Houston, Texas community, he will be
					treating patients at Don Tist Orthodontics for years to come.
				</p>
				<button className="btn btn-lg meet text-white mb-4">Meet Dr. Tist</button>
			</div>
		</section>
	);
};

export default About;
