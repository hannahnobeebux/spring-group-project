export default async function fetchEditOneUser(user) {
  for (const key in user) {
    if (user[key] === "") {
      delete user[key];
    }
  }
  try {
    const accessToken = localStorage.getItem('access_token');
    const userId = localStorage.getItem('user_id');
    console.log(user)
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
    console.log(await response.text())
    console.log(response.status)
    const data = await response.json();
    if (response.status === 200) {
    } else {
      if (data.errors !== undefined) {
        alert(data.errors[0].msg);
        return;
      }
      alert(data.message);
    }
  } catch (error) {
    console.log('hi');
    console.log(error.message);

    // alert(error.message);
  }
}
