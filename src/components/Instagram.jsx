import React from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingInstagram = () => {
    return (
        <motion.a
            href="https://www.instagram.com/gyanajyotihss?igsh=b3pudDV4cmp3anYx"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-5 left-5 z-50 bg-gradient-to-tr from-pink-500 via-red-500 to-purple-600 p-4 rounded-full shadow-2xl text-white"
        >
            <FaInstagram className="text-3xl" />
        </motion.a>
    );
};

export default FloatingInstagram;