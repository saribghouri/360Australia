"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Flex, Select } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "antd/dist/reset.css";
import { useActionState } from "react";
import { sendEmail } from "../../lib/utils";

export default function ContactForm() {
  const [state = { success: false, message: "", pending: false }, formAction] =
    useActionState(
      async (prevState, formData) => {
        const name = formData.get("name");
        const fullPhoneNumber = formData.get("fullPhoneNumber");
        const email = formData.get("email");
        const service = formData.get("service");

        if (!name || !fullPhoneNumber || !email || !service) {
          return { success: false, message: "All fields are required." };
        }

        try {
          await sendEmail({
            from_name: name,
            from_email: email,
            service: service,
            phone: fullPhoneNumber,
          });
          return {
            success: true,
            message: "Email sent successfully!",
            pending: false,
          };
        } catch (err) {
          console.error(err);
          alert("Ahh, something went wrong. Please try again.");
        }
      },
      {
        success: false,
        message: "",
      }
    );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  const [isNameActive, setIsNameActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);

  // Show/hide message state
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.success) {
      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setIsNameActive(false);
      setIsEmailActive(false);
      setIsServiceActive(false);
    }
  }, [state.success]);

  // Show message when state.message changes, hide after 2 seconds
  useEffect(() => {
    if (state.message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.message]);

  const shouldShowLabel = (value, isActive) => value.length > 0 || isActive;

  return (
    <>
      <div className="flex items-center justify-center p-4 relative overflow-hidden myStateCard">
        {/* Contact Form Card */}
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-black/10 border border-white/60 rounded-2xl p-8 shadow-lg">
            {/* Form Title */}
            <h1 className="text-3xl text-white font-bold text-center mb-8 tracking-wider">
              NEED A SERVICE
            </h1>
            {/* Contact Form */}
            <form action={formAction} className="space-y-6 mt-8">
              {/* Name Input */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`
                  absolute left-2 text-white transition-all duration-300 z-20
                  ${
                    shouldShowLabel(name, isNameActive)
                      ? "-top-3 text-xs opacity-100 bg-black/10 px-1 rounded-md"
                      : "top-1/2 -translate-y-1/2 text-base opacity-50 pointer-events-none"
                  }
                `}
                >
                  Enter Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name" // Add name attribute for formData
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsNameActive(true)}
                  onBlur={() => setIsNameActive(false)}
                  placeholder=""
                  className="w-full px-2 py-4 form-border !text-white focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              {/* Phone Input with Country Code */}
              <div className="relative">
                <PhoneInput
                  className="form-border"
                  inputProps={{
                    id: "phone-input",
                    name: "fullPhoneNumber", // Name for formData
                    required: true,
                  }}
                  country={"au"}
                  value={phone}
                  onChange={(value, country, e, formattedValue) =>
                    setPhone(value)
                  }
                  containerClass="w-full phone-input-container"
                  inputClass="w-full phone-input-field"
                  buttonClass="phone-input-button"
                  dropdownClass="phone-input-dropdown"
                />
              </div>
              {/* Email Input */}
              <div className="relative mb-6 mt-8">
                <label
                  htmlFor="email"
                  className={`
                  absolute left-2 text-white transition-all duration-300 z-20
                  ${
                    shouldShowLabel(email, isEmailActive)
                      ? "-top-3 text-xs opacity-100 bg-black/10 px-1 rounded-md"
                      : "top-1/2 -translate-y-1/2 text-base opacity-50 pointer-events-none"
                  }
                `}
                >
                  Enter Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email" // Add name attribute for formData
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailActive(true)}
                  onBlur={() => setIsEmailActive(false)}
                  placeholder=""
                  className="w-full px-2 py-4 form-border !text-white focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              {/* Service Dropdown */}
              <div className="relative w-full max-w-lg mt-[10px]">
                <label htmlFor="service" className="sr-only ">
                  Select Service
                </label>
                <Flex gap={8}>
                  <Select
                    id="service"
                    className="custom-select form-border"
                    placeholder="Select Service"
                    variant="borderless"
                    style={{
                      flex: 1,
                      backgroundColor: "transparent",
                      color: "#fff",
                      height: "56px",
                      paddingLeft: "8px",
                    }}
                    styles={{
                      dropdown: {
                        backgroundColor: "white",
                      },
                    }}
                    popupMatchSelectWidth={false}
                    popupRender={(menu) => (
                      <div style={{ backgroundColor: "white" }}>{menu}</div>
                    )}
                    options={[
                      {
                        value: "Website Development",
                        label: "Website Development",
                      },
                      {
                        value: "Mobile App Development",
                        label: "Mobile App Development",
                      },
                      {
                        value: "Digital Marketing",
                        label: "Digital Marketing",
                      },
                      { value: "Graphic Design", label: "Graphic Design" },
                      { value: "Video Animation", label: "Video & Animation" },
                    ]}
                    value={service || undefined} // Ensure controlled component works with empty string
                    onChange={(value) => setService(value)}
                    onFocus={() => setIsServiceActive(true)}
                    onBlur={() => setIsServiceActive(false)}
                  />
                </Flex>
                <input type="hidden" name="service" value={service} />{" "}
                {/* Hidden input to pass service value */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={state.pending} // Use state.pending for loading
                  className="w-[70%] py-2 bg-teal-600 cursor-pointer backdrop-blur-sm border border-cyan-500/30 rounded-2xl !text-white font-semibold text-[22px] tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.pending ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>SUBMITTING...</span>
                    </div>
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
              {showMessage && state.message && (
                <p
                  className={`text-center mt-4 ${state.success ? "text-green-400" : "text-red-400"}`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
