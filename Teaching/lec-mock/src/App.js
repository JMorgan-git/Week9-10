import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import ContentIndex from './Components/ContentIndex';

function App() {
  return (
    <div className="app--container">
      <Header/>
      <NavBar/>
      <ContentIndex/>
    </div>
  );
}

export default App;
