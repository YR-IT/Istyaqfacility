import React from 'react';
import BlogCard from '../components/Blog/BlogCard';
import BlogFeaturedPost from '../components/Blog/BlogFeaturedPost';

const BlogPage = () => {
  const blogPosts = [
    {
      title: '10 Interior Design Trends for 2024',
      excerpt: 'Discover the latest trends in interior design that will transform your home this year.',
      author: 'Rajesh Kumar',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Design Tips',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true
    },
    {
      title: 'Vastu Tips for Modern Homes',
      excerpt: 'Learn how to incorporate traditional Vastu principles in contemporary home design.',
      author: 'Priya Sharma',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Vastu',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: false
    },
    {
      title: 'Budget-Friendly Home Renovation Ideas',
      excerpt: 'Transform your space without breaking the bank with these creative renovation solutions.',
      author: 'Amit Singh',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Budget Tips',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: false
    },
    {
      title: 'Choosing the Right Materials for Construction',
      excerpt: 'A comprehensive guide to selecting quality materials for your construction project.',
      author: 'Neha Gupta',
      date: 'March 8, 2024',
      readTime: '8 min read',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: false
    }
  ];

  const categories = ['All', 'Design Tips', 'Vastu', 'Budget Tips', 'Construction', 'Trends'];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Design Insights & Tips
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest design trends, expert tips, and inspiration 
            from our team of professional designers and craftsmen.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-900"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <BlogFeaturedPost key={index} post={post} />
            ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
