import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ItemContainer from "./components/ItemContainer";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ItemInfo from "./components/ItemInfo";
import AddItem from "./components/AddItem";
import DeleteItem from "./components/DeleteItem";
import EditItem from "./components/EditItem";
import ItemsByCategory from "./components/ItemsByCategory";
import WishList from "./components/WishList";
import Users from "./components/Users";
import LoggedInUser from "./components/LoggedInUser";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"
import EditUser from "./components/EditUser"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemContainer />} />
        <Route path="/itemInfo/:id" element={<ItemInfo />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/deleteItem" element={<DeleteItem />} />
        <Route path="/editItem/:id" element={<EditItem />} />
        <Route path="/:category" element={<ItemsByCategory />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/loggedIn" element={<LoggedInUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
