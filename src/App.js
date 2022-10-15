import { useState, useEffect } from 'react';
import { ValuesContext } from './contexts/values';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Install from './pages/Install';

function App() {
	// when app is first loaded, check if theres a value in local storage
	// if there is, use that value, otherwise use the default value
	const [values, setValues] = useState(() => {
		const localData = localStorage.getItem('optaellerValues');
		return localData
			? JSON.parse(localData)
			: [
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
			  ];
	});

	// every time the values change, update localstorage with the new values
	useEffect(() => {
		localStorage.setItem('optaellerValues', JSON.stringify(values));
	}, [values]);

	return (
		<ValuesContext.Provider value={{ values, setValues }}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/install' element={<Install />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ValuesContext.Provider>
	);
}

export default App;
