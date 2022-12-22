export default async function fetchResetUserBasket(userId) {
        try {
          const response = await fetch(`http://localhost:8080/shop/user/reset/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
          if (response.status === 200) {
            return;
          }
        } catch (error) {
          //alert(error.message);
        }
      }
      