"use server";

import nodemailer from "nodemailer";
import {
  googleOAuthClientId,
  googleOAuthClientSecret,
  googleOAuthRefreshToken,
  smtpUser,
} from "./env";

export async function sendEmail(formData: any) {
  const { name, email, subject, message } = formData;
  if (!name || !email || !subject || !message) {
    throw new Error("All fields are required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: smtpUser,
      clientId: googleOAuthClientId,
      clientSecret: googleOAuthClientSecret,
      refreshToken: googleOAuthRefreshToken,
    },
  });

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: "devsanjaikumarv@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `
        <div>
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    throw new Error("Failed to send email");
  }
}
