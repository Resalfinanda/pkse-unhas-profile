import { useEffect, useState } from "react"
import { Alumni } from "@/types/alumni"
import { getAlumni } from "@/services/api"

export function useAlumni() {
  const [data, setData] = useState<Alumni[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAlumni()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
