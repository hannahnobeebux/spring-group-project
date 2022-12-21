import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import {useState} from "react"
import styled from "styled-components";
import fetchGetSearchItems from '../utils/Items/fetchGetSearchItems'
import SingleItem from "../components/SingleItem"


export default function SearchResults() {

    const [searchResults, setSearchResults] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
        query: "",
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

  

  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <h2>Search</h2>
        <Input {...register("query")} placeholder="query" />
        <p>{errors.query?.message}</p>
        <Submit type="submit" />
      </form>
      <section>
        {searchResults.map(item => {
           return ( <p> </p>)
        })}
        {/* Display search results here */}
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
