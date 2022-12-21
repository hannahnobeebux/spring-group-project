import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
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

  // id will be set to the value of the :id param
  const { id } = useParams();

  // retrieves param information from url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const param1 = searchParams.get("param1");

  const navigate = useNavigate();

  // useEffect(() => {
  //  async function 
  // }, [])
  

  async function onSubmit(data) {
    await fetchEditOneItem(data);
    navigate(`/itemInfo/${id}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Edit your item here:</h2>
        <Input1 {...register("itemId")} readOnly value={id} />
        <p>{errors.itemId?.message}</p>
        <Input {...register("name")} placeholder="Title" />
        <p>{errors.name?.message}</p>
        <Input {...register("image")} placeholder="Image url" />
        <p>{errors.image?.message}</p>
        <Input {...register("description")} placeholder="Description" />
        <p>{errors.description?.message}</p>
        <label>Category</label>
        <br></br>
        <Select
          {...register("category", { required: "This is required" })}
          defaultValue={param1}
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
        <Input min="1" type="number" {...register("quantity")} placeholder="Quantity" />
        <p>{errors.quantity?.message}</p>
        <Input min="0.01" step="0.01" type="number" {...register("price")} placeholder="Price" />
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
