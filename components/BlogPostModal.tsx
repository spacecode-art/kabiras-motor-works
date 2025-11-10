import React from 'react';

interface Post {
    image: string;
    category: string;
    title: string;
    fullContent: string[]; // array of paragraphs
    date?: string;
}

interface BlogPostModalProps {
  post: Post;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white/50 rounded-full p-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <div>
            <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-t-lg" loading="lazy" decoding="async" />
            <div className="p-8 md:p-10">
                <p className="text-brand-orange font-bold text-sm mb-2">{post.category}</p>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-4">{post.title}</h2>
                <div className="flex items-center text-sm text-gray-500 mb-6 border-b pb-4">
                    <span>By KABIRA'S Experts</span>
                    <span className="mx-2">|</span>
                    <span>Posted on {post.date || 'a recent date'}</span>
                </div>

                <div className="prose max-w-none text-brand-charcoal text-lg leading-relaxed">
                    {post.fullContent.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t text-center">
                    <button onClick={onClose} className="bg-brand-orange text-white font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
                        Close Article
                    </button>
                </div>
            </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .prose p {
          margin-bottom: 1.25em;
        }
      `}</style>
    </div>
  );
};

export default BlogPostModal;