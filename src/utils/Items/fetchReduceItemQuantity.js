export default async function fetchReduceItemQuantity(itemId) {
    try {
      const accessToken = localStorage.getItem('access_token')
      const response = await fetch(
        `http://localhost:8080/shop/item/quantity/${itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${accessToken}`
          },
        }
      );
      console.log(response.status)
    } catch (error) {
      console.log(itemId);
    }
  }
  