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
      .eq("otp", otp);
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
      otp: Math.floor(100000 + Math.random() * 900000),
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
      return data;
    }
  };

  sendOTPEmail = async (name: string, email: string, otp: number) => {
    const body = EmailBody.sendOTP({
      name,
      otp,
    });
    if (email) {
      await sendEmail(email, `OTP for email verification`, body.props.children);
    }
  };

  sendApplicationEmail = async (data: any, job: Job) => {
    const body = EmailBody.sendApplicationEmail({
      ...data,
      job
    });
    if (data?.email) {
      await sendEmail(
        data?.email,
        `Application Submitted`,
        body.props.children
      );
    }
  };

  sendApplicationReceivedEmail = async (data: any, job: Job) => {
    const profile: any = await careersDAO.getProfile(data.attachment);
    const body = EmailBody.sendApplicationReceivedEmail({
      ...data,
      attachment: profile?.publicUrl,
    });
    if (job?.emails) {
      await sendEmail(
        job?.emails,
        `Application Received for ${job?.title}`,
        body.props.children
      );
    }
  };
}

export const JobServices = new jobServices();
