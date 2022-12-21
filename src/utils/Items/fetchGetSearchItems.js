export default async function fetchGetSearchItems(query) {
    try {
        const url = `http://localhost:8080/shop/item/search?q=${query}`
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
  