import { useState } from "react";
import { Country } from "../types/types";

export const useFilter = (initialValue: Country[]) => {
  const [filter, setFilter] = useState(initialValue)

  const changeCountries = (search: string, region: string) => {
    const newCountries = initialValue.filter(country => {
      return (
        country.name.common.toLowerCase().includes(search.toLowerCase()) && (
          region === '' || !region || country.region === region
        )
      )
    })

    setFilter(newCountries)
  }

  return { filter, changeCountries }
}
