export default async function fetchGetAllItems() {
  try {
    const response = await fetch(`http://localhost:8080/shop/item`);
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
