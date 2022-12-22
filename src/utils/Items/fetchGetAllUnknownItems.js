export default async function fetchgetAllUnknownItems() {
    try {
        const url = `http://localhost:8080/shop/item/unassigned`
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        const data = await response.text();
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