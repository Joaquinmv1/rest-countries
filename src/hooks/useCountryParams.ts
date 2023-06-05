import { useState, useEffect } from 'react'
import { getCountrie } from '../services/services';
import { useParams } from 'react-router-dom';
import { Country } from '../types/types';

export const useCountryParams = () => {
  const [currentCountrie, setCurrentCountrie] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countrie } = useParams<{ countrie: string }>();

  const getCountrieByUrl = async () => {
    try {
      if (countrie) {
        const res = await getCountrie(countrie)
        setCurrentCountrie(res);
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      setError(`Ocurrio un error al intentar acceder a este pais`)
    }
  }

  useEffect(() => {
    getCountrieByUrl();
  }, [])

  return { currentCountrie, isLoading, error }
}
