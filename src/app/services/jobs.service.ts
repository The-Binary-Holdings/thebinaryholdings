import { supabase } from '@/utils/supabase/client';

class jobServices {

    checkIsApplied = async (email: string, jobId: number) => {
        let { data, error } = await supabase
            .from('applications')
            .select('email, job_id')
            .eq('email', email)
            .eq('job_id', jobId);
        if (error) {
            throw error;
        }
        return data;
    }

    newApplication = async (values: any) => {
        let { data, error } = await supabase
            .from('applications')
            .insert(values).select().single();
        if (error) {
            throw error;
        }
        return data;
    
    }

    checkOTP = async (email: string, job_id: number) => {
        let { data, error } = await supabase
            .from('otp-verification')
            .select('email, job_id')
            .eq('email', email)
            .eq('job_id', job_id).single();
        if (error) {
            throw error;
        }
        return data;        
    }

    sendOTP = async (email: string, job_id: number) => {
        const values = {
            email,
            otp: Math.floor(100000 + Math.random() * 900000),
            job_id,
        }
        let { data, error } = await supabase
            .from('otp-verification')
            .insert(values).select().single();
        if (error) {
            throw error;
        }
        return data;
    }
}

export const JobServices = new jobServices();
