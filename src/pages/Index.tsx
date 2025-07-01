import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Code,
  Database,
  Cloud,
  Settings,
  BookOpen,
  Briefcase,
  User,
  MessageSquare,
  ChevronDown,
  Monitor,
  Server,
  Wrench
} from "lucide-react";

const Index = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const roles = [
    "Full Stack Developer",
    "Java Developer", 
    "Software Engineer",
    "Backend Specialist"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const downloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Will download soon",
    });
     // Create a temporary link element
  const link = document.createElement('a');

  // Set the href to your download link (replace with your actual link)
  link.href = "https://drive.google.com/file/d/1rtcaLSimWxOwlN2c0zJKwLXHuV9V-oqy/view?usp=drive_link"; // <--- **IMPORTANT: Replace this with your actual resume link**

  // Set the download attribute to suggest a filename
  link.setAttribute('download', 'SahitiDasara_resume.pdf'); // <--- **IMPORTANT: Suggest a relevant filename and extension**

  // Append the link to the body (it doesn't need to be visible)
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Clean up: remove the link after a short delay
  document.body.removeChild(link);
  };

  const projects = [
    {
      title: "AI Agent Automation for Job Search",
      description: "Developed AI-powered agents to automate job search using n8n and Relevance.ai with LLM integration for intelligent matching.",
      technologies: ["n8n", "Relevance.ai", "LLM", "Automation", "Vector Search"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      github: "https://github.com"
    },
    {
      title: "SyncNote - Real-time Collaboration",
      description: "Distributed caching system for real-time collaboration with WebSocket, RabbitMQ, and Redis backend caching.",
      technologies: ["React", "Node.js", "Redis", "RabbitMQ", "WebSocket"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      github: "https://github.com"
    },
    {
      title: "Car Rental SaaS Platform",
      description: "Containerized web application with payment gateway, event-driven architecture using Apache Kafka.",
      technologies: ["Spring Boot", "Angular", "MongoDB", "AWS", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      github: "https://github.com"
    }
  ];

  const experiences = [
    {
      company: "Texas A&M University - Corpus Christi",
      role: "Graduate Teaching Assistant",
      duration: "January 2024 – May 2025",
      location: "United States",
      highlights: [
        "Python programming instructor for summer camp",
        "Led complex programming concepts to high school students",
        "Graduate Teaching assistant for Engineering laboratories"
      ]
    },
    {
      company: "Infovision",
      role: "Senior Software Engineer",
      duration: "March 2022 - November 2023",
      location: "India",
      highlights: [
        "Designed microservices-based applications using Java/J2EE",
        "Enhanced scalability with Spring Boot and Spring Cloud",
        "Implemented OAuth 2.0, Spring Security, and JWT for REST endpoints",
        "Optimized performance using ELK stack, Prometheus, Grafana"
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "Software Developer", 
      duration: "January 2021 - February 2022",
      location: "India",
      highlights: [
        "Created REST endpoints using JAX-RS, Jersey, Spring MVC",
        "Implemented CI/CD using Jenkins and GitHub Actions",
        "Experience with Apache Tomcat deployments"
      ]
    }
  ];

  const skills = {
    "Languages": {
      icon: Code,
      items: ["Java", "Python", "TypeScript", "JavaScript", "C/C++"]
    },
    "Frontend": {
      icon: Monitor,
      items: ["React.js", "AngularJS", "HTML", "CSS"]
    },
    "Backend": {
      icon: Server,
      items: ["Spring Boot", "Node.js", "Express.js", "Spring Security"]
    },
    "Cloud & DevOps": {
      icon: Cloud,
      items: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
    },
    "Databases": {
      icon: Database,
      items: ["MySQL", "MongoDB", "Redis"]
    },
    "Tools": {
      icon: Wrench,
      items: ["Git", "JIRA", "Postman", "ELK Stack", "Prometheus"]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button onClick={downloadResume} variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Profile Picture */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6eeeb885-ae72-4fd8-9255-3812e3e3f3da.png" 
                  alt="Sahiti Dasara" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-400/50 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Sahiti Dasara</span>
            </h1>
            <div className="text-2xl md:text-3xl mb-8 h-12">
              <span className="text-gray-300">I'm a </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                {roles[currentRole]}
              </span>
            </div>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate Full Stack Developer with expertise in Java, Spring Boot, React, and modern cloud technologies. 
              Currently pursuing Master's in Computer Science at Texas A&M University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <MessageSquare className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button onClick={() => scrollToSection("projects")} variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <Code className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
                  Education
                </h3>
                <div className="space-y-4">
                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-white">Master's in Computer Science</h4>
                      <p className="text-blue-400">Texas A&M University - Corpus Christi</p>
                      <p className="text-gray-300">January 2024 - May 2025 | GPA: 3.75</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-white">Bachelor's in Electronics & Communication</h4>
                      <p className="text-blue-400">VR Siddhartha Engineering College</p>
                      <p className="text-gray-300">July 2016 - September 2020 | GPA: 3.75</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-white">
                <Settings className="w-6 h-6 mr-3 text-blue-400" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, { icon: IconComponent, items }]) => (
                  <Card key={category} className="bg-slate-700/30 border-slate-600/50 hover:bg-slate-700/50 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3 text-blue-400 flex items-center">
                        <IconComponent className="w-5 h-5 mr-2" />
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-slate-600/80 text-gray-200 hover:bg-slate-500 transition-colors border border-slate-500">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-400 mb-2">{exp.role}</h3>
                      <h4 className="text-xl font-medium mb-2 text-white">{exp.company}</h4>
                      <p className="text-gray-300 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="border-blue-400 text-blue-400 mt-2 md:mt-0">
                      {exp.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.05] group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-600 text-gray-200 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4 text-blue-400" />
                  <span className="text-gray-300">sahiti.wd@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-4 text-blue-400" />
                  <span className="text-gray-300">+13464467210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-4 text-blue-400" />
                  <span className="text-gray-300">Corpus Christi, TX</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <Card className="bg-slate-800/50 border-slate-600">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                    <Input 
                      placeholder="Your Name" 
                      required 
                      className="bg-slate-700 border-slate-600 focus:border-blue-400 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="bg-slate-700 border-slate-600 focus:border-blue-400 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                    <Textarea 
                      placeholder="Your message..." 
                      required 
                      rows={5}
                      className="bg-slate-700 border-slate-600 focus:border-blue-400 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2024 Sahiti Dasara. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
