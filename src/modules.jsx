const getCSGOColor = (rarity) => {
  switch (rarity) {
    case "extraordinary":
      return "#FFCE50"
    case "covert":
      return "#ED422B"
    case "classified":
      return "#CF309C"
    case "restricted":
      return "#8533ED"
    case "mil-spec":
      return "#275CE4"
    case "industrial":
      return "#6AB2F4"
    case "consumer":
      return "#B4C2D7"
    default:
      return "white"
  }
}

const getDOTAColor = (rarity) => {
  switch (rarity) {
    case "arcana":
      return "#4ADD32"
    case "immortal":
      return "#FFCE50"
    case "legendary":
      return "#CF309C"
    case "mythical":
      return "#8533ED"
    case "rare":
      return "#275CE4"
    case "uncommon":
      return "#6AB2F4"
    case "common":
      return "#B4C2D7"
    default:
      return "white"
  }
}

const arrayFilter = (item, filters, text, hot) => {
  return (
    (filters.length === 0 || filters.includes(item?.rarity)) &&
    item?.title.toLowerCase().includes(text) &&
    (hot ? item?.hot : true)
  )
}

const declination = (num = 0) => {
  if (num > 9 && num < 20) return `${num} предметов`
  if (num % 10 === 1) return `${num} предмет`
  if ([2, 3, 4].includes(num % 10)) return `${num} предмета`
  else return `${num} предметов`
}

export { getCSGOColor, getDOTAColor, arrayFilter, declination }
