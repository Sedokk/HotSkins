import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

const useItems = create(
  devtools((set, get) => ({
    data: "",
    currentGame: "CSGO",
    getData: async (URL, game) => {
      const res = await fetch(URL).then((json) => json.json())
      set({
        data: [
          ...get().data,
          ...res.map((e) => {
            e.game = game
            return e
          }),
        ],
      })
    },
    setCurrentGame: (game) => {
      set({ currentGame: game })
    },
  }))
)

const useFilters = create(
  persist(
    (set, get) => ({
      dotaFilters: [],
      csgoFilters: [],
      textFilter: "",
      onlyHotPrices: false,
      sortType: "low price",
      setTextFilter: (ev) => {
        set({ textFilter: ev.target.value })
      },
      deleteTextFilter: () => {
        set({ textFilter: "" })
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
      hotPricesHandler: (ev) => {
        set({ onlyHotPrices: ev.target.checked })
      },
      setSortType: (type) => {
        set({ sortType: type })
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
    deleteModalIsOpen: false,
    setDeleteModalIsOpen: (bool) => {
      set({ deleteModalIsOpen: bool })
    },
    addToCart: (item) => {
      if (get().cart.some((e) => e.id === item.id)) return
      set({ cart: [...get().cart, { ...item, selected: false }] })
    },
    removeFromCart: (item) => {
      set({ cart: [...get().cart.filter((e) => e.id !== item.id)] })
    },
    clearCart: () => {
      set({ cart: [] })
    },
    onClearCart: (arr) => {
      if (arr.length > 0) {
        set({ cart: get().cart.filter((e) => !e.selected) })
      } else {
        get().clearCart()
      }
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
    addAll: (allData, game) => {
      const { cart, removeFromCart, addToCart } = get()
      const data = allData.filter((e) => e.game === game)
      if (data.every((e) => cart.some((el) => el.id === e.id))) {
        data.forEach((e) => removeFromCart(e))
      } else {
        data.forEach((e) => addToCart(e))
      }
    },
  }))
)

const useAuth = create(
  devtools((set, get) => ({
    user: "",
    setUser: (user) => {
      set({ user: user })
    },
  }))
)

export { useItems, useFilters, useCart, useAuth }
