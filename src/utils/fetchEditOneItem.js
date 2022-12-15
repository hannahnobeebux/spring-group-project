export default async function fetchEditOneItem(itemId) {
    try {
      const response = await fetch(`http://localhost:8080/shop/item${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            name: name,
            image: image,
            description: description,
            category: category,
            quantity: quantity,
            price: price
        })
      });
      const data = await response.json();
      if (response.status === 200) {
      } else {
        if (data.errors !== undefined) {
          alert(data.errors[0].msg);
          return;
        }
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  