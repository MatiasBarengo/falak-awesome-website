"use client"

import { motion } from "framer-motion"
import { Layers, Shield, Zap, Users, BarChart, Smartphone } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Layers className="w-12 h-12 text-primary" />,
      title: "Modern Design",
      description: "Clean and modern design that will make your website stand out from the crowd.",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Secure Code",
      description: "Built with security in mind to protect your data and your users.",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Fast Performance",
      description: "Optimized for speed to provide the best user experience possible.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "User Friendly",
      description: "Intuitive interface designed with the user experience as the top priority.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Analytics",
      description: "Built-in analytics to help you understand your users and improve your website.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Responsive",
      description: "Fully responsive design that looks great on any device, from mobile to desktop.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Amazing Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our template comes with a wide range of features to help you build your next project quickly and
            efficiently.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

