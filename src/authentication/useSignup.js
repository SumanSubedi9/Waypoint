import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../services/apiAuth.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("Account successfully created!");
      toast.success(
        "Please verify your new account from the user's email address"
      );
      navigate("/login");
    },
  });

  return { signup, isLoading };
}
