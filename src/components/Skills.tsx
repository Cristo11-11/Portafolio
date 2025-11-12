import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Code2, Palette, Server, Database } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "Django"],
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Git", "Docker", "AWS"],
    },
    {
      icon: Palette,
      title: "Design & Other",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Accessibility", "Testing"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-4">Skills & Technologies</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Here are some of the technologies I've been working with recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <Icon className="mb-4 text-gray-700" size={32} />
                  <h3 className="mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
