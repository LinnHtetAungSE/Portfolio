import { socials } from "@/config/socialLinks.config";
import { Github, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
      <div className="flex space-x-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="hover:text-sky-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<social.icon />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
