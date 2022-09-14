import { useState } from 'react';
import { ValuesContext } from './contexts/values';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	const [values, setValues] = useState([
		{ id: '1000s', value: '', multiplier: 1000 },
		{ id: '500s', value: '', multiplier: 500 },
		{ id: '200s', value: '', multiplier: 200 },
		{ id: '100s', value: '', multiplier: 100 },
		{ id: '50s', value: '', multiplier: 50 },
		{ id: '20m', value: '', multiplier: 20 },
		{ id: '10m', value: '', multiplier: 10 },
		{ id: '5m', value: '', multiplier: 5 },
		{ id: '2m', value: '', multiplier: 2 },
		{ id: '1m', value: '', multiplier: 1 },
		{ id: '05m', value: '', multiplier: 0.5 },
		{ id: '400b', value: '', multiplier: 400 },
		{ id: '200b', value: '', multiplier: 200 },
		{ id: '100b', value: '', multiplier: 100 },
		{ id: '50b', value: '', multiplier: 50 },
		{ id: '25b', value: '', multiplier: 25 },
		{ id: '20b', value: '', multiplier: 20 },
	]);
	return (
		<ValuesContext.Provider value={{ values, setValues }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ValuesContext.Provider>
	);
}

export default App;
