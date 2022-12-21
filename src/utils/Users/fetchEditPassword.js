export default async function fetchEditPassword(passwords) {
  // for (const key in user) {
  //   if (user[key] === "") {
  //     delete user[key];
  //   }
  // }
  try {
    const accessToken = localStorage.getItem('access_token');
    const userId = localStorage.getItem('user_id');
    const response = await fetch(
      `http://localhost:8080/api/auth/password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
      
      },
        body: JSON.stringify(passwords),
      }
    );

    
    const data = await response.json()
    if (response.status === 200) {
      
      console.log(data)
      return true
    } else {
      console.log(data)
      //alert(data.statusMessage);
      return false
    }
  } catch (error) {
    console.log(error.message);
    return false

    // alert(error.message);
  }
}
