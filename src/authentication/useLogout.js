import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../services/apiAuth.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSucces: () => {
      // Remove user data from local storage
      queryClient.removeQueries();
      // Navigate to login page
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}
