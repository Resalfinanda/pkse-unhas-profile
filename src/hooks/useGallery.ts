import { useEffect, useState } from "react"
import { GalleryItem } from "@/types/gallery"
import { getGallery } from "@/services/api"

export function useGallery() {
  const [data, setData] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getGallery()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
