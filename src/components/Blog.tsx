import { BookOpen, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
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
      "Increased Visibility: A website allows your business to be found by customers searching online. With SEO optimization, your site can rank high in search results, bringing in more traffic and leads.",
      "Competitive Edge: In a crowded market, standing out is key. A custom-built website tailored to your brand will set you apart from competitors who rely on generic templates.",
      "Having a website in 2025 is no longer just a trend—it's the foundation for growing your business. Whether you're a small local business or an entrepreneur, a website is your digital storefront, 24/7."
    ]
  },
  {
    title: "5 Tips for Optimizing Your Small Business Website for SEO",
    excerpt: "Search Engine Optimization (SEO) is critical to ensuring your website is visible to potential clients. Learn essential tips to boost your site's SEO and increase your chances of showing up in search results.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "SEO",
    date: "Mar 16, 2024",
    readTime: "4 min read",
    content: [
      "Use Relevant Keywords: Do thorough keyword research to identify terms your potential customers are searching for. Incorporate these into your website copy, blog posts, and meta descriptions.",
      "Mobile Optimization: With the rise of mobile internet usage, ensuring your website is mobile-friendly is crucial for SEO. A responsive design will improve user experience and your search engine ranking.",
      "Fast Load Times: Slow websites frustrate users and drive them away. Optimize images and leverage tools to speed up your website's loading time.",
      "Quality Content: Regularly publishing high-quality content that answers common questions or solves problems will not only engage visitors but also improve your SEO ranking.",
      "Local SEO: If you're a local business, ensure your website is optimized for local search. Claim your Google My Business listing and include location-specific keywords on your site."
    ]
  }
];

const categories = [
  "All",
  "SEO",
  "Web Design",
  "Marketing",
  "Business Tips",
  "Development"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredPosts = blogPosts.filter(post => {
    return selectedCategory === "All" || post.category === selectedCategory;
  });

  return (
    <section className="py-16 container-padding bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Tips, Insights, and Stories to Grow Your Online Presence
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 overflow-hidden">
            <div className="overflow-x-auto pb-8">
              <div className="flex gap-6 min-w-max px-4">
                {filteredPosts.map((post, index) => (
                  <article key={index} className="glass-card rounded-xl overflow-hidden group w-[400px] flex-shrink-0">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-4 text-xs text-neutral-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          <span>{post.category}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-neutral-400 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <button className="flex items-center gap-1 text-sm text-accent hover:gap-2 transition-all">
                        <span>Read Article</span>
                        <BookOpen className="w-3 h-3" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-accent text-white"
                        : "hover:bg-neutral-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl text-center bg-accent/10">
              <h3 className="text-xl font-semibold mb-3">Need Web Design Help?</h3>
              <p className="text-neutral-400 mb-4">
                Get a free consultation to discuss your website needs.
              </p>
              <button 
                onClick={() => navigate('/consultation')}
                className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Book Free Consultation
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Blog;
