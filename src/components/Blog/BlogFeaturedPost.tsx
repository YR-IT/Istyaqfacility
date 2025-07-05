import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogFeaturedPost: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="p-8 lg:p-12">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
          <span className="bg-white text-amber-700 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
        </div>
        <h3 className="text-3xl font-bold text-amber-900 mb-4">{post.title}</h3>
        <p className="text-amber-800 mb-6 leading-relaxed text-lg">{post.excerpt}</p>
        <div className="flex items-center space-x-6 text-sm text-amber-700 mb-6">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <button className="group bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
          <span>Read Full Article</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <img src={post.image} alt={post.title} className="w-full h-64 lg:h-96 object-cover" />
    </div>
  </div>
);

export default BlogFeaturedPost;
