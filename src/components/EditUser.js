import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import fetchEditOneUser from '../utils/Users/fetchEditOneUser'


export default function EditUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
    },
  });

  const navigate = useNavigate()

  const userId = localStorage.getItem('user_id')

  async function onSubmit(data) {
    console.log(data);
    await fetchEditOneUser(data);
    navigate(`/loggedIn`);
  }

  

  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <h2>Edit your details here:</h2>
        {/* <Input1 {...register("userId")} readOnly value={userId} />
        <p>{errors.userId?.message}</p> */}
        <Input {...register("firstName")} placeholder="First name" />
        <p>{errors.firstName?.message}</p>
        <Input {...register("lastName")} placeholder="Last name" />
        <p>{errors.lastName?.message}</p>
        {/* Updating password and email is going to be on a seperate page */}
        {/* <Input {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p> */}
        {/* <Input {...register("password")} placeholder="Password" />
        <p>{errors.email?.message}</p> */}
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
