import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (id: string, quantity: number) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  totalItems: () => number;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (id: string, quantity: number) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
          toast.success("Quantity updated in cart.");
        } else {
          set({ items: [...currentItems, { id, quantity }] });
          toast.success("Item added to cart.");
        }
      },
      updateItemQuantity: (id: string, quantity: number) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
        toast.success("Item quantity updated.");
      },
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),

      // totalItems as a function to calculate the total quantity dynamically
      totalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: "cart-storage",
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => localStorage)
          : createJSONStorage(() => ({
              getItem: () => null,
              setItem: () => {},
              removeItem: () => {},
            })),
    }
  )
);

export default useCart;
