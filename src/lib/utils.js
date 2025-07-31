import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import emailjs from "@emailjs/browser";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SERVICE_ID = "service_wawa4t5";
const TEMPLATE_ID = "template_o7ugyvo";
const PUBLIC_KEY = "x-RPY84HGLmUON3Kc";

export function sendEmail({
  from_name,
  from_email,
  service,
  phone,
  to_name = "hello 360-australia",
  to_email = "hello@360-australia.com.au",
}) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { from_name, to_name, from_email, to_email, service, phone },
    PUBLIC_KEY
  );
}
