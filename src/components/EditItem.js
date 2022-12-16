import { useForm } from "react-hook-form";
import styled from "styled-components";
import fetchEditOneItem from "../utils/Items/fetchEditOneItem";

export default function EditItem() {
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
    await fetchEditOneItem(data);
  }
  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Edit your item here:</h2>
        <Input1 {...register("itemId")} placeholder="Item Id" />
        <p>{errors.itemId?.message}</p>
        <Input {...register("name")} placeholder="Title" />
        <p>{errors.name?.message}</p>
        <Input {...register("image")} placeholder="Image url" />
        <p>{errors.image?.message}</p>
        <Input {...register("description")} placeholder="Description" />
        <p>{errors.description?.message}</p>
        <Input {...register("category")} placeholder="Category" />
        <p>{errors.category?.message}</p>
        <Input {...register("quantity")} placeholder="Quantity" />
        <p>{errors.quantity?.message}</p>
        <Input {...register("price")} placeholder="Price" />
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
