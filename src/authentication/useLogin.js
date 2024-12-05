import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Store user in local storage
      queryClient.setQueryData(["user"], user.user);
      navigate("/app");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return { login, isPending };
}
