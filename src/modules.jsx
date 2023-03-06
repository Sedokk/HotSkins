const getCSGOColor = (rarity) => {
  switch (rarity) {
    case 6:
      return "#FFCE50"
    case 5:
      return "#ED422B"
    case 4:
      return "#CF309C"
    case 3:
      return "#8533ED"
    case 2:
      return "#275CE4"
    case 1:
      return "#6AB2F4"
    case 0:
      return "#B4C2D7"
    default:
      return "white"
  }
}

const getDOTAColor = (rarity) => {
  switch (rarity) {
    case 6:
      return "#4ADD32"
    case 5:
      return "#FFCE50"
    case 4:
      return "#CF309C"
    case 3:
      return "#8533ED"
    case 2:
      return "#275CE4"
    case 1:
      return "#6AB2F4"
    case 0:
      return "#B4C2D7"
    default:
      return "white"
  }
}

export { getCSGOColor, getDOTAColor }
