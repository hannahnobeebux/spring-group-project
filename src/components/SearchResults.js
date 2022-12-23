import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import {useState, useEffect} from "react"
import styled from "styled-components";
import fetchGetSearchItems from '../utils/Items/fetchGetSearchItems'
import SingleItem from "../components/SingleItem"


export default function SearchResults() {

    const [searchResults, setSearchResults] = useState([]);
    const [queryInput, setQueryInput] = useState("")
    const [sortInput, setSortInput] = useState("")
    const [sorted, setSorted] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
        },
    });

  const navigate = useNavigate()


  async function onSubmit(data) {
    console.log(data);
    const results = await fetchGetSearchItems(data.query);
    if(results?.length > 0) {
        setSearchResults(results)
    }
    console.log(results)
    // navigate(`/loggedIn`);
  }

  async function handleChange(e){
    const queryInput = e.target.value.trim();
    if(queryInput.length < 0) return;
    const results = await fetchGetSearchItems(queryInput);
    if (results?.length <= 0) return;
    sortItems(results)
    setSearchResults(results, sortInput)
    // setQueryInput()
  }

  async function handleSortChange(e) {
    const sort = e.target.value;
    sortItems(searchResults, sort)
    setSortInput(sort)
  }

  async function sortItems(items, sortOption) {
    // console.log(items)
    console.log(sortOption)
    
    const sortedItems = [...items].sort((a, b) => {
      switch (sortOption) {
        // name low to high
        case "az":
          return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;

          
          
          break;
        // Name high to low
        case "za":
          return a.name.toUpperCase() <  b.name.toUpperCase() ? 1 : -1;
          break;
        // Price high to low
        case "expensive":
          return b.price - a.price
          break;
        // Price low to high
        case "cheap":
          return a.price - b.price
          
          break;
        
        // Stock high to low
        case "quantity":
            return b.quantity - a.quantity
          break;
      
        // Nothing
        default:
          return;
          break;
      }
    })
    // console.log(sortedItems.length)
    // console.log(sortedItems)
    // return sortedItems;
    setSorted(sortedItems);
  }


  

  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <h2>Search {queryInput}</h2>
        <Input {...register("query")} placeholder="Search for an item.." onChange={handleChange}/>
        <Select
          {...register("sort", { required: "This is required" })}
          placeholder="Sort by" onChange={handleSortChange}
        >
          <option value="default">Sort by: Default</option>
          <option value="az">A ➡️ Z</option>
          <option value="za">Z ➡️ A</option>
          <option value="expensive">Most Expensive 🤑</option>
          <option value="cheap">Cheapest 💸</option>
          <option value="quantity">Quantity 📦</option>
        </Select>
        <p>{errors.sort?.message}</p>
        <p>{errors.query?.message}</p>
        <Submit type="submit" />
      </form>
      <section>
        <Container>
        {sorted.map((item) => {
           return ( <SingleItem item={item}/>)
        })}
        {/* Display search results here */}
        </Container>
        </section>
    </div>
  );
}

// Styling

const Input = styled.input`
  width: 20vw;
  height: 2vw;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 3px;
  transition: all 0.3s ease;

  margin: 50px;


  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }
`;


const Submit = styled.input`
padding: 10px 20px;
background: #e6e6e6;
margin: 1vw;
border-radius: 10px;
border: 1px solid #ccc;
color: black;
font-size: 20px;
position: relative;
overflow: hidden;
transition: all 0.3s ease;

&:hover {
  background: #ccc;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}
`;
const Select = styled.select`
  width: 10vw;
  height: 2vw;
  border-radius: 10px;
  margin-top: 1vw;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 3px;
  transition: all 0.3s ease;

  margin: 25px;

  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

`;

const Section = styled.section`
  background-color: white;
  border-radius: 20px;
  width: 20vw;
  height: 30vw;
  margin: 2vw 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;
