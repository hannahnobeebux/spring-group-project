import { useForm } from "react-hook-form";
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
        <input {...register("itemId")} placeholder="Item Id" />
        <p>{errors.itemId?.message}</p>
        <input {...register("name")} placeholder="Title" />
        <p>{errors.name?.message}</p>
        <input {...register("image")} placeholder="Image url" />
        <p>{errors.image?.message}</p>
        <input {...register("description")} placeholder="Description" />
        <p>{errors.description?.message}</p>
        <input {...register("category")} placeholder="Category" />
        <p>{errors.category?.message}</p>
        <input {...register("quantity")} placeholder="Quantity" />
        <p>{errors.quantity?.message}</p>
        <input {...register("price")} placeholder="Price" />
        <p>{errors.price?.message}</p>
        <input type="submit" />
      </form>
    </>
  );
}
