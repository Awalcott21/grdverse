
import { BookOpen, Search, Clock, Tag } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    title: "The Art of Grid-Based Website Design",
    excerpt: "Explore how grid systems form the foundation of modern web design. Learn practical tips for creating balanced, visually appealing layouts that engage visitors and drive conversions.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Design",
    date: "Mar 16, 2024",
    readTime: "5 min read"
  },
  {
    title: "Building Trust Through Professional Web Design",
    excerpt: "Discover how thoughtful design choices can build credibility and trust with your audience. From color psychology to typography, every element plays a crucial role in your brand's perception.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Branding",
    date: "Mar 15, 2024",
    readTime: "4 min read"
  },
  {
    title: "Maximizing Conversions with Strategic Layouts",
    excerpt: "Learn how to strategically position elements in your website design to guide visitors toward conversion. Understand the psychology behind effective call-to-action placement and user flow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Strategy",
    date: "Mar 14, 2024",
    readTime: "6 min read"
  }
];

const recentPosts = [
  "The Future of Responsive Design",
  "Creating Engaging User Experiences",
  "Color Theory in Web Design",
  "Typography Tips for Better Readability"
];

const categories = [
  "All",
  "Design",
  "Strategy",
  "Branding",
  "Development",
  "Resources"
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
              <h3 className="text-xl font-semibold mb-3">Need Expert Guidance?</h3>
              <p className="text-neutral-400 mb-4">
                Get a free consultation to discuss your web design needs.
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
