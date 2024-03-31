"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { error } from "console";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("runing on server");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 150)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 1500)) {
    return {
      error: "Invalid message",
    };
  }
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "s.sukhovetskyi@gmail.com",
      subject: "Wiadomosć z Portfolio",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
