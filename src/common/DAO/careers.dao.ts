import { supabase } from '@/utils/supabase/client';
import { groupBy } from 'lodash';

const table ='careers';

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

  async getById(id: string) {
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
}

export const careersDAO = new CareersDAO();
