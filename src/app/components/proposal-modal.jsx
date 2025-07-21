{
    ; ("use client")
}
import { useState } from "react"
import { motion } from "framer-motion"
import { Modal, Input, Select } from "antd"
import { X, ArrowRight } from "lucide-react"

const { Option } = Select

export function RequestProposalModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "", // New state for service
        projectDetails: "",
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    // Handler for Ant Design Select component
    const handleSelectChange = (value) => {
        setFormData((prev) => ({ ...prev, service: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        onClose()
        alert("Proposal request submitted! We'll be in touch soon.")
    }

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            closeIcon={<X className="h-7 w-7 text-black !bg-transparent hover:text-black hover:bg-black rounded-full p-1" />}
            className="!bg-white !text-white !rounded-2xl !p-0 custom-proposal-modal"
        >
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-4xl !font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-black to-black mb-2">
                    Request a Proposal
                </h2>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                <div>
                    <label htmlFor="name" className="text-black text-lg mb-2 block">
                        Name
                    </label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-900 border border-teal-700 text-white placeholder:text-gray-500 placeholder:text-[18px] focus:border-teal-500 focus:ring-teal-500 rounded-lg !p-2"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-black text-lg mb-2 block">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-900 border border-teal-700 text-white placeholder:text-[18px] !placeholder:text-black focus:border-teal-500 focus:ring-teal-500 rounded-lg !p-2"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="text-black text-lg mb-2 block">
                        Phone
                    </label>
                    <Input
                        id="phone"
                        type="phone"

                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-900 border border-teal-700 text-white placeholder:text-[18px]  focus:border-teal-500 focus:ring-teal-500 rounded-lg !p-2"
                        placeholder="enter your number"
                        required
                    />
                </div>

                {/* Services Dropdown */}
                <div>
                    <label htmlFor="service" className="text-black text-lg mb-2 block">
                        Service Interested In
                    </label>
                    <Select
                        id="service"
                        value={formData.service || undefined} // Use undefined to show placeholder when no value is selected
                        onChange={handleSelectChange}
                        placeholder="Select a service"
                        className="w-full !placeholder:text-[18px] border-2 rounded-[6px]"
                        size="large" 
                        required
                        styles={{
                            selector: {
                                backgroundColor: "#1f2937", // bg-gray-900
                                borderColor: "#14b8a6", // border-teal-700
                                color: "#ffffff", // text-white
                                borderRadius: "0.5rem", // rounded-lg
                                padding: "0.75rem", // p-3
                                height: "40px ", // Adjust height
                            },
                            input: {
                                color: "#ffffff", // text-white
                            },
                            placeholder: {
                                color: "#9ca3af", // placeholder:text-gray-500
                            },
                            clear: {
                                color: "#ffffff", // text-white for clear icon
                            },
                        }}
                        dropdownStyle={{
                            backgroundColor: "#ffff", 
                            borderColor: "#14b8a6",
                            borderRadius: "0.5rem",
                        }}
                        optionRender={(option) => (
                            <div className="text-black hover:bg-teal-700 hover:text-white px-3  py-2 rounded-md">{option.label}</div>
                        )}
                    >
                        <Option value="Website Development">Website Development</Option>
                        <Option value="Mobile App Development">Mobile App Development</Option>
                        <Option value="Graphic Design">Graphic Design</Option>
                        <Option value="Digital Marketing">Digital Marketing</Option>
                        <Option value="Video & Animation">Video & Animation</Option>
                 
                    </Select>
                </div>
                <div>
                    <label htmlFor="projectDetails" className="text-black text-lg mb-2 block">
                        Project Details
                    </label>
                    <textarea
                        id="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className="bg-white w-full border border-teal-700 !text-black placeholder:text-gray-400 text-[16px] focus:border-teal-500 focus:ring-teal-500 rounded-lg p-3 min-h-[120px]"
                        placeholder="Describe your project, goals, and any specific requirements..."
                        required
                    />
                </div>
                <motion.button
                    type="submit"
                    className="group relative border cursor-pointer border-teal-500 bg-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 w-full overflow-hidden shadow-xl"
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.div
                        className="absolute inset-0 "
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 text-[24px] ">Submit Proposal Request</span>
                    <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
            </form>
        </Modal>
    )
}
