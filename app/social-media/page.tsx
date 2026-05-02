"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink } from "lucide-react"

export default function SocialMediaPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F5] to-white dark:from-zinc-950 dark:to-zinc-900">
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6" style={{ color: "var(--primary)" }}>
              Connect With Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 font-serif max-w-2xl mx-auto leading-relaxed">
              Choose your preferred platform to reach out. We are active across all major social networks and ready to assist you with any inquiries.
            </p>
          </div>

          {/* Grid of Socials */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* WhatsApp */}
            <a href="https://wa.me/919423039902?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20software%20solutions.%20Thank%20you%20for%20connecting%20with%20Winsoft." target="_blank" rel="noopener noreferrer" 
               className="group relative overflow-hidden bg-white dark:bg-zinc-950 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 p-8 flex items-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="bg-[#25D366] text-white p-4 rounded-xl shadow-lg shadow-[#25D366]/40 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div className="flex-1 z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
                <p className="text-gray-500 dark:text-zinc-400 font-serif">Chat with our sales and support team instantly for quick resolutions.</p>
              </div>
              <ExternalLink className="text-gray-300 group-hover:text-[#25D366] transition-colors z-10" />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/winsoft_kolhapur?igsh=NDdiZjR2YzVlM2l4" target="_blank" rel="noopener noreferrer" 
               className="group relative overflow-hidden bg-white dark:bg-zinc-950 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 p-8 flex items-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#dc2743]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-4 rounded-xl shadow-lg shadow-[#dc2743]/40 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className="flex-1 z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Instagram</h3>
                <p className="text-gray-500 dark:text-zinc-400 font-serif">See our latest updates, events, and behind-the-scenes moments.</p>
              </div>
              <ExternalLink className="text-gray-300 group-hover:text-[#dc2743] transition-colors z-10" />
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/winsoft" target="_blank" rel="noopener noreferrer" 
               className="group relative overflow-hidden bg-white dark:bg-zinc-950 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 p-8 flex items-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1877F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="bg-[#1877F2] text-white p-4 rounded-xl shadow-lg shadow-[#1877F2]/40 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div className="flex-1 z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Facebook</h3>
                <p className="text-gray-500 dark:text-zinc-400 font-serif">Join our community and stay updated with the latest company news.</p>
              </div>
              <ExternalLink className="text-gray-300 group-hover:text-[#1877F2] transition-colors z-10" />
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/company/winsoft" target="_blank" rel="noopener noreferrer" 
               className="group relative overflow-hidden bg-white dark:bg-zinc-950 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 p-8 flex items-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="bg-[#0A66C2] text-white p-4 rounded-xl shadow-lg shadow-[#0A66C2]/40 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className="flex-1 z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                <p className="text-gray-500 dark:text-zinc-400 font-serif">Connect with us for business inquiries and professional updates.</p>
              </div>
              <ExternalLink className="text-gray-300 group-hover:text-[#0A66C2] transition-colors z-10" />
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
