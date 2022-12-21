import { redirect } from "react-router";

/**
 * This checks if the current user is authenticated. It returns null if it's not authenticated or the user object if it is authenticated
 * @returns {null|object}
 */
export default async function checkIfUserIsAuthenticated() {
  function removeUserFromLocalStorage(){
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('token_type')
  }
  try {
    // Check for access token in local storage
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      removeUserFromLocalStorage()
      return null;
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
      // The user is authenticated
      // Save in local storage
      localStorage.setItem('user_id', data.id)
      return data;
    } else if (response.status === 401) {
      // It is unauthorized
      //alert('You must login')
      removeUserFromLocalStorage()
      return null
    } else {
      if (data.errors !== undefined) {
        //alert('User is not authenticated')
        console.log(data.errors[0].msg);
        removeUserFromLocalStorage()
        return null;
      }
      //alert(data.message);
      removeUserFromLocalStorage()
      return null;

    }
  } catch (error) {
    //alert(error.message);
    removeUserFromLocalStorage()
    return null;

  }
}
