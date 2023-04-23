export default {
  async getAll({ limit, skip }) {
    try {
      const data = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      ).then((a) => a.json());
      return data;
    } catch (error) {
      throw error;
    }
  },
  async getOne({ id }) {
    try {
      const data = await fetch(`https://dummyjson.com/products/${id}`).then(
        (a) => a.json()
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  async getSearch({ limit, skip, text }) {
    try {
      const data = await fetch(
        `https://dummyjson.com/products/search?q=${text}&limit=${limit}&skip=${skip}`
      ).then((a) => a.json());
      return data;
    } catch (error) {
      throw error;
    }
  },
  async getProductsByCollection({ limit, skip, handle }) {
    try {
      const data = await fetch(
        `https://dummyjson.com/products/category/${handle}?limit=${limit}&skip=${skip}`
      ).then((a) => a.json());
      return data;
    } catch (error) {
      throw error;
    }
  },
};
