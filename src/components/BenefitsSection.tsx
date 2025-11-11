import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Activity, Zap, Brain } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Increased Muscle Mass",
    description: "Build lean muscle faster with optimized testosterone levels",
    stat: "+25% avg increase"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Enhanced Energy",
    description: "Experience sustained energy throughout your day",
    stat: "+180% reported"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Mental Clarity",
    description: "Sharper focus and improved cognitive function",
    stat: "+65% improvement"
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Better Performance",
    description: "Optimize physical and intimate performance",
    stat: "+90% satisfaction"
  }
];

const testosteroneLevels = [
  { age: "20-29", level: 85, color: "bg-green-500" },
  { age: "30-39", level: 75, color: "bg-green-400" },
  { age: "40-49", level: 55, color: "bg-yellow-500" },
  { age: "50-59", level: 40, color: "bg-orange-500" },
  { age: "60+", level: 30, color: "bg-red-500" }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testosterone Decline Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
              The Science of <span className="text-accent">Testosterone</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testosterone naturally declines with age. Our protocols restore optimal levels.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-black rounded-none p-8 lg:p-12">
            <div className="mb-8">
              <h3 className="text-white text-2xl font-bold mb-2 uppercase">Average Testosterone Decline by Age</h3>
              <p className="text-gray-400">Percentage of peak testosterone levels</p>
            </div>
            
            <div className="space-y-6">
              {testosteroneLevels.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-white font-bold text-lg">{item.age}</div>
                    <div className="flex-1 bg-gray-800 rounded-none h-12 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`${item.color} h-full flex items-center justify-end pr-4`}
                      >
                        <span className="text-white font-bold text-lg">{item.level}%</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-accent font-bold text-xl mb-2">Our TRT Protocol Can Restore Levels to 90-100%</p>
              <p className="text-gray-400">Regardless of age, with proper treatment</p>
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
              <Card className="h-full border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl group bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-none bg-black text-accent mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="bg-accent/10 rounded-none p-3">
                    <p className="text-accent font-bold text-lg">
                      {benefit.stat}
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
