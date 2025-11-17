"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  age: number;
  image: string;
  rating: number;
  text: string;
  beforeAfter: {
    testosterone: { before: number; after: number };
    energy: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus Thompson",
    age: 45,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&q=60",
    rating: 5,
    text: "After 6 months of TRT, I feel like I'm in my 30s again. My energy is through the roof, I've gained 15 pounds of muscle, and my confidence is back. This changed my life.",
    beforeAfter: {
      testosterone: { before: 285, after: 850 },
      energy: "+180% increase"
    }
  },
  {
    name: "David Chen",
    age: 52,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&q=60",
    rating: 5,
    text: "I was skeptical at first, but the results speak for themselves. Better sleep, sharper mind, and I'm lifting heavier than I did 10 years ago. Peak Life Performance knows what they're doing.",
    beforeAfter: {
      testosterone: { before: 310, after: 780 },
      energy: "+165% increase"
    }
  },
  {
    name: "Robert Martinez",
    age: 48,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=320&q=60",
    rating: 5,
    text: "The comprehensive approach here is unmatched. It's not just about hormones - it's about optimizing every aspect of male health. I'm stronger, leaner, and more focused than ever.",
    beforeAfter: {
      testosterone: { before: 265, after: 820 },
      energy: "+195% increase"
    }
  },
  {
    name: "James Wilson",
    age: 41,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=320&q=60",
    rating: 5,
    text: "Best decision I ever made. My wife noticed the difference before I did. More energy, better mood, and the physical transformation has been incredible. Highly recommend.",
    beforeAfter: {
      testosterone: { before: 295, after: 795 },
      energy: "+170% increase"
    }
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=60"
          alt="Success Background"
          fill
          className="object-cover opacity-20"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
            Real Men. Real Results.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of men who've reclaimed their vitality through our proven protocols
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-2"
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-2xl group bg-white">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-6">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover border-4 border-accent"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-bold text-xl text-black">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                Age {testimonial.age}
                              </p>
                            </div>
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <Quote className="h-8 w-8 text-accent/30 mb-4" />
                      
                      <p className="text-gray-700 mb-6 flex-grow leading-relaxed text-base">
                        "{testimonial.text}"
                      </p>

                      <div className="bg-black rounded-none p-6 space-y-3">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-semibold uppercase tracking-wide">Testosterone Levels</span>
                          <TrendingUp className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-gray-400 text-xs uppercase">Before</div>
                            <div className="text-white font-bold text-2xl">{testimonial.beforeAfter.testosterone.before}</div>
                          </div>
                          <div className="text-accent text-3xl font-bold">→</div>
                          <div>
                            <div className="text-gray-400 text-xs uppercase">After</div>
                            <div className="text-accent font-bold text-2xl">{testimonial.beforeAfter.testosterone.after}</div>
                          </div>
                        </div>
                        <div className="pt-3 border-t border-gray-700">
                          <p className="text-accent font-bold text-center">
                            {testimonial.beforeAfter.energy}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-2 border-black hover:bg-accent hover:border-accent" />
          <CarouselNext className="hidden md:flex border-2 border-black hover:bg-accent hover:border-accent" />
        </Carousel>
      </div>
    </section>
  );
}