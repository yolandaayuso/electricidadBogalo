
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Calendar, User, Tag, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { blogPosts } from '@/data/siteData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';
import { FaLink } from 'react-icons/fa';
const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const baseUrl = "https://www.electricidadbogalo.es"; 

  const post = blogPosts.find(post => post.id === id);
  const shareUrl = post ? `${baseUrl}/blog/${post.id}` : '';
  const shareTitle = post ? post.title : '';
  

  // Get post index for navigation
  const currentIndex = post ? blogPosts.findIndex(p => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // If post not found, redirect to blog
  if (!post) {
    React.useEffect(() => {
      navigate('/blog');
    }, [navigate]);
    return null;
  }

  return (
    <>
       <SEO 
        title={post.title}
        description={post.summary}
        keywords={post.tags.join(', ')}
        ogImage={post.image}
        url={shareUrl}
      />

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-energy-blue">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Link to="/blog" className="inline-flex items-center text-gray-200 hover:text-energy-yellow mb-6">
                <ArrowLeft size={18} className="mr-2" />
                <span>Volver al blog</span>
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {post.title}
              </h1>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {post.tags.map((tag, idx) => (
                  <Link 
                    key={idx} 
                    to={`/blog?tag=${tag}`} 
                    className="bg-white/10 text-white hover:bg-white/20 text-xs px-3 py-1 rounded-full transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Featured Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Post Content */}
              <div className="prose prose-lg max-w-none">
              <div
  className="prose prose-lg max-w-none text-gray-600"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>

              </div>


              {/* Post Navigation */}
              <div className="mt-12 border-t border-gray-200 pt-8">
                <div className="flex flex-col md:flex-row justify-between">
                  {prevPost ? (
                    <Link 
                      to={`/blog/${prevPost.id}`} 
                      className="flex flex-col mb-4 md:mb-0 group"
                    >
                      <span className="text-energy-blue flex items-center">
                        <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
                        <span>Artículo anterior</span>
                      </span>
                      <span className="font-medium hover:text-energy-blue transition-colors">{prevPost.title}</span>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  
                  {nextPost ? (
                    <Link 
                      to={`/blog/${nextPost.id}`} 
                      className="flex flex-col text-right group"
                    >
                      <span className="text-energy-blue flex items-center justify-end">
                        <span>Artículo siguiente</span>
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="font-medium hover:text-energy-blue transition-colors">{nextPost.title}</span>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>

              {/* CTA */}
 {/* CTA – Compartir artículo */}
{/* CTA – Compartir artículo */}
<div className="mt-16 bg-energy-blue rounded-xl p-8 text-white">
  <div className="text-center">
    <h3 className="text-2xl font-bold mb-4">
      ¿Te ha gustado este artículo? ¡Compártelo!
    </h3>
    <p className="text-gray-200 mb-6">
      Ayúdanos a llegar a más personas compartiendo este contenido en tus redes.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
  {/* Facebook */}
  <FacebookShareButton
  url={shareUrl}
  hashtag="#ElectricidadBogalo"
>
  <FacebookIcon size={40} round />
</FacebookShareButton>


  {/* Twitter */}
  <TwitterShareButton
    url={shareUrl}
    title={`Desde Electricidad Bógalo te contamos: ${shareTitle} ⚡ Descúbrelo aquí 👇`}
    hashtags={["ElectricidadBogalo", "EnergiaSolar", "Autoconsumo"]}
  >
    <TwitterIcon size={40} round />
  </TwitterShareButton>

  {/* LinkedIn */}
  <LinkedinShareButton
    url={shareUrl}
    title={`Desde Electricidad Bógalo te contamos: ${shareTitle}`}
    summary={`Desde Electricidad Bógalo te compartimos: ${shareTitle} ⚡ ¡No te lo pierdas!`}
    source="Electricidad Bógalo"
  >
    <LinkedinIcon size={40} round />
  </LinkedinShareButton>

  {/* WhatsApp */}
  <WhatsappShareButton
    url={shareUrl}
    title={`Desde Electricidad Bógalo te contamos: ${shareTitle} ⚡ Descúbrelo aquí 👇`}
    separator="\n\n"
  >
    <WhatsappIcon size={40} round />
  </WhatsappShareButton>

  {/* Copiar enlace */}
  <button
    onClick={() => {
      navigator.clipboard.writeText(
        `Desde Electricidad Bógalo te contamos: ${shareTitle} ⚡\n\nDescúbrelo aquí 👇\n${shareUrl}`
      );
      toast.success('Enlace al blog copiado ✅');
    }}
    className="bg-white text-gray-800 p-2 rounded-full hover:opacity-80 transition"
    aria-label="Copiar enlace"
  >
    <FaLink size={24} />
  </button>
</div>

  </div>
</div>

            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-energy-blue">Artículos relacionados</h2>
              <p className="text-gray-600">
                Descubre más artículos sobre temas relacionados con las energías renovables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-energy-blue">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedPost.summary}
                      </p>
                      <Link 
                        to={`/blog/${relatedPost.id}`} 
                        className="text-energy-blue hover:text-energy-lightBlue font-medium flex items-center"
                      >
                        <span>Leer más</span>
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <ToastContainer position="top-center" autoClose={2000} />

      <Footer />
    </>
  );
};

export default BlogPost;
