import { getStoredCart } from '../utils/fakeDB';

export const productsAndCartData = async () => {
  const productsData = await fetch(
    'https://exclusive-ecommerce-reactjs-server-shakibhossainmuhammad.vercel.app/product'
  );
  const products = await productsData.json();

  const saveCart = getStoredCart();
  let cartArray = [];
  for (const id in saveCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      foundProduct.quantity = saveCart[id];
      cartArray.push(foundProduct);
    }
  }
  return { cartArray, products };
};

// export { productsAndCartData };
