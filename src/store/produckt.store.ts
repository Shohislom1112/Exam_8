import axios from "axios";
import { create } from "zustand";
import { produckttype } from "../components/produckt.type";

export const getProducts = create<produckttype>((set) => ({
  loading: false,
  products: [],
  error: null,

  getproducts: async () => {
    set(() => ({ loading: true }));
    try {
      const res = await axios.get('https://65bb755f52189914b5bc33c8.mockapi.io/Images');
      const data = res.data;
      set(() => ({
        products: data,
        loading: false
      }));
    } catch (error) {
      console.error(error);
    }
  },

//   post: async (product: any) => {
//     try {
//         console.log(product);
        // const res = await axios.post(`https://65bb755f52189914b5bc33c8.mockapi.io/Images, product`);
//     } catch (error) {
//         console.error(error);
//     }
//   },

//   deleteproduct: async (id:any) => {
//     try {
//       console.log(id);
//       const res = await axios.delete(`https://65bb755f52189914b5bc33c8.mockapi.io/Images${id}`);
//     } catch (error) {
//         console.error(error);
//       }
//   }
}));

export default getProducts;