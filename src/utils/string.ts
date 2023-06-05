import { Country } from "../types/types"

export const getString = (array:Country[], property:string) => {
  const joined = array.map(element => element[property as keyof Country]).join(', ')

  return joined
}