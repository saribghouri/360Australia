"use client"

import { useEffect } from "react"

export default function TawkToLoader() {
  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://embed.tawk.to/68641af2b35807190df3edca/default"
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    document.body.appendChild(script)

    return () => {
      
      script.remove()
    }
  }, [])

  return null 
}