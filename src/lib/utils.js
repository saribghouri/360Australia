import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import emailjs from "@emailjs/browser";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SERVICE_ID = "service_wawa4t5";
const PUBLIC_KEY = "x-RPY84HGLmUON3Kc";

const to_name = "hello 360-australia"
const to_email = "hello@360-australia.com.au"

export function sendEmail({
  templateId,
  ...data
}) {
  return emailjs.send(
    SERVICE_ID,
    templateId,
    { ...data, to_name, to_email },
    PUBLIC_KEY
  );
}
