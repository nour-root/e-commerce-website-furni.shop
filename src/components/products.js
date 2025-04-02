let show_products = (product) => {
  return `<div id="product-card"
        class="relative p-8 cursor-pointer isolate before:absolute before:inset-0 before:w-full before:h-1/2 before:bg-extra-light before:-z-10 before:transition-all before:duration-300 hover:before:h-full">
        <h4 class="font-semibold">${product.name}</h4>
        <p class="text-light">$${product.price}</p>
        <img src="${product.image}" alt="product">
      </div>`;
};
export default show_products;
