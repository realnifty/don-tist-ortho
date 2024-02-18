import braces from '../../images/braces.png';
import invisalign from '../../images/invisalign.png';
import retainers from '../../images/retainers.png';

const Treatments = () => {
	return (
		<section className='raleway text-center treatments p-4 bol-col'>
			<h1 className=''>Treatments</h1>
			<div className='mb-5'>
				<img src={braces} className='treatment-img' alt='' />
				<h1 className='mb-4'>Braces</h1>
				<p className='mb-4 fs-4'>
					Braces are not what they used to be, from ceramic and clear to
					reduced-friction, treatment has never been faster or more comfortable.
				</p>
				<button className="btn btn-lg meet text-white">Learn More</button>
			</div>
			<div>
				<img src={invisalign} className='treatment-img mb-5' alt='' />
				<h1 className='mb-4'>Invisalign</h1>
				<p className='mb-4 fs-4'>
					An alternative to braces where patients wear a sequence of clear,
					removable aligner trays that gently move your teeth into their optimum
					positions.
				</p>
				<button className="btn btn-lg meet text-white">Learn More</button>
			</div>
			<div>
				<img src={retainers} className='treatment-img mt-5' alt='' />
				<h1 className='mb-4'>Retainers</h1>
				<p className='mb-4 fs-4'>
					A retainer is a custom-made, removable or fixed appliance that helps
					teeth maintain their new position after braces.
				</p>
				<button className="btn btn-lg meet text-white">Learn More</button>
			</div>
		</section>
	);
};

export default Treatments;
