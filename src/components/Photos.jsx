import React from 'react';
import { motion } from "framer-motion";

import img1 from "../assets/photos/imag1.jpeg";
import img2 from "../assets/photos/img2.jpeg";
import img3 from "../assets/photos/img3.jpeg";
import img4 from "../assets/photos/img4.jpeg";
import img5 from "../assets/photos/img5.jpeg";
import img6 from "../assets/photos/img6.jpeg";

import vedio1 from "../assets/photos/v1.mp4";
import vedio2 from "../assets/photos/v3.mp4";
import vedio3 from "../assets/photos/v4.mp4";

const galleryImages = [
    {
        image: img1,
        title: "Quality Education",
        desc: "Providing excellent academic learning with modern teaching methods.",
    },
    {
        image: img2,
        title: "Cultural Activities",
        desc: "Encouraging students to explore talent through dance and events.",
    },
    {
        image: img3,
        title: "Sports Excellence",
        desc: "Building discipline, teamwork, and confidence through sports.",
    },
    {
        image: img4,
        title: "Personality Development",
        desc: "Helping students become confident and future-ready leaders.",
    },
    {
        image: img5,
        title: "Bright Future",
        desc: "Creating successful students with values and strong careers.",
    },
    {
        image: img6,
        title: "Prizes & Achievements",
        desc: "When students win prizes, everyone becomes happy and proud. People start asking, “Who is the master behind this success?” That proud moment belongs to the Dance Master of GYANA JYOTI COLLEGE, Rayagada, whose dedication, guidance, and hard work bring glory to the college through students’ achievements in dance and cultural activities.",
    },
];

const Photos = () => {
    return (
        <div
            id='photos'
            className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-16 px-6 md:px-16 overflow-hidden"
        >

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center max-w-5xl mx-auto"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                    GYANA JYOTI COLLEGE
                </h1>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    At <span className="font-bold text-blue-800">GYANA JYOTI COLLEGE</span>,
                    excellence is our tradition. From education, dance, cultural
                    activities, sports, and personality development, our students
                    and staff always give their best in every field.
                </p>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
                    Our dedicated teachers, disciplined students, and quality
                    education system make our institution a trusted and branded
                    college in the region.
                </p>

                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="mt-8 inline-block bg-blue-800 text-white px-8 py-4 rounded-full shadow-2xl text-lg font-semibold"
                >
                    ✨ Best in Education • Best in Activities • Best in Values ✨
                </motion.div>
            </motion.div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

                {galleryImages.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-300"
                    >
                        <div className="overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                src={item.image}
                                alt={item.title}
                                className="w-full h-72 object-cover"
                            />
                        </div>

                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-blue-900 mb-3">
                                {item.title}
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>

            {/* Videos Section */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-28"
            >

                <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6">
                    Student Talent & College Activities
                </h2>

                <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed mb-16">
                    When our students sing, the audience claps with admiration
                    and even cries feeling the deep emotions of the song.
                    It is a proud moment for Gyana Jyoti College, where talent,
                    emotion, confidence, and creativity shine together in every
                    performance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Video 1 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <video
                            src={vedio1}
                            controls
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-blue-900 mb-3">
                                Best Choice For Admission
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                Gyana Jyoti College is one of the best choices
                                for admission. We provide quality education,
                                discipline, cultural activities, and personality
                                development for every student.
                            </p>
                        </div>
                    </motion.div>

                    {/* Video 2 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <video
                            src={vedio2}
                            controls
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-blue-900 mb-3">
                                Singing Performance
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                Our talented students perform beautifully with
                                confidence and emotion. Their performances create
                                unforgettable moments and make the college proud.
                            </p>
                        </div>
                    </motion.div>

                    {/* Video 3 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <video
                            src={vedio3}
                            controls
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-blue-900 mb-3">
                                Dance & Cultural Programs
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                When our student sings, the audience claps with admiration and even cries feeling the deep emotions of the song.
                                It is a proud moment for Gyana Jyoti College, where talent, emotion, and confidence shine together.
                            </p>
                        </div>
                    </motion.div>

                </div>

            </motion.div>

            {/* Bottom Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="mt-24 text-center"
            >

                <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
                    Proud To Be Part Of
                </h2>

                <p className="mt-4 text-2xl font-semibold text-orange-500">
                    GYANA JYOTI COLLEGE
                </p>

                <motion.div
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="mt-10"
                >
                    <button className="bg-blue-900 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg shadow-2xl duration-300">
                        Explore More
                    </button>
                </motion.div>

            </motion.div>

        </div>
    );
};

export default Photos;