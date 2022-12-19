export default async function fetchEditOneWishlist(userId, userItemId) {
  try {
    const response = await fetch(
      `http://localhost:8080/shop/user/wishlist/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          itemId: userItemId,
        }),
      }
    );
    // console.log(response);
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
    alert(error.message);
  }
}
