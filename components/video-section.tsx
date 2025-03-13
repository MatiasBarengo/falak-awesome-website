"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Our Video</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our product and how it can help you achieve your goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <div
            className="aspect-video bg-cover bg-center relative"
            style={{ backgroundImage: "url('/placeholder.svg?height=720&width=1280')" }}
          >
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.button
                onClick={() => setIsOpen(true)}
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Play video"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>
            </div>
          </div>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

