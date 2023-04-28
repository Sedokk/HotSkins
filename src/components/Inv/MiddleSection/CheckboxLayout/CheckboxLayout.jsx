import React, { memo } from "react"
import { shallow } from "zustand/shallow"
import { useItems } from "../../../../store"
import Checkbox from "./Checkbox/Checkbox"

const CheckboxLayout = () => {
  const currentGame = useItems((state) => state.currentGame, shallow)
  const csgoItems = [
    {
      rarity: "extraordinary",
      color: "#FFCE50",
    },
    {
      rarity: "covert",
      color: "#ED422B",
    },
    {
      rarity: "classified",
      color: "#CF309C",
    },
    {
      rarity: "restricted",
      color: "#8533ED",
    },
    {
      rarity: "mil-spec",
      color: "#275CE4",
    },
    {
      rarity: "industrial",
      color: "#6AB2F4",
    },
    {
      rarity: "consumer",
      color: "#B4C2D7",
    },
  ]
  const dotaItems = [
    {
      rarity: "arcana",
      color: "#4ADD32",
    },
    {
      rarity: "immortal",
      color: "#FFCE50",
    },
    {
      rarity: "legendary",
      color: "#CF309C",
    },
    {
      rarity: "mythical",
      color: "#8533ED",
    },
    {
      rarity: "rare",
      color: "#275CE4",
    },
    {
      rarity: "uncommon",
      color: "#6AB2F4",
    },
    {
      rarity: "common",
      color: "#B4C2D7",
    },
  ]
  return (
    <>
      {currentGame === "CSGO"
        ? csgoItems.map((item) => (
            <Checkbox game='CSGO' params={item} key={item.rarity} />
          ))
        : dotaItems.map((item) => (
            <Checkbox game='DOTA' params={item} key={item.rarity} />
          ))}
    </>
  )
}

export default memo(CheckboxLayout)
