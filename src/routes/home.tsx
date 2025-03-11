import { Sparkles, PlayCircle } from "lucide-react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-col w-full pb-24">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-12 flex flex-col items-center text-center md:text-left md:items-start"
        >
          <h1 className="text-4xl font-bold leading-tight md:text-7xl tracking-wide">
            <span className="bg-gradient-to-r from-yellow-500 to-green-800 bg-clip-text text-transparent">
              Elevate Your Interview Game
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 md:text-xl max-w-xl">
            AI-powered mock interviews designed to sharpen your skills, boost confidence,
            and help you land your dream job.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Button onClick={() => navigate("/generate")} className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 text-lg flex items-center gap-2 shadow-lg">
              <Sparkles size={20} /> Get Started
            </Button>
            <Button onClick={() => navigate("/about")} className="border border-gray-300 text-gray-300 hover:bg-gray-900 px-6 py-3 text-lg flex items-center gap-2">
              <PlayCircle size={20} /> Learn More
            </Button>
          </div>
        </motion.div>

        {/* Success Stories Section */}
        <section className="bg-gray-50 py-16">
          <Container>
            <h2 className="text-3xl font-bold text-center text-green-800">
              Success Stories from Our Users
            </h2>
            <p className="mt-2 text-lg text-center text-gray-600">
              See how AI-driven mock interviews helped candidates land their dream jobs.
            </p>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {[
                {
                  name: "Amit Verma",
                  role: "Software Engineer at Google",
                  text: "This platform transformed my interview prep. The AI feedback was game-changing!",
                  image: "/assets/img/user1.jpg",
                },
                {
                  name: "Ritika Sharma",
                  role: "Data Scientist at Microsoft",
                  text: "The real-time mock interviews boosted my confidence and helped me crack my dream job.",
                  image: "/assets/img/user2.jpg",
                },
                {
                  name: "Raj Patel",
                  role: "Frontend Developer at Amazon",
                  text: "Highly recommend! The personalized feedback made all the difference in my preparation.",
                  image: "/assets/img/user3.jpg",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-green-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="mt-4 text-gray-700">"{testimonial.text}"</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 text-lg rounded-lg shadow-md" onClick={() => navigate("/generate")}>
                Start Your Journey
                <Sparkles className="ml-2" />
              </Button>
            </div>
          </Container>
        </section>


        {/* Image Section */}
        <div className="relative w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden">
          <motion.img
            src="/assets/img/bot.webp"
            alt="AI Interview Bot"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md text-sm font-semibold">
            Interviews Copilot &copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">AI Developer</h2>
            <Button className="mt-3 bg-green-900 flex items-center gap-2" onClick={() => navigate("/generate")}>
              <Sparkles /> Generate
            </Button>
          </div>
        </div>
      </Container>

      {/* Marquee Section */}
      <div className="w-full my-12">
        <Marquee speed={40} pauseOnHover className="bg-green-50 py-4 rounded-md shadow-sm">
          {[
            "firebase.png",
            "meet.png",
            "zoom.png",
            "firebase.png",
            "microsoft.png",
            "meet.png",
            "tailwindcss.png",
            "microsoft.png",
          ].map((logo, index) => (
            <MarqueImg key={index} img={`/assets/img/logo/${logo}`} />
          ))}
        </Marquee>
      </div>

      <Container className="py-12 space-y-12">
        {/* Headline Section */}
        <h2 className="tracking-wide text-2xl text-green-700 font-bold text-center">
          Unleash Your Potential with <span className="text-yellow-600">AI Insights</span> and Tailored Interview Prep
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          {/* Image Section */}
          <motion.div
            className="col-span-1 md:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/img/office.jpg"
              alt="AI Interview Practice"
              className="w-full max-h-96 rounded-lg object-cover shadow-md"
            />
          </motion.div>

          {/* Text + CTA Section */}
          <motion.div
            className="col-span-1 md:col-span-2 flex flex-col items-left justify-left text-left space-y-6 bg-yellow-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-green-800 leading-relaxed">
              Transform your interview prep with <strong>AI-driven</strong> feedback and
              <strong> personalized</strong> practice. Gain confidence and stand out in your next interview.
            </p>

            <Link to="/generate" className="w-full">
              <Button className="w-3/4 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2">
                Generate <Sparkles className="text-yellow-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
