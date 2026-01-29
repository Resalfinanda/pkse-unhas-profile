import { useEffect, useState } from "react"
import { Member } from "@/types/member"
import { getMembers } from "@/services/api"

export function useMembers() {
  const [data, setData] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getMembers()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
