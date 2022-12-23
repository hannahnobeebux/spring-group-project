export default async function fetchGetOneUserByReview(reviewId) {
    try {
      console.log(reviewId);
      const response = await fetch(`http://localhost:8080/shop/user/review/${reviewId}`);
      const data = await response.json();
      console.log(data);
        if (response.status === 200) {
          return data;
        } else {
          if (data.errors !== undefined) {
            //lert(data.errors[0].msg);
            return;
          }
          //alert(data.message);
        }
      } catch (error) {
        //alert(error.message);
      }
    }
    