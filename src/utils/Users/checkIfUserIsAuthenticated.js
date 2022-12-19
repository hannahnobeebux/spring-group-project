export default async function checkIfUserIsAuthenticated() {
  try {
    // Check for access token in local storage
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      return false;
    }
    // This code is broken
    const response = await fetch(`http://localhost:8080/shop/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      return true;
    } else if (response.status === 401) {
      // It is unauthorized
      return false;
    } else {
      if (data.errors !== undefined) {
        alert(data.errors[0].msg);
        return;
      }
      alert(data.message);
    }
  } catch (error) {
    alert(error.message);
  }
}
