import supabase from "./supabase.js";
import { supabaseUrl } from "./supabase.js";

export async function uploadUserTravelPicture(file, userId, id) {
  try {
    // 1. Validate inputs first
    if (!userId) throw new Error("User ID is required");
    if (!file || !file.name) throw new Error("Invalid file");

    // Step 1: Upload image to storage
    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}-${Date.now()}.${fileExt}`;
    const filePath = `${userId}/${fileName}`;

    // Upload to storage
    const { error: uploadError } = await supabase.storage
      .from("user-travel-pictures")
      .upload(filePath, file, { contentType: file.type });

    if (uploadError) throw new Error(uploadError.message);

    // Generate Public Url

    const publicUrl = `${supabaseUrl}/storage/v1/object/public/user-travel-pictures/${filePath}`;

    // Update Database

    const { error: dbError } = await supabase
      .from("cities")

      .update({ imageUrl: publicUrl })

      .eq("id", id); // Ensure this matches your table column name

    if (dbError) {
      console.error("Database update error:", dbError);
      throw dbError;
    }

    console.log(id);

    console.log(publicUrl);

    if (uploadError) throw uploadError;
    return publicUrl;
  } catch (error) {
    throw new Error(`Image upload failed: ${error.message}`);
  }
}

export async function deleteImage(imageUrl) {
  try {
    if (!imageUrl) return;

    // Extract bucket name and file path from URL
    const urlParts = imageUrl.split("/");
    const bucketName = "user-travel-pictures"; // Your bucket name
    const filePath = urlParts.slice(urlParts.indexOf(bucketName) + 1).join("/");

    const { error } = await supabase.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) {
      console.error("Storage deletion error:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
}
