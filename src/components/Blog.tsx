import { BookOpen, Search, Clock, Tag } from "lucide-react";
import { useState } from "react";

const blogPosts = [
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

const recentPosts = [
  "Why Your Business Needs a Professional Website in 2025",
  "5 Tips for Optimizing Your Small Business Website for SEO"
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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 container-padding bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Tips, Insights, and Stories to Grow Your Online Presence
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {filteredPosts.map((post, index) => (
              <article key={index} className="glass-card rounded-xl overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-4/3 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{post.category}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 mb-4">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-accent hover:gap-3 transition-all">
                      <span>Read Article</span>
                      <BookOpen className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Search */}
            <div className="glass-card p-6 rounded-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Categories */}
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

            {/* Recent Posts */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-3">
                {recentPosts.map((post, index) => (
                  <button
                    key={index}
                    className="block w-full text-left text-neutral-400 hover:text-accent transition-colors"
                  >
                    {post}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card p-6 rounded-xl text-center bg-accent/10">
              <h3 className="text-xl font-semibold mb-3">Need Web Design Help?</h3>
              <p className="text-neutral-400 mb-4">
                Get a free consultation to discuss your website needs.
              </p>
              <button className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
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
