import { Facebook, Linkedin, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12  relative">
        <div className="bg-[#10d4c4] h-[2px] mb-[20px]"></div>
      <div className="max-w-8xl mx-auto flex flex-col justify-center bg-black ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mb-8 ml-[80px]">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#10d4c4] rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h3 className="text-[30px] font-bold">360 Austrailia</h3>
                <p className="text-sm text-gray-300">Ventures</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              We are a full-service marketing and advertising agency located in the<br></br> heart of Karachi. From concept to
              execution, we're dedicated to helping your brand stand out and shine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <nav className="flex flex-row gap-12 space-y-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                About Us
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">
                Contact
              </a>
            </nav>

            {/* Newsletter Subscription */}
            <div className="mt-6 space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#10d4c4]"
                />
                <button className="ml-4 px-10 py-2 cursor-pointer bg-[#10d4c4] text-lg text-white font-medium rounded hover:bg-[#10d4c4] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-[24px] font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#10d4c4] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">
                  Plot no C-18-F, burj-ul-minal Floor 304
                  <br />
                  munawar chowrangi no.4, johor,
                  <br />
                  Karachi-75500, Pakistan.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-[#10d4c4] flex-shrink-0" />
                <div className="text-gray-300 text-lg">
                  <p>360 Austrailia@gmail.com</p>
         
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-[#10d4c4] flex-shrink-0" />
                <p className="text-gray-300 text-lg">+92 323 3372009</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-center items-center">
          <p className="text-gray-400 text-lg mb-4 md:mb-0">© 2025 Creative sol tech. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
  
    </footer>
  )
}
