import styles from'./App.css';
import Main from './components/Main';
import Header from './components/Header';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/> <br/>
      <Header2 />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
