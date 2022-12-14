import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ItemContainer from "./components/ItemContainer";
import Footer from "./components/Footer";
// import fetchGetAllTasks from './fetchtest';

function App() {
  // fetchGetAllTasks();
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemContainer />
      <Footer />
    </div>
  );
}

export default App;
