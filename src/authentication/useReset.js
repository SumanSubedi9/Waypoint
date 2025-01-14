import { forgotPassword as forgotPasswordApi } from "../services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useReset() {
  const { mutate: forgotPassword, isLoading } = useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: () => toast.success("Password reset email sent"),
    onError: (err) => toast.error(err.message),
  });

  return { forgotPassword, isLoading };
}
