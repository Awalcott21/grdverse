
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    title: "5 Ways to Design a Grid-Based Website That Converts",
    excerpt: "Discover how to leverage grid-based design principles to create websites that not only look stunning but also drive conversions. Learn the secrets of balanced layouts and visual hierarchy.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Design",
    date: "Mar 16, 2024",
    readTime: "5 min read"
  },
  {
    title: "The Power of Grid Systems in Modern Web Design",
    excerpt: "Explore how grid systems can transform your website's aesthetic and functionality. From responsive layouts to dynamic content organization, master the grid-verse of possibilities.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Grid Systems",
    date: "Mar 15, 2024",
    readTime: "4 min read"
  },
  {
    title: "Building Your Digital Universe with GRIDVERSE",
    excerpt: "Learn how GRIDVERSE's innovative approach to web design can help establish your brand's unique digital presence. Discover our process for creating memorable online experiences.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Branding",
    date: "Mar 14, 2024",
    readTime: "6 min read"
  }
];

const categories = [
  "All",
  "Design",
  "Grid Systems",
  "Branding",
  "Development",
  "Case Studies"
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
    <section className="py-16 container-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">GRIDVERSE Blog™</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Grid-Based Design Insights for Building Your Digital Universe
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-accent hover:gap-3 transition-all">
                      <span>Read Article</span>
                      <BookOpen className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 glass-card p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Enter the GRIDVERSE?</h3>
              <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
                Schedule a free consultation to discuss how we can transform your digital presence with our grid-based design approach.
              </p>
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
