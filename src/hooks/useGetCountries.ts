import { useState, useEffect } from 'react'
import { Country } from '../types/types'
import { getAllCountries } from '../services/services'

export const useGetCountries = () => {
  const [countries, setcountries] = useState<Array<Country>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const getCountries = async () => {
    try {
      const res = await getAllCountries()
      setcountries(res)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(`Hubo un problema al intentar obtener todos los paises`)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return { countries, isLoading, error }
}

