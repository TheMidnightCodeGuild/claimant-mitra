import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Understanding Insurance Claims Process",
      heading: "Insurance Claims Guide",
      excerpt:
        "A comprehensive guide to filing and following up on insurance claims effectively...",
      image: "/images/blog1.png",
      date: "Oct 15, 2023",
    },
    {
      title: "Common Reasons for Claim Rejections",
      heading: "Claim Rejection Analysis",
      excerpt:
        "Learn about the most frequent causes of insurance claim rejections and how to avoid them...",
      image: "/images/blog2.png",
      date: "Oct 10, 2023",
    },
    {
      title: "Tips for Faster Claim Settlement",
      heading: "Quick Settlement Guide",
      excerpt:
        "Expert advice on expediting your insurance claim settlement process...",
      image: "/images/blog3.png",
      date: "Oct 5, 2023",
    },
    {
      title: "How to Document Your Losses for Claims",
      heading: "Loss Documentation Tips",
      excerpt:
        "Essential steps for properly documenting losses to strengthen your insurance claim...",
      image: "/images/blog4.png",
      date: "Oct 1, 2023",
    },
    {
      title: "Understanding Policy Terms and Conditions",
      heading: "Policy Clarity Guide",
      excerpt:
        "Break down the fine print of insurance policies to avoid confusion during claims...",
      image: "/images/blog5.png",
      date: "Sep 28, 2023",
    },
    {
      title: "What to Do After an Incident",
      heading: "Post-Incident Checklist",
      excerpt:
        "A step-by-step checklist to follow immediately after an insurable event occurs...",
      image: "/images/blog6.png",
      date: "Sep 20, 2023",
    }
    

  ];

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-[60vh] lg:h-[80vh] w-full">
        <Image
          src="/images/bg.png"
          alt="Insurance Blog"
          fill
          className="object-cover blur-[4px]"
          priority
        />
        <div className="absolute bg-black/50 inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl lg:text-6xl font-semibold uppercase mb-5 tracking-tight">
              Insights
            </h1>
            <p className="text-lg lg:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Stay informed with our latest articles and insights about
              insurance claims, policies, and industry updates.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {post.heading}
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/components/Blogs/Blog${index + 1}`}
                  className="text-[#1AC0D8] font-semibold hover:text-[#15a9bf] transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
