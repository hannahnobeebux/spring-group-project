export default async function fetchEditOneItem(item) {
  for (const key in item) {
    if (item[key] === "") {
      delete item[key];
    }
  }

  try {
    const response = await fetch(
      `http://localhost:8080/shop/item/${item.itemId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(item),
      }
    );
    if (response.status === 200) {
      return;
    }
  } catch (error) {
    alert(error.message);
  }
}
