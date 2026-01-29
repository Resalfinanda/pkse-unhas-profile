import { useEffect, useState } from "react"
import { Division } from "@/types/division"
import { getDivisions } from "@/services/api"

export function useDivisions() {
  const [data, setData] = useState<Division[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getDivisions()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
