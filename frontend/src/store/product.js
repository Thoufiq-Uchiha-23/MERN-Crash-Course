import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
//   createProduct: async (newProduct) => {
//     if (!newProduct.name || !newProduct.image || !newProduct.price) {
//       return { success: false, message: "Please fill in all fields." };
//     }
//     const res = await fetch("/api/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newProduct),
//     });
//     const data = await res.json();
//     set((state) => ({ products: [...state.products, data.data] }));
//     return { success: true, message: "Product created successfully" };
//   },
  //   createProduct: async (newProduct) => {
  //     if (!newProduct.name || !newProduct.image || !newProduct.price) {
  //       console.error("Validation failed:", newProduct);
  //       return { success: false, message: "Please fill in all fields." };
  //     }

  //     try {
  //       const res = await fetch("/api/products", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(newProduct),
  //       });

  //       if (!res.ok) {
  //         const errorText = await res.text(); // Read as text if JSON fails
  //         console.error("API error response:", errorText);
  //         return { success: false, message: "Failed to create product" };
  //       }

  //       const data = await res.json(); // Parse JSON only if response is valid
  //       console.log("Server response:", data);

  //       set((state) => ({ products: [...state.products, data.data] }));
  //       return { success: true, message: "Product created successfully" };
  //     } catch (error) {
  //       console.error("Unexpected error:", error);
  //       return { success: false, message: "An unexpected error occurred." };
  //     }
  //   },
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }
  
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", errorText);
        return { success: false, message: "Failed to create product" };
      }
  
      const data = await res.headers.get("Content-Type")?.includes("application/json")
        ? await res.json()
        : {};
      set((state) => ({ products: [...state.products, data.data || newProduct] }));
  
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.error("Unexpected Error:", error);
      return { success: false, message: "An unexpected error occurred." };
    }
  }
  
}));
