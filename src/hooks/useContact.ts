import { useState } from "react";
import { sendContactMessage } from "@/services/api";
import { ContactPayload } from "@/types/contact";
import { set } from "date-fns";

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (payload: ContactPayload) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      await sendContactMessage(payload);
      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Gagal mengirim pesan");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    submit,
    loading,
    success,
    error,
  };
}
