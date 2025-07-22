"use server"

export async function sendContactEmail(prevState, formData) {
  const name = formData.get("name")
  const fullPhoneNumber = formData.get("fullPhoneNumber")
  const email = formData.get("email")
  const service = formData.get("service")

  if (!name || !fullPhoneNumber || !email || !service) {
    return { success: false, message: "All fields are required." }
  }

  try {
    // Simulate sending email (replace with your actual email sending logic)
    console.log("--- Simulating Email Send ---")
    console.log("To: recipient@example.com (replace with actual recipient)")
    console.log("Subject: New Service Inquiry from", name)
    console.log("Body:")
    console.log(`  Name: ${name}`)
    console.log(`  Phone: ${fullPhoneNumber}`)
    console.log(`  Email: ${email}`)
    console.log(`  Service Requested: ${service}`)
    console.log("-----------------------------")

    // In a real application, you would integrate an email sending service here, e.g.:
    // await someEmailService.send({
    //   to: "your-email@example.com",
    //   subject: `New Service Inquiry from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>...`,
    // });

    return { success: true, message: "Your message has been sent successfully (simulated)!" }
  } catch (error) {
    console.error("Error simulating email send:", error)
    return { success: false, message: "Failed to send message. Please try again later." }
  }
}
