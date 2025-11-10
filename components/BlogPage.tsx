import React, { useState } from 'react';
import BlogPostModal from './BlogPostModal';
import { getPostsDataWithImages } from './Blog';

interface BlogPageProps {
  imageData: any;
}

const BlogPage: React.FC<BlogPageProps> = ({ imageData }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  if (!imageData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading Blog...</div>
      </div>
    );
  }
  
  const postsData = getPostsDataWithImages(imageData);

  return (
    <>
      <div>
        {/* Page Header */}
        <section className="relative h-64 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url('${imageData.pages.blog[0].url}')` }}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center p-4">
            <h1 className="text-4xl md:text-5xl font-heading font-black">From the Workshop</h1>
            <p className="text-xl text-gray-200 mt-2">Expert Tips, News, and Advice</p>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postsData.map((post, index) => (
                    <div key={index} className="bg-brand-light-gray rounded-lg shadow-lg overflow-hidden group">
                    <div className="overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
                    </div>
                    <div className="p-6 flex flex-col">
                        <p className="text-brand-orange font-bold text-sm mb-2">{post.category}</p>
                        <h3 className="text-xl font-heading font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors duration-300 h-16">{post.title}</h3>
                        <p className="text-brand-charcoal mb-4 flex-grow">{post.excerpt}</p>
                        <button onClick={() => setSelectedPost(post)} className="font-bold text-brand-navy hover:underline text-left self-start">Read More &rarr;</button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
      </div>

      {selectedPost && <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
};

export default BlogPage;