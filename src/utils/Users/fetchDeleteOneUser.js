export default async function fetchDeleteOneUser(userId) {
    try {
      const response = await fetch(`http://localhost:8080/shop/user/${userId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.status === 200) {
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
  