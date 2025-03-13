"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Transcend has completely transformed our online presence. The design is not only beautiful but also highly functional. Our conversion rates have increased by 40% since the redesign.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "Innovate Inc.",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with the Transcend template was a game-changer for our startup. We were able to launch our website in record time, and the feedback from our users has been overwhelmingly positive.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "DesignHub",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The attention to detail in the Transcend template is impressive. It's not just about looks - the UX is thoughtfully designed, making our website not only beautiful but also highly usable.",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="relative h-[300px] md:h-[250px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 italic mb-6">"{testimonials[current].quote}"</p>
                  <div>
                    <h4 className="text-xl font-semibold">{testimonials[current].name}</h4>
                    <p className="text-gray-600">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

