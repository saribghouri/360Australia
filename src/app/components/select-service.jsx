"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function SelectService() {
  const [service, setService] = useState("Web Development")
  const [isServiceActive, setIsServiceActive] = useState(false)

  return (
    <div className="relative w-full max-w-xs">
      <label htmlFor="service" className="sr-only">
        Select Service
      </label>
      <select
        id="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        onFocus={() => setIsServiceActive(true)}
        onBlur={() => setIsServiceActive(false)}
        className="w-full px-4 py-2 pr-8
                   bg-transparent text-white form-border rounded-md
                   focus:outline-none focus:border-transparent
                   appearance-none cursor-pointer"
        required
      >
        {/*
          Note: Styling <option> elements directly with CSS (including Tailwind classes)
          for background and text color can be inconsistent across browsers
          due to native operating system rendering.
          The 'bg-white' is added to help ensure visibility of 'text-black' options.
        */}
        {/* This div wrapping options is incorrect HTML structure for <select>, but kept as per user's strict instruction. */}
        <div className="!rounded-2xl bg-black">
          <option value="Web Development" className="text-white bg-[#525151]">
            Web Development
          </option>
          <option value="Mobile App Development" className="text-white bg-[#525151]">
            Mobile App Development
          </option>
          <option value="UI/UX Design" className="text-white bg-[#525151]">
            UI/UX Design
          </option>
          <option value="Digital Marketing" className="text-white bg-[#525151]">
            Digital Marketing
          </option>
          <option value="Cloud Solutions" className="text-white bg-[#525151]">
            Cloud Solutions
          </option>
          <option value="Data Analytics" className="text-white bg-[#525151]">
            Data Analytics
          </option>
        </div>
      </select>
      {/* Custom arrow icon to replace the native one removed by appearance-none */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  )
}
