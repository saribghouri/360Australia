// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"

// export default function PortfolioSection() {
//   const [activeFilter, setActiveFilter] = useState("SEE ALL")
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const filterItems = [
//     "SEE ALL",
//     "ANNUAL REPORTS",
//     "BRAND IDENTITIES",
//     "EVENTS",
//     "GIVEAWAYS",
//     "MARKETING STRATEGY",
//     "SOCIAL MEDIA MARKETING",
//   ]

//   const portfolioItems = [
//     {
//       id: 1,
//       category: "ANNUAL REPORTS",
//       image: "/Annua_reports.jpg",
//       title: "Annual Reports",
//       hasOverlay: true,
//     },
//     {
//       id: 2,
//       category: "BRAND IDENTITIES",
//       image: "/barnd_identities.jpg",
//       title: "Brand Identity",
//     },
//     {
//       id: 3,
//       category: "EVENTS",
//       image: "/Events.jpg",
//       title: "Corporate Events",
//     },
//     {
//       id: 4,
//       category: "GIVEAWAYS",
//       image: "/giveaways.jpg",
//       title: "Product Giveaways",
//     },
//     {
//       id: 5,
//       category: "MARKETING STRATEGY",
//       image: "/Marketing_Strategy.jpg",
//       title: "Strategy Planning",
//     },
//     {
//       id: 6,
//       category: "SOCIAL MEDIA MARKETING",
//       image: "/SMM.jpg",
//       title: "Social Media",
//     },
//   ]

//   const filteredItems =
//     activeFilter === "SEE ALL" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

//   return (
//     <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-[90%] mx-auto">
//         {/* Header */}
//         <div className="mb-12">
//           <div className="flex items-center mb-6">
//             <div className="w-2 h-2 bg-[#10d4c4] rounded-full mr-3"></div>
//             <span className="text-lg font-medium tracking-wider text-gray-300">CORE PROJECTS</span>
//           </div>

//           <div className="flex flex-col w-full lg:flex-row lg:items-start lg:justify-between gap-8">
//             {/* Title */}
//             <div
//               className={`transform w-[50%] transition-all duration-1000 ${
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//               }`}
//             >
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
//                 DISCOVER OUR
//                 <br />
//                 <span className="text-gray-400">PORTFOLIO</span>
//               </h2>
//             </div>

//             {/* Filter Navigation */}
//             <div
//               className={`transform transition-all duration-1000 delay-300 ${
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//               }`}
//             >
//               <nav className="flex flex-wrap gap-6 lg:gap-8">
//                 {filterItems.map((item, index) => (
//                   <button
//                     key={item}
//                     onClick={() => setActiveFilter(item)}
//                     className={`text-lg font-medium tracking-wider transition-all duration-300 hover:text-[#10d4c4] transform hover:scale-105 ${
//                       activeFilter === item
//                         ? "text-[#10d4c4] border-b border-[#10d4c4] pb-1"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                     style={{
//                       animationDelay: `${index * 100}ms`,
//                     }}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* Portfolio Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className={`group relative overflow-hidden rounded-lg bg-gray-900 aspect-square transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//               }`}
//               style={{
//                 animationDelay: `${(index + 1) * 200}ms`,
//               }}
//             >
//               <Image
//                 src={item.image || "/placeholder.svg"}
//                 alt={item.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                     <p className="text-sm text-gray-300">{item.category}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Special overlay for Annual Reports */}
//               {item.hasOverlay && (
//                 <div className="absolute bottom-6 left-6">
//                   <div className="bg-[#10d4c4] text-black px-4 py-2 rounded font-medium text-sm transform transition-all duration-300 group-hover:scale-110">
//                     Annual Reports
//                   </div>
//                 </div>
//               )}

//               {/* Hover border effect */}
//               <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#10d4c4] transition-colors duration-300 rounded-lg"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom fade effect */}
//         <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("SEE ALL")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filterItems = [
    "SEE ALL",
    "ANNUAL REPORTS",
    "BRAND IDENTITIES",
    "EVENTS",
    "GIVEAWAYS",
    "MARKETING STRATEGY",
    "SOCIAL MEDIA MARKETING",
  ]

  const portfolioItems = [
    {
      id: 1,
      category: "ANNUAL REPORTS",
      image: "/Annua_reports.jpg",
      title: "Annual Reports",
      hasOverlay: true,
    },
    {
      id: 2,
      category: "BRAND IDENTITIES",
      image: "/barnd_identities.jpg",
      title: "Brand Identity",
    },
    {
      id: 3,
      category: "EVENTS",
      image: "/Events.jpg",
      title: "Corporate Events",
    },
    {
      id: 4,
      category: "GIVEAWAYS",
      image: "/giveaways.jpg",
      title: "Product Giveaways",
    },
    {
      id: 5,
      category: "MARKETING STRATEGY",
      image: "/Marketing_Strategy.jpg",
      title: "Strategy Planning",
    },
    {
      id: 6,
      category: "SOCIAL MEDIA MARKETING",
      image: "/SMM.jpg",
      title: "Social Media",
    },
  ]

  const filteredItems =
    activeFilter === "SEE ALL" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 ">
      <div className="max-w-[90%] mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-[#10d4c4] rounded-full mr-3"></div>
            <span className="text-sm sm:text-base lg:text-lg font-medium tracking-wider text-gray-300">
              CORE PROJECTS
            </span>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Title */}
            <div
              className={`transform transition-all duration-1000 w-full lg:w-1/2 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
                DISCOVER OUR
                <br />
                <span className="text-gray-400">PORTFOLIO</span>
              </h2>
            </div>

            {/* Filter Navigation */}
            <div
              className={`transform transition-all duration-1000 delay-300 w-full lg:w-auto ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {/* Mobile Filter Dropdown */}
              <div className="block sm:hidden mb-4">
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 text-sm font-medium tracking-wider focus:outline-none focus:border-[#10d4c4] transition-colors duration-300"
                >
                  {filterItems.map((item) => (
                    <option key={item} value={item} className="bg-gray-900">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop Filter Navigation */}
              <nav className="hidden sm:flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 lg:justify-end">
                {filterItems.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => setActiveFilter(item)}
                    className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wider transition-all duration-300 hover:text-[#10d4c4] transform hover:scale-105 whitespace-nowrap ${
                      activeFilter === item
                        ? "text-[#10d4c4] border-b border-[#10d4c4] pb-1"
                        : "text-gray-300 hover:text-white"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg bg-gray-900 aspect-square transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                animationDelay: `${(index + 1) * 200}ms`,
              }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>

              {/* Special overlay for Annual Reports */}
              {item.hasOverlay && (
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6">
                  <div className="bg-[#10d4c4] text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded font-medium text-xs sm:text-sm transform transition-all duration-300 group-hover:scale-110">
                    Annual Reports
                  </div>
                </div>
              )}

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#10d4c4] transition-colors duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom fade effect */}
        <div className="mt-12 sm:mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
