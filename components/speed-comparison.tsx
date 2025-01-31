"use client"

import { useState, useEffect } from "react"
import { Zap, Activity, ArrowRight } from "lucide-react"
import { motion, useScroll, useInView, useSpring } from "framer-motion"
import { useRef } from "react"

export function SpeedComparison() {
  const [regularProgress, setRegularProgress] = useState(0)
  const [fastProgress, setFastProgress] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })
  const isComparisonInView = useInView(comparisonRef, { once: true, margin: "-100px" })
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    if (isComparisonInView) {
      const timer = setTimeout(() => {
        setRegularProgress(30)
        setFastProgress(90)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isComparisonInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="bg-[#0B1221] py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            ref={headerRef}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <Zap className="w-5 h-5 text-[#40C057]" />
              </motion.div>
              <span className="text-lg font-medium text-[#40C057]">Lightning Fast</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <Zap className="w-5 h-5 text-[#40C057]" />
              </motion.div>
            </div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience Unmatched Speed
            </motion.h2>
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our advanced technology ensures blazing-fast connection speeds while maintaining your privacy and
              security.
            </motion.p>
          </motion.div>

          {/* Speed Comparison UI */}
          <motion.div
            ref={comparisonRef}
            className="bg-[#162033] rounded-2xl p-6 md:p-8 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isComparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Regular Connection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-gray-400" />
                  <span className="text-white font-medium">Regular Connection</span>
                </div>
                <span className="text-gray-400">50 Mbps</span>
              </div>
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gray-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={isComparisonInView ? { width: `${regularProgress}%` } : { width: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#40C057]" />
                  <span className="text-white font-medium">Obsidian Guard Connection</span>
                </div>
                <span className="text-[#40C057]">150 Mbps</span>
              </div>
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#40C057] rounded-full"
                  initial={{ width: 0 }}
                  animate={isComparisonInView ? { width: `${fastProgress}%` } : { width: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Features */}
            <motion.div ref={featuresRef} className="grid md:grid-cols-3 gap-4 pt-4" variants={containerVariants}>
              {[
                {
                  icon: Zap,
                  title: "3x Faster",
                  description: "Experience speeds up to 3 times faster than regular connections",
                },
                {
                  icon: Activity,
                  title: "Optimized",
                  description: "Smart routing technology for the best possible performance",
                },
                {
                  icon: ArrowRight,
                  title: "No Throttling",
                  description: "Bypass ISP throttling for consistent high speeds",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0B1221] rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#40C057]/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#40C057]" />
                    </div>
                    <span className="text-white font-medium">{feature.title}</span>
                  </div>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed left-0 top-0 right-0 h-1 bg-[#40C057] origin-left"
        style={{ scaleX: springScroll }}
      />
    </div>
  )
}

