import { useForm } from "react-hook-form";
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
        <input
          {...register("name", { required: "This is required" })}
          placeholder="Title"
        />
        <p>{errors.name?.message}</p>
        <input
          {...register("image", { required: "This is required" })}
          placeholder="Image url"
        />
        <p>{errors.image?.message}</p>
        <input
          {...register("description", { required: "This is required" })}
          placeholder="Description"
        />
        <p>{errors.description?.message}</p>
        <input
          {...register("category", { required: "This is required" })}
          placeholder="Category"
        />
        <p>{errors.category?.message}</p>
        <input
          {...register("quantity", { required: "This is required" })}
          placeholder="Quantity"
        />
        <p>{errors.quantity?.message}</p>
        <input
          {...register("price", { required: "This is required" })}
          placeholder="Price"
        />
        <p>{errors.price?.message}</p>
        <input type="submit" />
      </form>
    </>
  );
}
