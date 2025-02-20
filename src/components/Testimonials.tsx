import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Their website design completely transformed my barbershop's online presence. We're getting more bookings than ever!",
    author: "James Wilson",
    role: "Owner, Classic Cuts Barbershop",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "As a real estate agent, having a professional website has helped me stand out in a competitive market. The team was fantastic to work with.",
    author: "Maria Rodriguez",
    role: "Real Estate Professional",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "My coffee shop's online ordering system has been a game-changer. Our customers love how easy it is to use.",
    author: "David Chen",
    role: "Owner, Morning Brew Café",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
  {
    quote: "The website they built for my dental practice has helped us attract new patients and streamline our appointment booking process.",
    author: "Dr. Sarah Palmer",
    role: "Owner, Bright Smile Dental",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "Setting up my photography portfolio was a breeze. The design perfectly showcases my work and helps me connect with new clients.",
    author: "Michael Torres",
    role: "Professional Photographer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    quote: "Their marketing insights have been invaluable for my boutique. Our online sales have doubled since launching the new site.",
    author: "Emma Thompson",
    role: "Owner, Vintage Finds Boutique",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-100 overflow-hidden">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          See What Our Customers Are Saying
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Join hundreds of small businesses that trust us with their online presence.
        </motion.p>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll hover:pause min-w-max">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-xl w-[350px] flex-shrink-0 transition-transform duration-200"
              >
                <p className="text-neutral-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
