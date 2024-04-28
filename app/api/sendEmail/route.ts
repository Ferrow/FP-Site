import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface FormData {
  username: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  console.log("request: ", request);
  try {
    const { username, email, message }: FormData = await request.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service provider here
      // For example, for Gmail:
      host: "smtp.seznam.cz", // Seznam SMTP server address
      port: 465, // SMTP port for Seznam (465 for SSL, 25 for no encryption)
      secure: true, // Use SSL/TLS encryption
      auth: {
        user: "financnapevnost@seznam.cz", // Your Seznam email address
        pass: "Zaliateslnkom18", // Your Seznam email password
      },
    });

    // Define the email options
    const mailOptions = {
      from: "financnapevnost@seznam.cz",
      to: ["gerhat@financnapevnost.sk", "lenka.gerhatova@financnapevnost.sk"],
      subject: `Nová správa od ${username}`,
      text: `
        Meno: ${username}
        Email: ${email}
        Správa: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
