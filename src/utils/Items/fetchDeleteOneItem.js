export default async function fetchDeleteOneItem(itemId) {
  try {
    const response = await fetch(`http://localhost:8080/shop/item/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (response.status === 200) {
      return;
    }
  } catch (error) {
    alert(error.message);
  }
}
