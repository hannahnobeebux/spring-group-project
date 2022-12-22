export default async function fetchAddReview(itemId, userId, reviewData) {
    // console.log(item);
    // try {
  
    const response = await fetch(`http://localhost:8080/shop/item/review/${itemId}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(reviewData),
    });
    if (response.status === 200) {
      return;
    }
    // } catch (error) {
    //   alert(error.message);
    // }
  }
  