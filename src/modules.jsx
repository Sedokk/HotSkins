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
    case "milSpec":
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

const arrayFilter = (item, filters, text, hot, game) => {
  return (
    item.game === game &&
    (filters.length === 0 || filters.includes(item?.rarity)) &&
    item?.title.toLowerCase().includes(text.toLowerCase()) &&
    (hot ? item?.hot : true)
  )
}

const declination = (num = 0) => {
  if (num > 9 && num < 20) return `${num} предметов`
  if (num % 10 === 1) return `${num} предмет`
  if ([2, 3, 4].includes(num % 10)) return `${num} предмета`
  else return `${num} предметов`
}

const sortItems = (items, type) => {
  const dic = {
    extraordinary: [],
    covert: [],
    classified: [],
    restricted: [],
    milSpec: [],
    industrial: [],
    consumer: [],
    arcana: [],
    immortal: [],
    legendary: [],
    mythical: [],
    rare: [],
    uncommon: [],
    common: [],
  }
  let res
  switch (type) {
    case "low price":
      res = items.sort((a, b) => a.price - b.price)
      break
    case "high price":
      res = items.sort((a, b) => b.price - a.price)
      break
    case "high rarity":
      for (let item of items) {
        dic[item?.rarity].push(item)
      }
      res = [
        ...dic.arcana,
        ...dic.extraordinary,
        ...dic.immortal,
        ...dic.covert,
        ...dic.legendary,
        ...dic.classified,
        ...dic.mythical,
        ...dic.restricted,
        ...dic.rare,
        ...dic.milSpec,
        ...dic.uncommon,
        ...dic.industrial,
        ...dic.common,
        ...dic.consumer,
      ]
      break
    case "low rarity":
      for (let item of items) {
        dic[item?.rarity].push(item)
      }
      res = [
        ...dic.common,
        ...dic.consumer,
        ...dic.uncommon,
        ...dic.industrial,
        ...dic.rare,
        ...dic.milSpec,
        ...dic.mythical,
        ...dic.restricted,
        ...dic.legendary,
        ...dic.classified,
        ...dic.immortal,
        ...dic.covert,
        ...dic.arcana,
        ...dic.extraordinary,
      ]
      break
    default:
      res = items
      break
  }
  return res
}

export { getCSGOColor, getDOTAColor, arrayFilter, declination, sortItems }
