import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ItemContainer from "./components/ItemContainer";
import Footer from "./components/Footer";
import { Route, Routes, useParams } from "react-router-dom";
import ItemInfo from "./components/ItemInfo";
import AddItem from "./components/AddItem"



function App() {
  
  function Items () {
    const params = useParams();
    console.log(params);

    return <p>The item id is {params.id}</p>
}
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>

        <Route path='/' element = {<ItemContainer/>} />
        <Route path='/itemInfo/:id' element = {<ItemInfo />} />
        <Route path='/addItem' element = {<AddItem/>}/>
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
