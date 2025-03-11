import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 py-12 px-6">
            {/* Page Heading */}
            <h1 className="text-4xl font-bold text-green-700 text-center">
                Get in Touch
            </h1>
            <p className="text-lg text-gray-600 text-center mt-2">
                Have questions? Reach out and let’s talk.
            </p>

            {/* Contact Section */}
            <div className="mt-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <Mail className="text-yellow-500 w-6 h-6" />
                        <p className="text-gray-700">info@aimockinterview.com</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="text-yellow-500 w-6 h-6" />
                        <p className="text-gray-700">+91 98765 43210</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="text-yellow-500 w-6 h-6" />
                        <p className="text-gray-700">Pune, Maharashtra, India</p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
