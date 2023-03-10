import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

const useItems = create((set, get) => ({
  csData: [],
  dotaData: [],
  currentGame: "CSGO",
  getCSGOData: async (URL) => {
    const data = await fetch(URL).then((resp) => resp.json())
    set({ csData: await data })
  },
  getDOTAData: async (URL) => {
    const data = await fetch(URL).then((resp) => resp.json())
    set({ dotaData: await data })
  },
  setCurrentGame: (game) => {
    set({ currentGame: game })
  },
}))

const useFilters = create(
  persist(
    (set, get) => ({
      dotaFilters: [],
      csgoFilters: [],
      textFilter: "",
      setTextFilter: (ev) => {
        set({ textFilter: ev.target.value.toLowerCase() })
      },
      csgoFilterHandler: (ev) => {
        const target = ev.target
        if (target.checked) {
          set({
            csgoFilters: [...get().csgoFilters, target.name],
          })
        } else {
          set({
            csgoFilters: [
              ...get().csgoFilters.filter((e) => e !== target.name),
            ],
          })
        }
      },
      dotaFilterHandler: (ev) => {
        const target = ev.target
        if (target.checked) {
          set({
            dotaFilters: [...get().dotaFilters, target.name],
          })
        } else {
          set({
            dotaFilters: [
              ...get().dotaFilters.filter((e) => e !== target.name),
            ],
          })
        }
      },
    }),
    {
      name: "filters",
    }
  )
)

const useCart = create(
  devtools((set, get) => ({
    cartIsOpened: false,
    cart: [],
    addToCart: (item) => {
      set({ cart: [...get().cart, { ...item, selected: false }] })
    },
    removeFromCart: (item) => {
      set({ cart: [...get().cart.filter((e) => e.id !== item.id)] })
    },
    clearCart: () => {
      set({ cart: [] })
    },
    setCartIsOpened: (bool) => {
      set({ cartIsOpened: bool })
    },
    setSelected: (bool, id) => {
      set({
        cart: [
          ...get().cart.map((e) => {
            if (e.id === id) return { ...e, selected: bool }
            else return e
          }),
        ],
      })
    },
  }))
)

export { useItems, useFilters, useCart }
