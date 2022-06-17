import logo from './resources/logo.svg';
import './css/App.css';
import Page from './components/001-component-hierarcy/Page';
import Page2 from './components/002-component-hierarcy/Page2';
import Parent from './components/003-Props/Parent';
import Page12 from './components/commerce-shop/Page12';
import Manager from './components/004 state/Manager';

function App() {
  return (
    <div className="App">
      {/* <h2>Hello, Wolrd! </h2>
      <Page/>
      <h2>NoNavSoImHere</h2> */}
      
      {/* <Parent/> */}
      {/* <Page12/> */}
      {/* <Page2/> */}
      <Manager/>
    </div>
  );
}

export default App;
