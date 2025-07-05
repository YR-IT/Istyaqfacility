import React from 'react';
import { User, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
    <div className="relative overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-4 left-4">
        <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-amber-800 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-amber-700 mb-4">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>{post.readTime}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-amber-700">{post.date}</span>
        <button className="text-amber-700 hover:text-amber-800 font-medium text-sm transition-colors group">
          Read More
          <ArrowRight className="h-4 w-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </article>
);

export default BlogCard;
