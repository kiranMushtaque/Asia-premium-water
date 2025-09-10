

// "use client";

// import { FC, useState } from "react";
// import {
//   motion,
//   Variants,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import Image from "next/image";
// import { Droplets, Target } from "lucide-react";

// // Framer Motion Variants
// const sectionVariants: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// const textVariants: Variants = {
//   hidden: { opacity: 0, x: -40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
// };

// const imageVariants: Variants = {
//   hidden: { opacity: 0, x: 40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.4 } },
// };

// const AboutPage: FC = () => {
//   const { scrollY } = useScroll();
//   const heroY = useTransform(scrollY, [0, 400], [0, -50]);
//   const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
//   const aboutIconY = useTransform(scrollY, [400, 800], [0, -20]);
//   const missionImageY = useTransform(scrollY, [800, 1200], [0, -40]);

//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="min-h-screen font-sans text-gray-800 antialiased">
//       {/* Hero Section */}
//       <header className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
//         <video
//           className="w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//         >
//           <source src="/images/final documentary asia.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Cinematic Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>

//         {/* Overlay Text with Parallax */}
//         <motion.div
//           style={{ y: heroY, opacity: heroOpacity }}
//           className="absolute inset-0 flex flex-col items-center justify-center p-6"
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]"
//           >
//             Asia Premium Water
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl text-center drop-shadow-md"
//           >
//             A Documentary on Purity, Trust, and Accessibility in Pakistan
//           </motion.p>
//         </motion.div>
//       </header>

//       <main>
//         {/* About Section */}
//         <section id="about" className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={sectionVariants}
//             className="text-center"
//           >
//             <motion.div
//               style={{ y: aboutIconY }}
//               className="flex justify-center items-center gap-x-4 mb-8"
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full shadow-lg"
//               >
//                 <Droplets className="w-8 h-8 text-blue-600" />
//               </motion.div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
//                 About Asia Water
//               </h2>
//             </motion.div>

//             <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
//               Pakistan’s Choice for Trusted, Economical Hydration. At Asia
//               Water, we believe clean drinking water should never be a luxury.
//               We launched our brand to make high-quality, purified bottled water
//               accessible to everyone — from busy families to corporate teams.
//             </p>
//             <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//               Backed by modern purification technology, our water goes through
//               rigorous lab testing and quality assurance, ensuring safe and
//               refreshing hydration every time.
//             </p>
//           </motion.div>
//         </section>

//         {/* Our Mission Section */}
//         <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-20">
//           <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={textVariants}
//               className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl"
//             >
//               <div className="flex items-center gap-x-4 mb-6">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.6 }}
//                   className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full shadow-lg translate-y-1"
//                 >
//                   <Target className="w-8 h-8 text-blue-600" />
//                 </motion.div>
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
//                   Our Mission
//                 </h2>
//               </div>

//               <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
//                 <p>
//                   At{" "}
//                   <span className="font-semibold text-blue-600">
//                     Asia Premium Water
//                   </span>
//                   , our mission has always been clear: to make pure drinking
//                   water accessible and affordable for everyone. With over 25
//                   years of experience in water treatment and engineering, we
//                   have built our foundation on trust, innovation, and quality.
//                 </p>

//                 <AnimatePresence>
//                   {showMore && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <p>
//                         Through our automatic 14-stage purification process,
//                         supported by national and international certifications,
//                         we guarantee water that is safe and meets the highest
//                         global standards.
//                       </p>
//                       <p>
//                         Water is more than hydration—it is health, confidence,
//                         and sustainability. Every bottle of Asia Water carries
//                         our promise to deliver purity within your reach.
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <button
//                   onClick={() => setShowMore(!showMore)}
//                   className="mt-4 text-blue-600 font-semibold hover:underline transition"
//                 >
//                   {showMore ? "Show Less" : "Learn More"}
//                 </button>
//               </div>

//               <blockquote className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-gray-600 italic rounded-r-lg shadow-sm">
//                 <footer className="text-right not-italic font-semibold text-gray-800">
//                   — CEO, Asia Water
//                 </footer>
//               </blockquote>
//             </motion.div>

//             <motion.div
//               style={{ y: missionImageY }}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={imageVariants}
//               className="relative w-full max-w-md mx-auto md:max-w-none"
//             >
//               <div className="relative bg-gray-100 p-2 rounded-2xl shadow-2xl">
//                 <Image
//                   src="/images/deliveryboy.jpeg"
//                   alt="Asia Water delivery person with water bottles"
//                   width={600}
//                   height={400}
//                   className="w-full h-auto rounded-xl"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AboutPage;

"use client";

import { FC, useState, useRef } from "react";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { Droplets, Target, Play, Pause, Volume2, VolumeX } from "lucide-react";

// Framer Motion Variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const textVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
};
const imageVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.4 } },
};

const AboutPage: FC = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, -50]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const aboutIconY = useTransform(scrollY, [400, 800], [0, -20]);
  const missionImageY = useTransform(scrollY, [800, 1200], [0, -40]);

  const [showMore, setShowMore] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 antialiased">
      {/* Hero Section */}
      <header className="relative w-full overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto">
          <video
            ref={videoRef}
            className="w-full h-auto object-contain"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
          >
            <source src="/images/final documentary asia.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20"></div>

        {/* Video Controls */}
        <div className="absolute bottom-4 left-4 flex gap-2 z-10">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
        </div>

     
      </header>

      <main>
        {/* About Section */}
        <section
          id="about"
          className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <motion.div
              style={{ y: aboutIconY }}
              className="flex justify-center items-center gap-x-4 mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full shadow-lg"
              >
                <Droplets className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                About Asia Water
              </h2>
            </motion.div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
              Pakistan’s Choice for Trusted, Economical Hydration. At Asia
              Water, we believe clean drinking water should never be a luxury.
              We launched our brand to make high-quality, purified bottled water
              accessible to everyone — from busy families to corporate teams.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Backed by modern purification technology, our water goes through
              rigorous lab testing and quality assurance, ensuring safe and
              refreshing hydration every time.
            </p>
          </motion.div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
              className="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-x-4 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full shadow-lg translate-y-1"
                >
                  <Target className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  At{" "}
                  <span className="font-semibold text-blue-600">
                    Asia Premium Water
                  </span>
                  , our mission is clear: to make pure drinking water accessible
                  and affordable for everyone.
                </p>
                <AnimatePresence>
                  {showMore && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p>
                        Through our 14-stage purification process and
                        certifications, we ensure water that is safe and meets
                        the highest global standards.
                      </p>
                      <p>
                        Water is more than hydration—it is health, confidence,
                        and sustainability. Every bottle of Asia Water carries
                        our promise to deliver purity within your reach.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-4 text-blue-600 font-semibold hover:underline transition"
                >
                  {showMore ? "Show Less" : "Learn More"}
                </button>
              </div>
              <blockquote className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-gray-600 italic rounded-r-lg shadow-sm">
                <footer className="text-right not-italic font-semibold text-gray-800">
                  — CEO, Asia Water
                </footer>
              </blockquote>
            </motion.div>

            {/* Image */}
            <motion.div
              style={{ y: missionImageY }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants}
              className="relative w-full max-w-md mx-auto md:max-w-none"
            >
              <div className="relative bg-gray-100 p-2 rounded-2xl shadow-2xl">
                <Image
                  src="/images/deliveryboy.jpeg"
                  alt="Asia Water delivery person"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
