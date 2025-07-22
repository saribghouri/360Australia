import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import emailjs from "@emailjs/browser";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SERVICE_ID = "service_u0z9w9b";
const TEMPLATE_ID = "template_7ytghak";
const PUBLIC_KEY = "eIlVaByPa5l8uu-Gj";

export function sendEmail({
  from_name,
  from_email,
  service,
  phone,
  to_name = "Sarib Ghouri",
  to_email = "sarib.ghouri92@gmail.com",
}) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { from_name, to_name, from_email, to_email, service, phone },
    PUBLIC_KEY
  );
}
