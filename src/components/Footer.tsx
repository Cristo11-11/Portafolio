import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className="hover:text-gray-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-center flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500" /> by John Developer
          </p>
          <p className="text-gray-500 mt-2">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
