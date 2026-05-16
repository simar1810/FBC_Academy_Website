import { useRouter } from 'next/router';
import { blogsData } from '@/data/blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { motion } from 'framer-motion';

const renderContent = (content) => {
  return content.split('\n').map((line, index) => {
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('### ', '')}</h3>;
    } else if (line.startsWith('#### ')) {
      return <h4 key={index} className="text-xl font-semibold mt-6 mb-3">{line.replace('#### ', '')}</h4>;
    } else if (line.startsWith('* **')) {
      const text = line.replace('* **', '').replace('**:', ':');
      return <li key={index} className="ml-6 list-disc mb-2 font-bold">{text}</li>;
    } else if (line.startsWith('* ')) {
      return <li key={index} className="ml-6 list-disc mb-2">{line.replace('* ', '')}</li>;
    } else if (line.startsWith('**')) {
      return <p key={index} className="font-bold mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>;
    } else if (line.trim() === '') {
      return <br key={index} />;
    } else {
      const parts = line.split('**');
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
        </p>
      );
    }
  });
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog post
  const post = blogsData.find((p) => p.id === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <h1 className="text-2xl">Loading or Post Not Found...</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Fit Body Culture</title>
      </Head>
      <Navbar />

      <main className="pt-24 pb-20 bg-gray-50 min-h-screen overflow-hidden">
        <motion.article 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 md:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
        >
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-center"
          >
            <p className="text-[#1142D4] text-sm uppercase tracking-widest font-semibold mb-3">
              {post.category}
            </p>
            <h1 className="text-3xl md:text-5xl font-playfair font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
              <span className="font-medium text-gray-800">By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full h-[300px] md:h-[500px] relative mb-12 rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-lg max-w-none text-gray-800"
          >
            {renderContent(post.content)}
          </motion.div>
        </motion.article>
      </main>

      <Footer />
    </>
  );
}
