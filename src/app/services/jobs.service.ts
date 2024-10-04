import { careersDAO, Job } from "@/common/DAO/careers.dao";
import EmailBody from "@/components/Email/EmailBodyHandler";
import sendEmail from "@/components/Email/EmailHandler";
import { supabase } from "@/utils/supabase/client";

class jobServices {
  checkIsApplied = async (email: string, jobId: number) => {
    let { data, error } = await supabase
      .from("applications")
      .select("email, job_id")
      .eq("email", email)
      .eq("job_id", jobId);
    if (error) {
      throw error;
    }
    return data;
  };

  newApplication = async (values: any, job: Job) => {
    let { data, error } = await supabase
      .from("applications")
      .insert(values)
      .select()
      .single();
    if (error) {
      throw error;
    }
    if (data) {
      const confirmApplication = await JobServices.sendApplicationEmail(data, job);
      const confirmApplication2 = await JobServices.sendApplicationReceivedEmail(data, job);
      return data;
    }
  };

  checkOTP = async (email: string, job_id: number) => {
    let { data, error } = await supabase
      .from("otp-verification")
      .select("email, job_id, created_at")
      .eq("email", email)
      .eq("job_id", job_id);
    if (error) {
      return error;
    }
    return data;
  };

  verifyOTP = async (email: string, job_id: number, otp: number) => {
    let { data, error } = await supabase
      .from("otp-verification")
      .select("email, job_id")
      .eq("email", email)
      .eq("job_id", job_id)
      .eq("otp", btoa(otp.toString()));
    if (error) {
      throw error;
    }
    return data;
  };

  clearOTP = async (email: string, job_id: number) => {
    let { data, error } = await supabase
      .from("otp-verification")
      .delete()
      .eq("email", email)
      .eq("job_id", job_id);
    if (error) {
      throw error;
    }
    return data;
  };

  sendOTP = async (name: string, email: string, job_id: number) => {
    const values = {
      email,
      otp: btoa(String(Math.floor(100000 + Math.random() * 900000))),
      job_id,
    };
    let { data, error } = await supabase
      .from("otp-verification")
      .insert(values)
      .select()
      .single();
    if (error) {
      throw error;
    }
    if (data) {
      const confirmOTPSent = await JobServices.sendOTPEmail(
        name,
        email,
        values.otp
      );
      if(confirmOTPSent) {
        return data;
      }
    }
  };

  sendOTPEmail = async (name: string, email: string, otp: string) => {
    const body = EmailBody.sendOTP({
      name,
      otp: atob(otp),
    });
    if (email) {
      const newBody = await body.props.children;
      const confirm = await sendEmail(email, `OTP for email verification`, newBody);
      return confirm;
    }
  };

  sendApplicationEmail = async (data: any, job: Job) => {
    const body = EmailBody.sendApplicationEmail({
      ...data,
      job
    });
    if (data?.email) {
      const newBody = await body.props.children;
      await sendEmail(
        data?.email,
        `Application Submitted for ${job?.title}`,
        newBody
      );
    }
  };

  sendApplicationReceivedEmail = async (data: any, job: Job) => {
    const profile: any = await careersDAO.getProfile(data.attachment);
    const body = EmailBody.sendApplicationReceivedEmail({
      ...data,
      job,
      attachment: profile?.publicUrl,
    });
    if (job?.emails) {
      const newBody = await body.props.children;
      await sendEmail(
        job?.emails,
        `Application Received for ${job?.title}`,
        newBody
      );
    }
  };
}

export const JobServices = new jobServices();
