"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

interface Service {
  image: string;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
    title: "Testosterone Replacement",
    description: "Physician-supervised TRT protocols tailored to your needs",
    details: [
      "Injectable testosterone cypionate",
      "Customized dosing protocols",
      "Regular monitoring & adjustments",
      "Subcutaneous or intramuscular options"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
    title: "Most Clinics Test Testosterone. We Test the System.",
    description: "Checking testosterone alone is outdated. Our full TRT panel evaluates hormones, metabolism, cardiovascular risk, and long-term safety markers.",
    details: [
      "Free & Total Testosterone",
      "Estradiol (E2)",
      "LH, FSH, DHEA-S, Prolactin",
      "PSA & prostate screening",
      "Thyroid function",
      "CBC, CMP, A1C",
      "Full lipid profile with cholesterol ratios"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    title: "Progress Monitoring",
    description: "Data-driven approach to optimize your results",
    details: [
      "Monthly blood work analysis",
      "Symptom tracking & assessment",
      "Body composition monitoring",
      "Performance metrics tracking"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    title: "Nutritional Guidance",
    description: "Weight management and nutrition programs for optimal health",
    details: [
      "Personalized meal planning",
      "Weight loss strategies",
      "Supplement recommendations",
      "Metabolic optimization"
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    title: "Fitness & Exercise Programs",
    description: "Tailored fitness programs designed for men's health optimization",
    details: [
      "Strength training protocols",
      "Cardiovascular health programs",
      "Recovery optimization",
      "Performance enhancement"
    ]
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=60"
          alt="Performance Background"
          fill
          className="object-cover opacity-20"
          quality={60}
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
            Complete <span className="text-accent">TRT Protocol</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Medical-grade testosterone replacement therapy with comprehensive support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full border-2 border-gray-800 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 group cursor-pointer overflow-hidden bg-gray-900">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl mb-2 text-white group-hover:text-accent transition-colors uppercase tracking-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-800">
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-accent mt-1 font-bold">▸</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}