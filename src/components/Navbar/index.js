import { useState } from 'react';

import Braces from '../../images/brace.png';

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const toggleNavbarOpen = () => {
		setNavbarOpen(!navbarOpen);
	};

	const handleBlur = () => {
		setNavbarOpen(false);
	};

	return (
		<div>
			<nav className='navbar d-flex flex-row align-items-center justify-content-between p-3 text-black'>
				<div className='d-flex flex-row align-items-center'>
					<img src={Braces} alt='logo' className='brace-logo me-2' />
					<div className='d-flex flex-column'>
						<h1 className='m-0 notable name'>Don Tist</h1>
						<p className='m-0 text-center fs-5 raleway occupation'>
							Orthodontics
						</p>
					</div>
				</div>
				<i className='bi bi-telephone-fill fs-1 name'></i>
				<button
					className={`navbar-toggler ${navbarOpen ? `` : `collapsed`}`}
					onClick={toggleNavbarOpen}
					onBlur={handleBlur}
				>
					<span className='navbar-toggler-icon name'></span>
				</button>
				<div
					className={`bg-danger navbar-collapse ${navbarOpen ? `open` : `collapse`}`}
				>
					<ul className='navbar-nav'>
						<li className='nav-item'>hello</li>
						<li className='nav-item'>hello</li>
						<li className='nav-item'>hello</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
