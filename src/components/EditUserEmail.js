import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import fetchEditOneUser from '../utils/Users/fetchEditOneUser'


export default function EditUserEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
    },
  });

  const navigate = useNavigate()

  const userId = localStorage.getItem('user_id')

  async function login(email, password){
    console.log(email)
    console.log(password)
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          // New email address
          emailAddress: `${email}`,
          password: `${password}`,
        }),
      });
      if (response.status === 200) {
        const { accessToken, tokenType } = await response.json();
        console.log(accessToken);
        console.log(tokenType);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("token_type", tokenType);
        localStorage.setItem("logged_in", "true")
        return;
      }else {
        alert('Email is already taken!')
        console.log(await response.json())
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  async function onSubmit(data) {
    console.log(data);
    // Check if new email is unique
    const response = await fetch("http://localhost:8080/api/auth/email", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        emailAddress: data.email,
      })
  });
    if(response.status == 200) {
      const json = await response.json()
      console.log(json)
      if(json.emailTaken == true) {
        alert("Email already taken")
        return
      }
      console.log("Email not taken")

     }else{
      alert("Erorr checking email")
    }
    // Edit email
    const editedEmail = await fetchEditOneUser({email: data.email});
    if(!editedEmail) {
      alert("error changing email")
      return
    }
    await login(data.email, data.password)
    console.log("Success")

    // Login user again because tokens are linked to email address
    
    //navigate(`/loggedIn`);
  }

  

  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <h2>Edit your email here:</h2>
        {/* Updating password and email is going to be on a seperate page */}
        <Input type="email" {...register("email")} placeholder="New Email" />
        <p>{errors.email?.message}</p>
        <Input type="password" {...register("password")} placeholder="Password" />
        <p>{errors.password?.message}</p>
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
