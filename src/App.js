import './App.css';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import FullStack from './components/main/FullStack';
import Educacion from './components/main/Educacion';
import Preguntas from './components/main/Preguntas';
import Aplica from './components/main/Aplica';
import Footer from './components/footer/Footer';
import Jobs from './components/main/Jobs';
import { Entrevista } from './components/main/Entrevista';
import Price from './components/main/Price';

function App() {
	return (
		<>
			<Navbar />
			<Main />
			<FullStack />
			<Jobs />
			<Educacion />
			<Entrevista />
			<Price />
			<Preguntas />
			<Aplica />
			<Footer />
		</>
	);
}

export default App;
