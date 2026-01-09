"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const credentials = [
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    title: "Board-Certified Physicians",
    description: "Licensed medical doctors specializing in hormone optimization"
  },
  {
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
    title: "FDA-Approved Medications",
    description: "Only pharmaceutical-grade, regulated compounds"
  },
  {
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    title: "Evidence-Based Protocols",
    description: "Treatment plans backed by clinical research"
  },
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    title: "Trusted by Thousands",
    description: "Dedicated to helping men achieve their health goals"
  }
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 lg:py-32 relative overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=60"
          alt="Medical Excellence"
          fill
          className="object-cover opacity-5"
          quality={60}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
            Medical Excellence You Can <span className="text-accent">Trust</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Certified professionals committed to your health and safety
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-none border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={credential.image}
                  alt={credential.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-black uppercase tracking-tight">
                  {credential.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {credential.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}