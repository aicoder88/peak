import { motion, useInView } from "framer-motion";
import { Award, CheckCircle2, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const credentials = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Board-Certified Physicians",
    description: "Licensed medical doctors specializing in hormone optimization"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "FDA-Approved Medications",
    description: "Only pharmaceutical-grade, regulated compounds"
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Evidence-Based Protocols",
    description: "Treatment plans backed by clinical research"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Proven Success Rate",
    description: "97% of patients report significant improvements"
  }
];

const stats = [
  { value: 2500, suffix: "+", label: "Men Treated" },
  { value: 97, suffix: "%", label: "Success Rate" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 50000, suffix: "+", label: "Treatments Administered" }
];

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-black rounded-none p-8 lg:p-16 shadow-2xl border-4 border-accent">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white text-sm lg:text-base uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Credentials */}
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
              className="bg-gray-50 rounded-none p-6 border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl group"
            >
              <div className="inline-flex p-4 rounded-none bg-black text-accent mb-4 group-hover:scale-110 transition-transform">
                {credential.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-black uppercase tracking-tight">
                {credential.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {credential.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}