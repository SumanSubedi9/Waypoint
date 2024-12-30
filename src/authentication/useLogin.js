import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isMobile = useMediaQuery({ query: "(max-width: 1000px" });

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Store user in local storage
      queryClient.setQueryData(["user"], user.user);
      if (!isMobile) {
        navigate("/app");
        toast.success("Logged in successfully!");
      } else {
        navigate("/oops");
        toast.error("Login failed!");
      }
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return { login, isPending };
}
