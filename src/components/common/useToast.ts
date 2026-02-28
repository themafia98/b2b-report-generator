import { useState, useCallback } from "react";

export function useToast() {
  const [toast, setToast] = useState<string | null>(null);
  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);
  const hideToast = useCallback(() => {
    setToast(null);
  }, []);
  return { toast, showToast, hideToast };
}

