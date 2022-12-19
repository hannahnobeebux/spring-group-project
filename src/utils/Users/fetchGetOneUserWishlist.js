export default async function fetchGetOneUserWishlist(userId) {
  try {
    const response = await fetch(
      `http://localhost:8080/shop/user/wishlist/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      return data;
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
