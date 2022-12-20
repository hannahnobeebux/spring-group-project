import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fetchAddOneItem from "../utils/Items/fetchAddOneItem";

export default function AddItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const navigate = useNavigate();

  async function onSubmit(data) {
    const userId = localStorage.getItem('user_id')
    await fetchAddOneItem(data,userId);
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add a new item here:</h2>
        <Input1
          {...register("name", { required: "This is required" })}
          placeholder="Title"
        />
        <p>{errors.name?.message}</p>
        <Input
          {...register("image", { required: "This is required" })}
          placeholder="Image url"
        />
        <p>{errors.image?.message}</p>
        <Input
          {...register("description", { required: "This is required" })}
          placeholder="Description"
        />
        <p>{errors.description?.message}</p>
        <label>Category</label>
        <br></br>
        <Select
          {...register("category", { required: "This is required" })}
          placeholder="Category"
        >
          <option value="Baby">Baby</option>
          <option value="Books">Books</option>
          <option value="Fashion">Fashion</option>
          <option value="Garden">Garden</option>
          <option value="Home">Home</option>
          <option value="Toys">Toys</option>
          <option value="Technology">Technology</option>
        </Select>
        <p>{errors.category?.message}</p>
        <Input type="number"
          {...register("quantity", { required: "This is required" })}
          placeholder="Quantity"
        />
        <p>{errors.quantity?.message}</p>
        <Input type="number"
          {...register("price", { required: "This is required" })}
          placeholder="Price"
        />
        <p>{errors.price?.message}</p>

        <Submit type="submit" />
      </form>
    </>
  );
}

// Styling

const Input1 = styled.input`
  width: 20vw;
  height: 2vw;
  border-radius: 10px;
  margin-top: 1vw;
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


const Select = styled.select`
  width: 20.5vw;
  height: 2.5vw;
  border-radius: 10px;
  margin-top: 1vw;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 3px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
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
