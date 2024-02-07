import Braces from '../../images/brace.png'

const Navbar = () => {
	return (
    <div>
      <div>
        <img src={Braces} alt='logo' className='brace-logo'/>
        <div>
          <h1>Don Tist</h1>
          <p>Orthodontics</p>
        </div>
      </div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light d-none'>
				<a className='navbar-brand' href='#'>
					Navbar
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
