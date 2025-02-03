import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadUserTravelPicture } from "../services/apiUploadImage.js";

export function useUploadTravelPicture() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ file, userId, id }) =>
      uploadUserTravelPicture(file, userId, id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      console.log("Image successfully uploaded:", data);
    },
    onError: (error) => {
      console.error("Image upload failed:", error);
      alert(error.message);
    },
  });
}
