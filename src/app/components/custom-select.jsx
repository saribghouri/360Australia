"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select-service"

export function CustomSelectService() {
  const [service, setService] = React.useState("Web Development")

  return (
    <div className="relative w-full max-w-xs">
      <Select value={service} onValueChange={setService}>
        <SelectTrigger className="w-full px-4 py-2 pr-8 bg-transparent text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent className="bg-[#525151] text-white rounded-md border border-gray-700">
          <SelectGroup>
            <SelectLabel>Services</SelectLabel>
            <SelectItem value="Web Development" className="focus:bg-gray-600 focus:text-white">
              Web Development
            </SelectItem>
            <SelectItem value="Mobile App Development" className="focus:bg-gray-600 focus:text-white">
              Mobile App Development
            </SelectItem>
            <SelectItem value="UI/UX Design" className="focus:bg-gray-600 focus:text-white">
              UI/UX Design
            </SelectItem>
            <SelectItem value="Digital Marketing" className="focus:bg-gray-600 focus:text-white">
              Digital Marketing
            </SelectItem>
            <SelectItem value="Cloud Solutions" className="focus:bg-gray-600 focus:text-white">
              Cloud Solutions
            </SelectItem>
            <SelectItem value="Data Analytics" className="focus:bg-gray-600 focus:text-white">
              Data Analytics
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
