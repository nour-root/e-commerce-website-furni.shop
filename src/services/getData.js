async function getData_products() {
  const url = "/data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const product = await response.json();
    const products = Object.values(product.products);
    return products;
  } catch (error) {
    console.error(error.message);
  }
}
async function getData_users() {
  const url = "/data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const user = await response.json();
    const users = Object.values(user.users);
    return users;
  } catch (error) {
    console.error(error.message);
  }
}
export { getData_products, getData_users };
