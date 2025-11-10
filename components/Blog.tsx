import React from 'react';

export const originalPostsData = [
  {
    category: 'Diagnostics',
    title: '5 Signs Your Vehicle Needs a Full Diagnostics Check',
    excerpt: 'Is your "Check Engine" light on? Learn the key signs that your car needs a professional diagnostic check to prevent costly repairs.',
    date: 'November 5, 2023',
    fullContent: [
        "That little 'Check Engine' light on your dashboard can cause a lot of anxiety. While it's easy to ignore, it's your car's way of telling you something is wrong. A full diagnostics check at KABIRA'S can pinpoint the exact issue, saving you time and money. Here are 5 signs you shouldn't ignore.",
        "1. The Check Engine Light is On: This is the most obvious sign. The light can indicate anything from a loose gas cap to a serious engine misfire. A diagnostic scan reads the specific error code from your car's computer, telling our technicians exactly where to look.",
        "2. Poor Fuel Economy: If you notice you're visiting the petrol station more often than usual, it could be a sign of a failing sensor (like an oxygen sensor) or a clogged fuel injector. A diagnostics check can identify the component that's making your engine work inefficiently.",
        "3. Strange Noises or Smells: Unusual grinding, squealing, or knocking sounds are clear indicators of a problem. Similarly, a strong smell of fuel or burning could signal a leak or an overheating part. Don't wait for these symptoms to get worse.",
        "4. Difficulty Starting or Stalling: If your car struggles to start or stalls unexpectedly, it could be due to a variety of issues, from a weak battery to a faulty ignition coil or fuel pump. A diagnostic test helps us identify the root cause quickly and accurately.",
        "5. Rough Idling or Performance Issues: Does your car shake when stopped at a traffic light? Does it hesitate or lack power when you accelerate? These performance issues often point to problems with spark plugs, the fuel system, or engine timing. A diagnostic scan gives us the data needed to make the right repair."
    ],
  },
  {
    category: 'Maintenance',
    title: 'Why Regular Suspension & Alignment Checks Save You Money',
    excerpt: 'Kenya\'s roads can be tough on your vehicle. Discover how proactive suspension checks can prevent expensive damage.',
    date: 'October 22, 2023',
    fullContent: [
        "Your vehicle's suspension system is designed to provide a smooth, stable ride. However, navigating potholes and uneven surfaces on Kenyan roads can take a toll on it. Regular suspension and wheel alignment checks are not just about comfort—they are a crucial investment that can save you significant money in the long run.",
        "The most immediate saving is on tires. A misaligned vehicle will cause your tires to wear unevenly and prematurely. When your wheels aren't pointing in the right direction, they drag instead of rolling freely, scrubbing rubber off the tires. A simple alignment check can double the life of your tires, saving you the cost of early replacement.",
        "Furthermore, a properly aligned suspension reduces the strain on other components. When your wheels are out of alignment, it puts excess stress on your shocks, struts, ball joints, and steering system. This can lead to premature failure of these parts, resulting in much more expensive repairs than a routine alignment.",
        "Finally, good alignment improves fuel efficiency. When your wheels are fighting against each other, your engine has to work harder to move the car forward, consuming more fuel. A correctly aligned vehicle rolls with less resistance, meaning your engine uses less energy—and less petrol—to get you where you need to go. At KABIRA'S, we use precision equipment to ensure your vehicle is perfectly aligned, saving you money and keeping you safe on the road."
    ],
  },
  {
    category: 'Bodywork',
    title: 'How Spray-Painting After a Collision Restores Value & Safety',
    excerpt: 'A quality paint job is more than just cosmetic. It protects your investment and ensures your vehicle\'s structural integrity.',
    date: 'October 10, 2023',
    fullContent: [
        "After a collision, repairing the dents and dings is only half the job. A professional spray-painting and refinishing service is crucial for two very important reasons: it restores your vehicle's value and protects its long-term safety.",
        "First, let's talk about value. A vehicle's appearance is a major factor in its resale price. Scratches, mismatched paint, and signs of repair can dramatically lower its market value. A high-quality, professional paint job ensures a seamless, factory-finish look. At KABIRA'S, we use advanced color-matching technology to perfectly blend the new paint with the original, making the repair virtually invisible. This restores your pride of ownership and protects your financial investment.",
        "More importantly, a proper paint finish is a critical safety barrier. The layers of paint and clear coat on your vehicle are its first line of defense against rust and corrosion. After bodywork is done, the bare metal is exposed. Without a proper seal from a multi-layer paint application, moisture from rain and humidity can quickly lead to rust. Rust compromises the structural integrity of your vehicle's frame and body panels over time, making it less safe in a future collision.",
        "Our process involves meticulous preparation, priming, and the application of durable, high-quality paint in a controlled spray booth. This ensures a beautiful, long-lasting finish that not only looks great but also provides the essential protection your vehicle needs to stay strong and safe for years to come."
    ],
  },
];

export const getPostsDataWithImages = (imageData) => {
    return originalPostsData.map(post => {
        const imagePost = imageData.components.blogPosts.find(p => p.title === post.title);
        return {
            ...post,
            image: imagePost ? imagePost.url : imageData.components.fallback.blogPost
        };
    });
};

interface BlogProps {
    onNavigate?: (page: string) => void;
    imageData: any;
}

const Blog: React.FC<BlogProps> = ({ onNavigate, imageData }) => {
  if (!imageData) return null;

  const postsData = getPostsDataWithImages(imageData);

  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">From the Workshop</h2>
        <p className="text-lg mt-2 max-w-2xl mx-auto text-brand-charcoal">
            Vehicle maintenance tips and safety advice from our experts.
        </p>
        </div>
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
                {onNavigate ? (
                    <button onClick={() => onNavigate('blog')} className="font-bold text-brand-navy hover:underline text-left self-start">Read More &rarr;</button>
                ) : (
                    <p className="text-gray-500 mt-4 text-left self-start">{post.date}</p>
                )}
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
  );
};

export default Blog;