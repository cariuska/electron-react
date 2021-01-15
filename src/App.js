import React from 'react';
import './App.css'
import { setTitle } from './Utils';

class App extends React.Component {
	
	componentWillMount() {
		setTitle('Electron React');
	}

	render(){
		
		return (

			<div className="App">
				Dados
			</div>
		)
	}

}

export default App;

/*
function App() {
return (
	<div className="App">
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
		Edit <code>src/App.js</code> and save to reload.
		</p>
		<a
		className="App-link"
		href="https://reactjs.org"
		target="_blank"
		rel="noopener noreferrer"
		>
		Learn React
		</a>
	</header>
	</div>
);
}
*/
