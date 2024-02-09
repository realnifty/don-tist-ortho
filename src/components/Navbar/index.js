import Braces from '../../images/brace.png';

const Navbar = () => {
	return (
		<div>
			<nav className='navbar d-flex flex-row align-items-center justify-content-between p-3'>
					<div className='d-flex flex-row'>
						<img src={Braces} alt='logo' className='brace-logo me-2' />
						<div className='d-flex flex-column'>
							<h1 className='m-0 notable'>Don Tist</h1>
							<p className='m-0 text-center fs-5 raleway'>Orthodontics</p>
						</div>
					</div>
					<i className='bi bi-telephone-fill fs-1'></i>
					<button className='navbar-toggler'>
						<span className='navbar-toggler-icon'></span>
					</button>
			</nav>
		</div>
	);
};

export default Navbar;
