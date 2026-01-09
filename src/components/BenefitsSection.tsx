"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const benefits = [
  {
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    title: "Increased Muscle Mass",
    description: "Build lean muscle faster with optimized testosterone levels"
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    title: "Enhanced Energy",
    description: "Experience sustained energy throughout your day"
  },
  {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    title: "Mental Clarity",
    description: "Sharper focus and improved cognitive function"
  },
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    title: "Better Performance",
    description: "Optimize physical and intimate performance"
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=60"
          alt="Gym Background"
          fill
          className="object-cover opacity-10"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/95 to-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testosterone Decline Chart - New Image Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
              Average <span className="text-accent">Testosterone</span> Decline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the decline helps us optimize your treatment plan.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/testosterone-decline-graph.png"
              alt="Average Testosterone Decline - From 1999 to 2016, testosterone levels in adolescent and young adult men declined by roughly 25%"
              width={800}
              height={500}
              className="w-full h-auto"
            />
            <div className="bg-black p-6 text-center">
              <p className="text-accent font-bold text-lg mb-2">
                From 1999 to 2016, testosterone levels in adolescent and young adult men declined by roughly 25%, even after accounting for age, BMI, and lifestyle factors.
              </p>
              <p className="text-gray-400">Our TRT Protocol Can Restore Levels to Optimal Range</p>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
            Transform Every Aspect of Your Life
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience comprehensive benefits backed by clinical research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl group bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-2 text-black uppercase tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
