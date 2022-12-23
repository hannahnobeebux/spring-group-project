import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import fetchEditPassword from '../utils/Users/fetchEditPassword'


export default function EditPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newPassword: "",
    },
  });

  const navigate = useNavigate()

  const userId = localStorage.getItem('user_id')

  async function onSubmit(data) {

    // Do code here to update password

    // If it was successful then redirect to /loggedIn page
    if(await fetchEditPassword(data)) navigate('/loggedIn')
  }

  

  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <h2>Edit your password here:</h2>
        <Input type="password" {...register("currentPassword")} placeholder="Current Password" />
        <p>{errors.currentPassword?.message}</p>
        <Input type="password" {...register("newPassword")} placeholder="New Password" />
        <p>{errors.newPassword?.message}</p>
        <Submit  type="submit" />
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
