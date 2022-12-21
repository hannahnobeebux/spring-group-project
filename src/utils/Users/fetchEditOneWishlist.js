export default async function fetchEditOneWishlist(userId, userItemId) {
  try {
    //let debug = await fetch(`http://localhost:8080/shop/user/wishlist/${userId}`,{ method: "GET"});
   // console.log(debug.json());
   console.log(userId,userItemId);
    const accessToken = localStorage.getItem('access_token')
    const response = await fetch(
      `http://localhost:8080/shop/user/wishlist/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          itemId: userItemId,
        }),
      }
    );
    console.log(response.status)
    //debug = await fetch(`http://localhost:8080/shop/user/wishlist/${userId}`,{ method: "GET"});
    //console.log(debug.json());
    // const data = await response.json();

    // if (response.status === 200) {
    //   return data;
    // } else {
    //   if (data.errors !== undefined) {
    //     alert(data.errors[0].msg);
    //     return;
    //   }
    //   alert(data.message);
    // }
  } catch (error) {
    console.log(userItemId);
    //alert(error.message);
  }
}
