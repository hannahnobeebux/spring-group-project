import { useForm } from "react-hook-form";
import fetchDeleteOneItem from "../utils/Items/fetchDeleteOneItem";
import fetchEditOneWishlist from "../utils/Users/fetchEditOneWishlist";
export default function DeleteItem() {
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
    await fetchEditOneWishlist(data)
    await fetchDeleteOneItem(data);
    console.log(data)
  }
  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("itemId", { required: "This is required" })}
          placeholder="Item Id"
        />
        <p>{errors.itemId?.message}</p>
        <input type="submit" />
      </form>
    </>
  );
}
