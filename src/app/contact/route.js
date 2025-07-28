import { NextResponse } from "next/server"

async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not found in environment variables")
    return false
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()

    // For reCAPTCHA v2, we only check success (no score)
    return data.success
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { fullName, email, phoneNumber, message, recaptchaToken } = body

    if (!fullName || !email || !phoneNumber || !message || !recaptchaToken) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken)

    if (!isRecaptchaValid) {
      return NextResponse.json({ success: false, message: "reCAPTCHA verification failed" }, { status: 400 })
    }

    // TODO: Process the form data (save to database, send email, etc.)
    console.log("Contact form submission:", {
      fullName,
      email,
      phoneNumber,
      service: body.service,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Send email notification
    // await sendEmailNotification(body)

    // TODO: Save to database
    // await saveToDatabase(body)

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
