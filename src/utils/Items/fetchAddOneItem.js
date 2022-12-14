export default async function fetchAddOneItem(item,userId) {
  console.log(item);
  // try {

  const response = await fetch(`http://localhost:8080/shop/item/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      name: item.name,
      image: item.image,
      description: item.description,
      category: item.category,
      quantity: item.quantity,
      price: item.price,
    }),
  });
  if (response.status === 200) {
    return;
  }
  // } catch (error) {
  //   alert(error.message);
  // }
}
