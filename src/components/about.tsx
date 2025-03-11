export default function AboutPage() {
    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center py-16 px-6">
            {/* Header Section */}
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl font-bold text-green-700">About Us</h1>
                <p className="text-lg text-gray-600 mt-3">
                    Empowering candidates with AI-driven mock interviews to help them
                    ace their dream jobs.
                </p>
            </div>

            {/* Content Section */}
            <div className="mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <img
                    src="/assets/img/about-ai-interview.webp"
                    alt="AI Mock Interview"
                    className="w-full rounded-lg shadow-md object-cover"
                />

                {/* About Text */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-semibold text-yellow-600">
                        The Future of Interview Preparation
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We use cutting-edge AI technology to simulate real interview
                        experiences, providing candidates with <strong>personalized feedback</strong> and
                        <strong>actionable insights</strong> to improve their chances of success.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Whether you're preparing for <strong>tech interviews, HR rounds, or
                            leadership roles</strong>, our AI adapts to your needs, making practice
                        <strong>smarter, faster, and more effective</strong>.
                    </p>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="mt-16 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-green-700">Our Mission</h3>
                    <p className="text-gray-700">
                        To revolutionize interview preparation through <strong>AI-driven mock
                            interviews</strong>, helping candidates gain confidence and ace their
                        dream roles.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-yellow-600">Our Vision</h3>
                    <p className="text-gray-700">
                        To become the <strong>#1 AI-based interview preparation platform</strong> that
                        empowers professionals worldwide to <strong>land better opportunities</strong>.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                    Ready to take your interview skills to the next level?
                </h3>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-all">
                    Get Started
                </button>
            </div>
        </div>
    );
}
