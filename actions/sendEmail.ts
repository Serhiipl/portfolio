"use client";

import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contactFormEmail";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

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
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact from <onboarding@resend.dev>",
      to: "s.sukhovetskyi@gmail.com",
      subject: "Wiadomosć z Portfolio",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
