import { useEffect, useState } from "react"
import { Executive } from "@/types/executive"
import { getExecutives } from "@/services/api"

export function useExecutives() {
  const [data, setData] = useState<Executive[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getExecutives()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
