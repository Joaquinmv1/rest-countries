import { AiOutlineSearch } from "react-icons/ai";
import { FilterContainer, InputSearch, InputSearchContainer, SelectContainer } from "./style";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface PropsSearch {
  changeCountries: (search: string, region: string) => void;
}

export default function Search({ changeCountries }: PropsSearch) {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(() => {
      setSearch(e.target.value)
    }, 300)
  }

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value)
  }

  useEffect(() => {
    changeCountries(search, region)
  }, [search, region])

  return (
    <FilterContainer>
      <InputSearchContainer>
        <AiOutlineSearch />
        <InputSearch placeholder="Search for a country..." onChange={handleChangeSearch} />
      </InputSearchContainer>
      <div>
        <SelectContainer onChange={handleChangeSelect}>
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
        </SelectContainer>
      </div>
    </FilterContainer>
  )
}
