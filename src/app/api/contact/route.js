import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { fullName, email, phoneNumber, message } = body

    if (!fullName || !email || !phoneNumber || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Process the form data
    console.log("Contact form submission:", {
      fullName,
      email,
      phoneNumber,
      service: body.service,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: You can add email sending functionality here using the sendEmail helper
    // Example:
    // import { sendEmail } from "../../../lib/utils"
    // await sendEmail({
    //   templateId: "your_template_id",
    //   from_name: fullName,
    //   from_email: email,
    //   service: body.service,
    //   phone: phoneNumber,
    //   message: message
    // })

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
