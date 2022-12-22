export default async function fetchGetReviews(itemId) {
    try {
      const response = await fetch(`http://localhost:8080/shop/item/${itemId}/reviews`);
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
  