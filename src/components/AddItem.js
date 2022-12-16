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
    await fetchAddOneItem(data);
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
          <option value="Entertainment">Entertainment</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Toys">Toys</option>
          <option value="Technology">Technology</option>
        </Select>
        <p>{errors.category?.message}</p>
        <Input
          {...register("quantity", { required: "This is required" })}
          placeholder="Quantity"
        />
        <p>{errors.quantity?.message}</p>
        <Input
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
`;

const Input = styled.input`
  width: 20vw;
  height: 2vw;
  border-radius: 10px;
`;

const Select = styled.select`
  width: 20vw;
  height: 2vw;
  border-radius: 10px;
  margin-top: 1vw;
`;

const Submit = styled.input`
  width: 10vw;
  height: 2.5vw;
  border-radius: 10px;
  margin-bottom: 1vw;
`;
