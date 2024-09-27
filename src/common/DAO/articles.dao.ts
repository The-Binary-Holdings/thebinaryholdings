import { supabase } from '@/utils/supabase/client';

class ArticlesDAO {
  async getAllAtricles() {    
    let { data: articles, error } = await supabase
    .from('articles')
    .select('id,created_at,img,title,type')
    .filter('active', 'eq', true)
    .order('created_at', { ascending: false });
    if (error) {
      throw error;
    }
    return articles;
  }

  async getArticleById(id: string) {
    let { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single();
    if (error) {
      throw error;
    }
    return article;
  
  }
}

export const articlesDAO = new ArticlesDAO();
