import Image from "next/image"
import { Github, Linkedin, Mail, Phone, Twitter, Instagram, Facebook, Code, Server, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Anwar Sagir Mustapha
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section with gradient background */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Backend Developer
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Anwar Sagir{" "}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Mustapha
                  </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  I build powerful web applications using Python, Django, and MySQL. Passionate about creating
                  efficient, scalable backend solutions.
                </p>
                <div className="flex gap-4">
                  <Button
                    as="a"
                    href="#projects"
                    className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity"
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    as="a"
                    href="#contact"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Contact Me
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/AL-ANWARTECH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://LinkedIn.com/in/anwarsagirmustapha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/AlAnwarTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/al_anwartech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 mix-blend-overlay z-10"></div>
                  <Image src="/images/profile.jpeg" alt="Anwar Sagir Mustapha" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with decorative elements */}
        <section id="about" className="py-20 scroll-mt-20 relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-block">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-lg text-gray-600 mb-4">
                  I'm Anwar Sagir Mustapha, an aspiring Software Engineer with a focus on backend development. I
                  specialize in building powerful web applications using Python, Django, and MySQL.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Passionate about leveraging technology to build innovative, real-world solutions that impact
                  healthcare, businesses, and communities. I enjoy solving complex problems with clean and efficient
                  code, particularly through backend technologies.
                </p>
                <p className="text-lg text-gray-600">
                  As a lifelong learner, I'm focused on building scalable, secure, and high-performance backend systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section with enhanced visual design */}
        <section id="skills" className="py-20 scroll-mt-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-block">
                Technical Skills
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    Python
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    SQL
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    HTML
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    CSS
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-purple-600/70"></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-purple-600/10 p-3 rounded-full">
                    <Server className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Frameworks & Libraries</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600/10 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                    Django
                  </Badge>
                  <Badge className="bg-purple-600/10 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
                    Django REST Framework
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-600/70"></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-full">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    MySQL
                  </Badge>
                  <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    Git
                  </Badge>
                  <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    GitHub
                  </Badge>
                  <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    REST API
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section with enhanced cards */}
        <section id="projects" className="py-20 scroll-mt-20 relative">
          <div className="absolute top-1/2 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 right-0 w-32 h-32 bg-purple-500/5 rounded-full translate-x-1/2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-block">
                Projects
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Task Management API</CardTitle>
                  <CardDescription>Django REST Framework project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A Django REST Framework project with authentication, task filtering, and status updates. Allows
                    users to create, manage, and track tasks efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Django
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      REST API
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      MySQL
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    as="a"
                    href="https://github.com/AL-ANWARTECH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Social Media API</CardTitle>
                  <CardDescription>REST API with user authentication</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    REST API with user authentication, follow system, and personalized feed. Enables users to connect,
                    share content, and interact with each other.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Django
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      REST API
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      MySQL
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    as="a"
                    href="https://github.com/AL-ANWARTECH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Django Blog</CardTitle>
                  <CardDescription>Full CRUD blog application</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Full CRUD blog with comment system, tagging, and search functionality. Allows users to create, read,
                    update, and delete blog posts with a rich feature set.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Django
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      HTML
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      CSS
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    as="a"
                    href="https://github.com/AL-ANWARTECH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Alx_DjangoLearnLab</CardTitle>
                  <CardDescription>Django learning repository</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A repository dedicated to learning and practicing Django development. Contains various exercises,
                    mini-projects, and code samples for Django framework.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Django
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      HTML
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      CSS
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    as="a"
                    href="https://github.com/AL-ANWARTECH/Alx_DjangoLearnLab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section with enhanced design */}
        <section
          id="contact"
          className="py-20 scroll-mt-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-block">
                Let's Connect
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4 rounded-full"></div>
              <p className="mt-4 text-lg text-gray-600">
                Feel free to reach out if you'd like to work together or share ideas!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-lg bg-white overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Contact Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 border rounded-md min-h-[100px] focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:anwarsagirmustapha1@gmail.com"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        anwarsagirmustapha1@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+2349067508735" className="text-gray-600 hover:text-primary transition-colors">
                        +234 906 750 8735
                      </a>
                      <p className="text-sm text-gray-500">(Call & WhatsApp)</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="font-medium mb-4">Connect on Social Media</p>
                    <div className="grid grid-cols-5 gap-3">
                      <a
                        href="https://github.com/AL-ANWARTECH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="bg-gray-100 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
                          <Github className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">GitHub</span>
                      </a>
                      <a
                        href="https://LinkedIn.com/in/anwarsagirmustapha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="bg-gray-100 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
                          <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">
                          LinkedIn
                        </span>
                      </a>
                      <a
                        href="https://x.com/AlAnwarTech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="bg-gray-100 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
                          <Twitter className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">
                          Twitter
                        </span>
                      </a>
                      <a
                        href="https://www.instagram.com/al_anwartech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="bg-gray-100 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
                          <Instagram className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">
                          Instagram
                        </span>
                      </a>
                      <a
                        href="https://www.facebook.com/share/1FLqN9pcPc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="bg-gray-100 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
                          <Facebook className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">
                          Facebook
                        </span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with gradient */}
      <footer className="py-8 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Anwar Sagir Mustapha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
