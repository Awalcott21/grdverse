
import { BookOpen, Clock, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    title: "Personal Branding in 2025: Why Your Digital Presence is the Key to Success",
    excerpt: "In 2025, the digital landscape will be more competitive than ever, and your personal brand will be your most powerful asset. Whether you're a small business owner, freelancer, or creative, the ability to stand out in the digital world will determine your success.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Personal Branding",
    date: "Mar 21, 2024",
    readTime: "5 min read",
    content: [
      "The Power of Your Digital Presence: In the age of social media, websites, and online interactions, your digital presence is the new storefront. But personal branding goes far beyond just a sleek logo or catchy tagline. It's about telling your story, sharing your values, and connecting with your audience on a deeper level.",
      "Having a well-established digital presence on the 'digital grid' means you're not just another face in the crowd. You're part of an evolving, interactive world where potential clients, customers, and collaborators can find you at any time, anywhere.",
      "Why 2025 is the Year to Own Your Digital Grid: As we approach 2025, the digital world will continue to grow exponentially. Virtual reality, digital twins, and the metaverse will create even more opportunities for individuals to connect, collaborate, and create in ways we haven't imagined before.",
      "Your Verse: Telling Your Story: We live in a world where everyone has a story to tell, but how you share that story can make all the difference. Personal branding is about more than just showcasing your work; it's about sharing your journey, values, and vision with your audience.",
      "At Gridverse, we believe in empowering individuals and businesses to take control of their digital narrative. Our custom web development services are designed to give you the tools to craft a standout personal brand that resonates with your audience.",
      "The digital world is rapidly changing, and your personal brand is more important than ever. In 2025, having a powerful digital presence will not just be a trend—it will be essential to your success. Don't wait to build your 'verse' on the digital grid—start today and take control of your brand's future."
    ]
  },
  {
    title: "The Importance of Responsive Design for Small Businesses",
    excerpt: "In an era where over half of all internet traffic comes from mobile devices, responsive web design is more important than ever. Here's why responsive design should be a priority for your small business.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "Web Design",
    date: "Mar 20, 2024",
    readTime: "4 min read",
    content: [
      "Better User Experience: A responsive website automatically adjusts to different screen sizes and devices, providing a smooth and consistent user experience for visitors, no matter the device they're using.",
      "Increased Traffic and Engagement: Google's search algorithm gives preference to mobile-friendly websites. If your site isn't responsive, you could be penalized in search rankings, driving potential customers away.",
      "Cost-Effective: Instead of building separate websites for mobile and desktop, a responsive design ensures your site works seamlessly across all devices, saving you time and money in the long run.",
      "Better Conversion Rates: Mobile-friendly sites lead to higher conversion rates as users are more likely to complete purchases or contact you when they have a positive mobile experience.",
      "In conclusion, responsive web design is no longer an option for small businesses—it's essential to maintaining an effective online presence and staying competitive."
    ]
  },
  {
    title: "How Web Design Affects Your Brand's Success",
    excerpt: "Your website is often the first point of contact potential customers have with your brand. A website that's visually appealing, easy to navigate, and optimized for performance can significantly impact your brand's success.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Web Design",
    date: "Mar 19, 2024",
    readTime: "3 min read",
    content: [
      "Visual Identity: Your website reflects your brand's personality. The colors, fonts, and layout all contribute to creating a memorable first impression. A well-designed site strengthens brand recognition and builds trust with visitors.",
      "User Experience: A website that's easy to navigate enhances the user experience, reducing bounce rates and increasing engagement. When users can find what they're looking for quickly, they are more likely to become loyal customers.",
      "Conversion Optimization: Great web design leads to higher conversion rates. If your site is designed with user behavior in mind, it can guide users to take desired actions, whether that's purchasing a product or filling out a contact form.",
      "In essence, web design isn't just about making things look pretty—it's about making your brand's online presence work for you."
    ]
  },
  {
    title: "Why Your Business Needs a Professional Website in 2025",
    excerpt: "In today's digital age, having a professional website isn't just an option — it's a necessity. As we move into 2025, businesses that don't establish a strong online presence risk being left behind.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Web Design",
    date: "Mar 18, 2024",
    readTime: "3 min read",
    content: [
      "First Impressions Matter: Your website is often the first point of contact between you and potential customers. A well-designed website communicates professionalism, credibility, and trustworthiness.",
      "Increased Visibility: A professional website increases your visibility online, making it easier for potential customers to find you through search engines and social media.",
      "24/7 Availability: Your website works around the clock, providing information and services to customers even when you're not available.",
      "Competitive Advantage: In 2025, having a professional website will be the norm. Not having one could put you at a significant disadvantage against your competitors.",
      "Cost-Effective Marketing: A website is one of the most cost-effective marketing tools, providing long-term value and multiple opportunities to showcase your products or services."
    ]
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-neutral-900">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest from Our Blog</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Stay updated with the latest trends in web development, design, and digital marketing through our comprehensive guides and insights.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-neutral-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all cursor-pointer">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-neutral-400 mb-4 line-clamp-2">{post.excerpt}</p>
                <button className="text-accent hover:text-accent/80 font-medium transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
