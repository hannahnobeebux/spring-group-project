export default async function fetchGetOneUserWishlist(userId) {
  try {
    const accessToken = localStorage.getItem('access_token')

    const response = await fetch(
      `http://localhost:8080/shop/user/wishlist/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${accessToken}`
        },
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      console.log(data)
      return data;
    } else {
      console.log(data)
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
