
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, BookOpen, Clock, Tag } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogPosts } from "../components/Blog";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[Number(id)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <main className="py-24">
        <div className="container-padding">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
          
          <article className="max-w-4xl mx-auto">
            <div className="aspect-[21/9] relative overflow-hidden rounded-xl mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
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

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="prose prose-invert max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-neutral-300 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
