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
  image: string;
  rating: number;
  text: string;
  beforeAfter?: {
    testosterone: { before: number; after: number };
    energy: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: "Jamie Schneider",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&q=60",
    rating: 5,
    text: "I can't say enough good things about Peak Life Performance. From the moment I walked in, I felt genuinely cared for. The entire team is professional, attentive, and truly dedicated to helping patients feel their absolute best. They take the time to listen, explain everything clearly, and personalize the treatment plan for my goals. Within just a few weeks, I noticed a huge difference in my mood, energy levels, and motivation. I feel like myself again, honestly, even better than before."
  },
  {
    name: "Luke",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&q=60",
    rating: 5,
    text: "If you're a man in Scottsdale looking to truly optimize your health, look no further than the physicians at Peak Life Performance. My experience there has been nothing short of transformative. The physician delves deep into understanding your individual health landscape, combining cutting-edge knowledge with a truly personalized approach. The expertise they bring to men's health is exceptional. I've noticed significant improvements in my energy levels, focus, and overall well-being. Highly recommend."
  },
  {
    name: "Tyler Lott",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=320&q=60",
    rating: 5,
    text: "Jeff is the kind of coach who doesn't just help you level up—he helps you unlock your potential. Whether it's mindset, performance, or life goals, he brings clarity, strategy, and genuine support to the table. What sets Jeff apart is how much he truly invests in the people he works with. He's insightful, driven, and just a truly great human who wants to see you win—on every level."
  },
  {
    name: "Scott Bower",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=320&q=60",
    rating: 5,
    text: "Had a great experience here. They helped me dial in my testosterone levels, and I've been feeling noticeably more vibrant and energetic ever since. They also recommended adding HCG to maintain fertility, which I really appreciated—it showed they weren't just trying to treat numbers, but genuinely wanted me to feel my best overall. Super professional and thoughtful team. Highly recommend!"
  },
  {
    name: "Bill Croskey",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&q=60",
    rating: 5,
    text: "I can really feel the difference. It gives me more energy each day and I've been recommending it to my close friends."
  },
  {
    name: "Ravi Chand",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&q=60",
    rating: 5,
    text: "Awesome staff here. They definitely know what they're doing. I've been happy with their subscription TRT injections and consistent blood checks, and the great feedback I get from those. I've been to several clinics over the years and definitely recommend them."
  },
  {
    name: "Ollie Gordon",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=320&q=60",
    rating: 5,
    text: "It's very effective! The nurse is also very friendly and is very knowledgeable on the services."
  },
  {
    name: "Monzer Shakally",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=320&q=60",
    rating: 5,
    text: "Very easy process. Marlene was great and very helpful."
  },
  {
    name: "Sean Normoyle",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&q=60",
    rating: 5,
    text: "Top notch customer service! Jeff was very helpful educating me about the entire process and made me feel good about things."
  },
  {
    name: "Akshay Nanavati",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&q=60",
    rating: 5,
    text: "This place is fantastic. The services they provide are extremely comprehensive, their prices beat everyone else in the area, and the team is amazing to work with. They really care and do everything they can to support you based on your individual needs. My testosterone levels were shot after a recent expedition in Antarctica. They got me back to peak performing levels and I feel amazing now. So grateful to the entire Peak Life Performance team."
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
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
                            <p className="font-bold text-xl text-black">
                              {testimonial.name}
                            </p>
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

                      {testimonial.beforeAfter && (
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
                      )}
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