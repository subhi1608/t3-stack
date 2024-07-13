import nodemailer from "nodemailer";


// async..await is not allowed in global scope, must use a wrapper
export async function sendMail({
    to,
    name,
    subject,
    body,
    }:
    {  
    to: string;
    name: string;
    subject: string;
    body: string;
    }) {
    const { SMTP_HOST, SMTP_PASSWORD } = process.env;
    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
    auth: {
      user: SMTP_HOST,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const sendResult = await transport.sendMail({
      from: SMTP_HOST,
      to,
      subject,
      html: body,
    });
    return sendResult
  } catch (error) {
    console.log(error);
    throw error
  }
}

