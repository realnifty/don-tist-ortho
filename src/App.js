import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';

import Details from './components/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Details />
      <Navbar />
      <Home />
    </main>
	);
}

export default App;
