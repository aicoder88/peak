"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, FlaskConical, LineChart, Apple, Dumbbell, Brain } from "lucide-react";
import { useState } from "react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: <Syringe className="h-8 w-8" />,
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
    icon: <FlaskConical className="h-8 w-8" />,
    title: "Comprehensive Lab Testing",
    description: "Advanced hormone panels and biomarker analysis",
    details: [
      "Total & free testosterone",
      "Estradiol & SHBG levels",
      "Complete metabolic panel",
      "Thyroid & vitamin D testing"
    ]
  },
  {
    icon: <LineChart className="h-8 w-8" />,
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
    icon: <Apple className="h-8 w-8" />,
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
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Fitness & Exercise Programs",
    description: "Tailored fitness programs designed for men's health optimization",
    details: [
      "Strength training protocols",
      "Cardiovascular health programs",
      "Recovery optimization",
      "Performance enhancement"
    ]
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Stress Reduction & Mental Well-Being",
    description: "Comprehensive approach to mental clarity and stress management",
    details: [
      "Hormonal balance for mental health",
      "Stress reduction techniques",
      "Sleep optimization strategies",
      "Cognitive performance enhancement"
    ]
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-none bg-accent text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
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