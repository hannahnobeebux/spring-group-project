export default async function fetchAddOneUser(user) {
  try {
    const response = await fetch(`http://localhost:8080/shop/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: user.firstname,
        lastName: user.lastname,
        password: user.password,
        emailAddress: user.emailAddress,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
    } else {
      if (data.errors !== undefined) {
        //alert(data.errors[0].msg);
        return;
      }
      //alert(data.message);
    }
  } catch (error) {
    //alert(error.message);
  }
}
