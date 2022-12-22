export default async function fetchGetOneUserBasket(userId) {
    try {
      const accessToken = localStorage.getItem('access_token')
  
      const response = await fetch(
        `http://localhost:8080/shop/user/basket/${userId}`,
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
  
        return data;
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
  