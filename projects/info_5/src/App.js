import Navbar from './components/Navbar';
import Main from './components/Main';
import logo from './images/logo.svg';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload many times.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
