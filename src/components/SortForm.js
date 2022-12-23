import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import {useState, useEffect} from "react"
import styled from "styled-components";

export default function SortForm (props){
    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm({
      defaultValues: {
      },
  });


    return (<div>
      <form>
        <Select
          {...register("sort", { required: "This is required" })}
          placeholder="Sort by" onChange={props.onChange}
        >
          <option value="default">Sort by: Default</option>
          <option value="az">A ➡️ Z</option>
          <option value="za">Z ➡️ A</option>
          <option value="expensive">Most Expensive 🤑</option>
          <option value="cheap">Cheapest 💸</option>
          <option value="quantity">Quantity 📦</option>
        </Select>
        <p>{errors.sort?.message}</p>
      </form>
      </div>)
  }
  const Select = styled.select`
  width: 15vw;
  height: 3vw;
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