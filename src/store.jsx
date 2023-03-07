import { create } from "zustand"
import { persist } from "zustand/middleware"

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
      dotaFilters: {
        rarity: [],
        title: "",
        isHot: false,
      },
      csgoFilters: {
        rarity: [],
        title: "",
        isHot: false,
      },
      filterHandler: (ev) => {
        const target = ev.target
        const game = target.dataset?.game
        if (target.checked) {
          if (game === "CSGO") {
            set({
              csgoFilters: {
                ...get().csgoFilters,
                rarity: [...get().csgoFilters.rarity, target.name],
              },
            })
          } else {
            set({
              dotaFilters: {
                ...get().dotaFilters,
                rarity: [...get().dotaFilters.rarity, target.name],
              },
            })
          }
        } else {
          if (game === "CSGO") {
            set({
              csgoFilters: {
                ...get().csgoFilters,
                rarity: [
                  ...get().csgoFilters.rarity.filter((e) => e !== target.name),
                ],
              },
            })
          } else {
            set({
              dotaFilters: {
                ...get().dotaFilters,
                rarity: [
                  ...get().dotaFilters.rarity.filter((e) => e !== target.name),
                ],
              },
            })
          }
        }
      },
    }),
    {
      name: "filters",
    }
  )
)

export { useItems, useFilters }
