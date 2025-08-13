import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from './ui/Button'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@muhammad-danial-malik.dev",
      href: "mailto:contact@muhammad-danial-malik.dev"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 XXX XXXXXXX",
      href: "tel:+92XXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <div className="pt-6">
              <p className="text-muted-foreground mb-4">
                Available for freelance projects and full-time opportunities. Let's discuss how we can work together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-[#333333]"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
