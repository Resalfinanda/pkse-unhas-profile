import { supabase } from "@/lib/supabase";

// ===== TYPES =====
import { Activity } from "@/types/activity";
import { Executive } from "@/types/executive";
import { Division } from "@/types/division";
import { Member } from "@/types/member";
import { Alumni } from "@/types/alumni";
import { GalleryItem } from "@/types/gallery";
import { ContactPayload } from "@/types/contact";

export async function getActivities(): Promise<Activity[]> {
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .order("activity_date", { ascending: false })
    .limit(4);

  if (error) throw error;
  return data as Activity[];
}

export async function getExecutives(): Promise<Executive[]> {
  const { data, error } = await supabase
    .from("executives")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) throw error;
  return data as Executive[];
}

export async function getDivisions(): Promise<Division[]> {
  const { data, error } = await supabase
    .from("divisions")
    .select(
      `
      id,
      name,
      head_name,
      created_at,
      division_members (
        id,
        division_id,
        name,
        created_at
      )
    `,
    )
    .order("id", { ascending: true });

  if (error) throw error;
  return data as Division[];
}

export async function getMembers(): Promise<Member[]> {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .order("name", { ascending: true });

  if (error) throw error;
  return data as Member[];
}

export async function getAlumni(): Promise<Alumni[]> {
  const { data, error } = await supabase
    .from("alumni")
    .select("*")
    .order("batch", { ascending: false });

  if (error) throw error;
  return data as Alumni[];
}

export async function getGallery(): Promise<GalleryItem[]> {
  const { data, error } = await supabase
    .from("gallery_items")
    .select("*")
    .order("year", { ascending: false });

  if (error) throw error;
  return data as GalleryItem[];
}

export async function getGalleryCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from("gallery_items")
    .select("category");

  if (error) throw error;

  const categories = Array.from(new Set(data.map((item) => item.category)));

  return categories;
}

export async function sendContactMessage(payload: ContactPayload) {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert([payload]);

  if (error) {
    throw error;
  }

  return data;
}
