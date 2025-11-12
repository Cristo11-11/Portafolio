import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-16">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-600 mb-4">
              Hello! I'm John, a passionate web developer based in San Francisco. I enjoy creating things
              that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p className="text-gray-600 mb-4">
              My interest in web development started back in 2018 when I decided to try building my first
              website — turns out hacking together a custom WordPress theme taught me a lot about HTML & CSS!
            </p>
            <p className="text-gray-600 mb-4">
              Fast-forward to today, and I've had the privilege of working at a start-up, a corporation,
              and as a freelancer. My main focus these days is building accessible, inclusive products
              and digital experiences for a variety of clients.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me reading, playing guitar, or exploring new hiking trails.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl aspect-square">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614790871804-fe037bdc1214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MTc2NTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
