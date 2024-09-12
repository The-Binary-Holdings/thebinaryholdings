import { supabase } from '@/utils/supabase/client';

class GetInTouchDAO {

  async checkEmail(email: string) {
    let { data: getInTouch, error } = await supabase
    .from('get-in-touch')
    .select('email')
    .eq('email', email);
    if (error) {
      throw error;
    }
    return getInTouch;
  
  }

  async newGetInTouch(data: any) {
    const { data: getInTouch, error } = await supabase
      .from('get-in-touch')
      .insert(data);
    if (error) {
      throw error;
    }
    return getInTouch;
  }
}

export const getInTouchDAO = new GetInTouchDAO();
