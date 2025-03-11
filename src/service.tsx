export default function ServicesPage() {
    return (
        <div className="bg-yellow-50 flex flex-col items-center py-16 px-6">
            {/* Header Section */}
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl font-bold text-green-700">Our Services</h1>
                <p className="text-lg text-gray-600 mt-3">
                    AI-powered solutions designed to help you succeed in interviews and career growth.
                </p>
            </div>

            {/* Services Section */}
            <div className="mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h2 className="text-2xl font-semibold text-yellow-600">AI Mock Interviews</h2>
                    <p className="text-gray-700 mt-3">
                        Experience realistic AI-driven mock interviews tailored to your field and skill level.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h2 className="text-2xl font-semibold text-green-700">Personalized Feedback</h2>
                    <p className="text-gray-700 mt-3">
                        Get in-depth analysis and suggestions to improve your responses and boost confidence.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h2 className="text-2xl font-semibold text-yellow-600">Career Guidance</h2>
                    <p className="text-gray-700 mt-3">
                        Access expert insights and career strategies to help you land your dream job.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                    Ready to boost your interview skills?
                </h3>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-all">
                    Get Started
                </button>
            </div>
        </div>
    );
}
