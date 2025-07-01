import { Facebook, Linkedin, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12 relative">
      <div className="bg-[#10d4c4] h-[2px] mb-6 md:mb-[20px]"></div>
      <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-32 mb-8">
         
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 bg-[#10d4c4] rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl lg:text-[30px] font-bold">360 Australia</h3>
                <p className="text-xs md:text-sm text-gray-300">Ventures</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              We are a full-service marketing and advertising agency located in the heart of Australia. From concept to
              execution, we're dedicated to helping your brand stand out and shine.
            </p>
          </div>

      
          <div className="space-y-4 text-center md:text-left mt-[15px]">
            <h4 className="text-lg md:text-xl font-semibold">Quick Links</h4>
            <nav className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-12 space-y-2 md:space-y-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg">
                About Us
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg">
                Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg">
                Contact
              </a>
            </nav>

            
            <div className="mt-6 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#10d4c4] text-sm md:text-base"
                />
                <button className="sm:ml-4 px-6 md:px-10 py-2 cursor-pointer bg-[#10d4c4] text-sm md:text-base lg:text-lg text-white font-medium rounded hover:bg-[#0eb8aa] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

         
          <div className="space-y-4 text-center md:text-left mt-[15px]">
            <h4 className="text-lg md:text-xl lg:text-[24px] font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#10d4c4] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm md:text-base lg:text-lg text-left">
             Australia
              
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#10d4c4] flex-shrink-0" />
                <div className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <p>support@360-australia.com.au</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>

 
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm md:text-base lg:text-lg">
            © 2025 Creative sol tech. All Rights Reserved.
          </p>
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
    </footer>
  )
}
