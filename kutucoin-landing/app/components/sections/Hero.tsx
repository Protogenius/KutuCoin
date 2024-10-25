// components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaHeart, FaRing, FaInfinity, FaWallet, FaArrowRight } from 'react-icons/fa'

const AnimatedCharacters = ({ text }: { text: string }) => {
    // Split text into each character
    const words = text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.04 * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    }

    return (
        <motion.h1
            className="text-[72px] font-bold leading-tight bg-gradient-to-r from-[#FF69B4] to-[#8A2BE2] text-transparent bg-clip-text mb-6"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={container}
                >
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            className="inline-block"
                            variants={child}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <span className="inline-block">&nbsp;</span>
                </motion.span>
            ))}
        </motion.h1>
    )
}

const FloatingIcon = ({ Icon, delay, x, y }: {
    Icon: typeof FaHeart;
    delay: number;
    x: number;
    y: number;
}) => (
    <motion.div
        className="absolute text-pink-400/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            x: x,
            y: y,
        }}
        transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <Icon className="text-2xl" />
    </motion.div>
)

export const Hero = () => {
    const [isHovered, setIsHovered] = useState(false)

    const backgroundIcons = [
        { Icon: FaHeart, delay: 0, x: 100, y: -50 },
        { Icon: FaRing, delay: 1, x: -150, y: 100 },
        { Icon: FaInfinity, delay: 2, x: 200, y: 150 },
        { Icon: FaHeart, delay: 3, x: -100, y: -100 },
        { Icon: FaRing, delay: 4, x: 150, y: 50 },
    ]

    const features = [
        "Evolving NFT Collections",
        "Relationship Milestone Rewards",
        "Exclusive Couple Perks",
        "Community Events"
    ]

    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-white">
            {/* Background Decorative Icons */}
            {backgroundIcons.map((icon, index) => (
                <FloatingIcon key={index} {...icon} />
            ))}

            {/* Main Content */}
            <div className="container mx-auto px-4 py-20 text-center relative">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <AnimatedCharacters text="The Token of Love that Grows With You" />

                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 0.8,
                            type: "spring",
                            damping: 15
                        }}
                    >
                        Transform your love story into digital treasures that evolve with your relationship.
                    </motion.p>

                    {/* Feature List */}
                    <motion.div
                        className="flex justify-center gap-6 mb-16 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-sm border border-pink-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 2 + index * 0.1,
                                    type: "spring",
                                    damping: 12
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 30px rgba(236, 72, 153, 0.2)",
                                    backgroundColor: "rgba(255, 255, 255, 0.95)"
                                }}
                            >
                                <FaHeart className="inline-block text-pink-400 mr-2" />
                                {feature}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <div className="flex justify-center space-x-6 mb-20">
                        <motion.button
                            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-5 rounded-full font-semibold shadow-lg flex items-center text-lg"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.4, type: "spring", damping: 12 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(236, 72, 153, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            <FaWallet className="mr-3 text-xl" />
                            Get Started
                            <motion.span
                                animate={{ x: isHovered ? 5 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaArrowRight className="ml-3 text-xl" />
                            </motion.span>
                        </motion.button>
                        <motion.button
                            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold shadow-lg text-lg"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.4, type: "spring", damping: 12 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Mint KutuCoin
                        </motion.button>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[
                            { label: "Active Couples", value: "10K+" },
                            { label: "Total Value Locked", value: "$5M+" },
                            { label: "Community Members", value: "50K+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-pink-50"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                                    boxShadow: "0 0 20px rgba(236, 72, 153, 0.1)"
                                }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.div
                                    className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-gray-600 mt-2">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}