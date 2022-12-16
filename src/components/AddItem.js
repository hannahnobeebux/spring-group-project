import { useForm } from "react-hook-form";
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
  async function onSubmit(data) {
    console.log(data);
    await fetchAddOneItem(data);
  }
  console.log(errors);

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
        <Input
          {...register("category", { required: "This is required" })}
          placeholder="Category"
        />
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

const Submit = styled.input`
  width: 10vw;
  height: 2.5vw;
  border-radius: 10px;
  margin-bottom: 1vw;
`;
