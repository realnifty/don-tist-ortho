import Hero from '../components/Hero';
import About from '../components/About';
import Treatments from '../components/Treatments';
import Testimonials from '../components/Testimonials';

const Home = () => {
	return (
		<main className=''>
			<Hero />
			<About />
			<Treatments />
			<Testimonials />
		</main>
	);
};

export default Home;
