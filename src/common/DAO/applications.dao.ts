import { supabase } from "@/utils/supabase/client";
import { groupBy } from "lodash";
import { v4 as uuidv4 } from "uuid";

const table = "applications";

export interface Application {
  id?: number;
  created_at?: string;
  email: string;
  job_id: number;
  attachment: string;
  name: string;
  mobile: string;
  linkedIn?: string;
  website?: string;
}
class ApplicationsDAO {
  async addApplication(app: Partial<Application>) {
    let { data: application, error } = await supabase
      .from(table)
      .insert([app])
      .select();
    if (error) {
      throw error;
    }
    return application;
  }
}

export const applicationDAO = new ApplicationsDAO();
