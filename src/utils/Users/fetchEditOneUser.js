export default async function fetchEditOneUser(user) {
  for (const key in user) {
    if (user[key] === "") {
      delete user[key];
    }
  }
  try {
    const accessToken = localStorage.getItem('access_token');
    const userId = localStorage.getItem('user_id');
    const response = await fetch(
      `http://localhost:8080/shop/user/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
      
      },
        body: JSON.stringify(user),
      }
    );

    

    if (response.status === 200) {
      console.log("edited user")
      return true;
    } else {
      const data = await response.json()
      console.log(data)
      if (data.errors !== undefined) {
        //alert(data.errors[0].msg);
        
      }
      return false;
      //alert(data.message);
    }
  } catch (error) {
    console.log(error.message);
    return false;

    // alert(error.message);
  }
}
