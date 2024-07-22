import { supabase } from '@/utils/supabase/client';
import { groupBy } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const table ='careers';

export interface Job {
  id: number;
  created_at: string;
  title: string;
  type: string;
  positions: string;
  location: string;
  salary: string;
  dept: string;
  desc: string;
  responsibilities: Array<string>;
  requirements: Array<string>;
}
class CareersDAO {
  async getAll() {  
    let groupedItems = {};  
    let { data: careers, error } = await supabase
    .from(table)
    .select('*')
    if (error) {
      throw error;
    }
    if(careers?.length) {
        groupedItems = groupBy(careers, 'dept');
    }
    return groupedItems;
  }

  async getById(id: string): Promise<Job> {
    let { data: career, error } = await supabase
    .from(table)
    .select('*')
    .eq('id', id)
    .single();
    if (error) {
      throw error;
    }
    return career;
  }

  async uploadProfile(file: File) {
    const bannerName = uuidv4();
    const { data, error } = await supabase.storage.from("Files").upload(`/careers/profiles/${bannerName}`, file);
    if (error) {
      console.error('Error while uploading file', error);
      return null;
    }
    return data;
  }

  

  async getProfile(id: string) {
    const { data } = supabase.storage.from("Files").getPublicUrl(id);
    return data;
  }
}


export const careersDAO = new CareersDAO();
