import { create } from "zustand"

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

export default useItems
