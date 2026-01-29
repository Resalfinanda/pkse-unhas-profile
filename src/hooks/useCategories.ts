// hooks/useGalleryCategories.ts
import { useEffect, useState } from "react";
import { getGalleryCategories } from "@/services/api";

export function useGalleryCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGalleryCategories()
      .then((data) => setCategories(["Semua", ...data]))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
}
