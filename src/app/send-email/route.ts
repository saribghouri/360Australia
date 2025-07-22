
// console.log("--- Attempting to load /api/send-email/route.ts ---")

// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"

// export async function POST(request) {
//   console.log("API route /api/send-email POST function entered!")
//   try {
//     const { name, email, phone, service, projectDetails } = await request.json()

//     const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SENDER_EMAIL", "RECIPIENT_EMAIL"]

//     for (const envVar of requiredEnvVars) {
//       if (!process.env[envVar]) {
//         console.error(`Missing required environment variable: ${envVar}`)
//         return NextResponse.json({ message: `Server configuration error: Missing ${envVar}.` }, { status: 500 })
//       }
//     }

//     const smtpPort = Number.parseInt(process.env.SMTP_PORT, 10)
//     if (isNaN(smtpPort)) {
//       console.error(`Invalid SMTP_PORT: ${process.env.SMTP_PORT}`)
//       return NextResponse.json({ message: "Server configuration error: Invalid SMTP_PORT." }, { status: 500 })
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: smtpPort,
//       secure: process.env.SMTP_PORT === "465", 
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     })

//     const mailOptions = {
//       from: process.env.SENDER_EMAIL,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: `New Proposal Request from ${name}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service Interested In:</strong> ${service}</p>
//         <p><strong>Project Details:</strong></p>
//         <p>${projectDetails}</p>
//       `,
//     }

//     await transporter.sendMail(mailOptions)

//     return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
//   } catch (error) {
//     console.error("Error in /api/send-email:", error)
//     return NextResponse.json(
//       { message: "Failed to send email. Please check server logs for details." },
//       { status: 500 },
//     )
//   }
// }
