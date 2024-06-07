/*
import { OpenFoodFactsApi } from 'openfoodfac-ts';
// npm install openfoodfac-ts

const openFoodFactsApi = new OpenFoodFactsApi();

(async () => {
  const productId = '5449000000774';
  const fields = ['product_name_es', 'generic_name', 'ingredients_text_es'];

  try {
    const product = await openFoodFactsApi.findProductByBarcode(productId, { fields });
    if (product) {
      console.log(`Nombre del producto (español): ${product.product_name_es}`);
      console.log(`Nombre genérico: ${product.generic_name}`);
      console.log(`Ingredientes (español): ${product.ingredients_text_es}`);
    } else {
      console.error(`Producto no encontrado con ID: ${productId}`);
    }
  } catch (error) {
    console.error(error);
  }
})();

*/