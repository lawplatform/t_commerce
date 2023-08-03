import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/header'
import Home from './pages/home'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className='font-bodyfont'>
				<Header></Header>
				<Home></Home>

			</div>
		</>
	)
}

export default App
