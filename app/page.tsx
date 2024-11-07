'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Sun, Moon } from 'lucide-react'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const navItems = ['Home', 'Accomplishments', 'Services', 'Testimonials', 'Packages', 'FAQ', 'Contact']

  const accomplishments = [
    { number: '50+', text: 'Happy Customers', description: 'Satisfied clients who have seen real results from our services :)' },
    { number: '200+', text: 'Projects Completed', description: 'Successfully delivered projects across various industries.' },
    { number: '5+', text: 'Years of Excellence', description: 'Consistently providing top-notch digital solutions since our inception.' },
    { number: '20+', text: 'Expert Team Members', description: 'Skilled professionals dedicated to bringing your vision to life.' },
  ]

  const services = [
    { name: 'Web Development', description: 'Custom websites tailored to your unique business needs, built with cutting-edge technologies.' },
    { name: 'UI/UX Design', description: 'Intuitive and visually appealing interfaces that enhance user engagement and satisfaction.' },
    { name: 'E-commerce Solutions', description: 'Robust online stores that drive sales and provide seamless shopping experiences.' },
    { name: 'Mobile App Development', description: 'Native and cross-platform apps that extend your reach to mobile users.' },
    { name: 'SEO Optimization', description: 'Strategies to improve your search engine rankings and increase organic traffic.' },
    { name: 'Content Marketing', description: 'Compelling content that attracts, engages, and converts your target audience.' },
    { name: 'Social Media Management', description: 'Effective social media strategies to build brand awareness and community engagement.' },
    { name: 'Analytics & Reporting', description: 'Data-driven insights to measure performance and guide strategic decisions.' },
  ]

  const packages = [
    { name: 'Starter', price: '$999', features: ['Basic Website', 'SEO Optimization', '1 Month Support'] },
    { name: 'Growth', price: '$1,999', features: ['Advanced Website', 'SEO & Content Marketing', '3 Months Support'] },
    { name: 'Pro', price: '$3,999', features: ['E-commerce Website', 'Full Digital Marketing', '6 Months Support'] },
    { name: 'Enterprise', price: 'Custom', features: ['Custom Solution', 'Comprehensive Strategy', 'Dedicated Support'] },
  ]

  const faqItems = [
    { question: 'What services does IQvention offer?', answer: 'IQvention offers a wide range of digital services including web development, UI/UX design, e-commerce solutions, mobile app development, SEO optimization, content marketing, social media management, and analytics & reporting.' },
    { question: 'How long does it take to complete a project?', answer: 'Project timelines vary depending on the scope and complexity. A basic website might take 2-4 weeks, while a complex e-commerce platform could take 2-3 months. Well provide a detailed timeline during our initial consultation.' },
    { question: 'Do you offer ongoing support after the project is completed?', answer: 'Yes, we offer various support packages to ensure your digital assets continue to perform optimally. Our packages include regular maintenance, updates, and performance monitoring.' },
    { question: 'How do you ensure the security of websites you develop?', answer: 'We implement industry-standard security measures including SSL certificates, regular security audits, and secure coding practices. We also keep all software and plugins up-to-date to protect against vulnerabilities.' },
    { question: 'Can you help with website hosting and domain registration?', answer: 'We offer comprehensive hosting solutions and can assist with domain registration. Well help you choose the best options based on your specific needs and budget.' },
    { question: 'What sets IQvention apart from other web development agencies?', answer: 'IQvention combines cutting-edge technical expertise with creative design and strategic marketing insights. Our holistic approach ensures that your digital presence not only looks great but also drives real business results.' },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50" style={{ scaleX }} />
        
        <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-bold">IQvention</span>
              </motion.div>
              <div className="flex items-center">
                {navItems.map((item) => (
                  <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Link to={item.toLowerCase()} smooth={true} duration={500} className="cursor-pointer hover:text-purple-500 transition-colors mx-3">
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors ml-3"
                >
                  Contact
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 ml-2"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>
          </div>
        </nav>

        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-gray-300 dark:bg-gray-700 rounded-full"
                initial={{ opacity: 0.1, scale: 0.5 }}
                animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.05 }}
              />
            ))}
          </div>
          <motion.div
            className="text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4">Elevate Your Digital Presence</h1>
            <p className="text-xl mb-8">Web Development & Digital Marketing Excellence</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        </section>

        <section id="accomplishments" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Our Accomplishments</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16">Milestones that define our journey and success</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accomplishments.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-5xl font-bold text-purple-500">{item.number}</span>
                  <p className="text-xl mt-2 font-semibold">{item.text}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16">Comprehensive digital solutions tailored to your needs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16">Real experiences from satisfied customers</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'John Doe', company: 'Tech Co', text: 'IQvention transformed our online presence. Their expertise in web development and digital marketing strategies has been invaluable to our growth.' },
                { name: 'Jane Smith', company: 'Design Studio', text: 'Working with IQvention was a game-changer for our business. Their creative approach and technical skills delivered results beyond our expectations.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg mb-4">&quot;{item.text}&quot;</p>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.company}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Our Packages</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16">Tailored solutions to fit your business needs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <p className="text-4xl font-bold text-purple-500 mb-6">{pkg.price}</p>
                  <ul className="mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="mb-2">✓ {feature}</li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    Choose {pkg.name}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16">Find answers to common queries about our services</p>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-semibold">{item.question}</span>
                    <motion.span
                      animate={{ rotate: activeAccordion === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="p-4 bg-gray-50 dark:bg-gray-800">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16">Reach out to us for any inquiries or project discussions</p>
            <motion.form
              className="max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800" required></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
                type="submit"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </section>

        <footer className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 IQvention. All rights reserved.</p>
            <div className="mt-4">
              <a href="#" className="mx-2 hover:text-purple-500 transition-colors">Privacy Policy</a>
              <a href="#" className="mx-2 hover:text-purple-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}