// import './App.css';
import Header from './components/Header'
import NavBar from './components/Navbar';
import ItemContainer from './components/ItemContainer'
import Footer from './components/Footer';
import fetchGetAllTasks from './fetchtest';

function App() {
  // fetchGetAllTasks();
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <NavBar />
      <ItemContainer />
      <Footer />
      {/* <p className="text-gray-500 text-lg bold">LOL</p> */}
    </div>
  );
}

export default App;
