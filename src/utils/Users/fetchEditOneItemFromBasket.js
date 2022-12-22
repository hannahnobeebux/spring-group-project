export default async function fetchEditOneItemToBasket(userId, userItemId) {
    try {
     console.log(userId,userItemId);
      const accessToken = localStorage.getItem('access_token')
      const response = await fetch(
        `http://localhost:8080/shop/user/basket/${userId}`,
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
    } catch (error) {
      console.log(userItemId);
    }
  }
  