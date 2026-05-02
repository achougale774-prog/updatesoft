"use client"

import React, { useCallback } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, CheckCircle2, Download, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/whatsapp-button'
import Link from 'next/link'

export default function MobileSoftwarePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false }, [Autoplay({ delay: 3000 })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const screenshots = [
    { id: 1, title: "Milk Collection", desc: "Easy milk collection with FAT/SNF calculation", color: "bg-blue-500" },
    { id: 2, title: "Farmer Payment", desc: "Automated payment and billing for farmers", color: "bg-green-500" },
    { id: 3, title: "Reporting", desc: "Detailed PDF reports and print receipts", color: "bg-purple-500" },
    { id: 4, title: "Customer Management", desc: "Add and manage customer details easily", color: "bg-orange-500" },
    { id: 5, title: "Vehicle Routing", desc: "Track collection vehicles efficiently", color: "bg-teal-500" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#1E94A4]/10 to-white dark:from-zinc-900 dark:to-black">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E94A4]/10 text-[#1E94A4] font-bold mb-6">
              <Smartphone className="w-4 h-4" /> Sankalan App
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-gray-900 dark:text-white">
              Dairy Software for Mobile
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-serif leading-relaxed mb-8">
              Complete mobile app for Milk Delivery, Milk Sale Purchase with FAT/SNF multiple rate charts. 
              Manage farmers, customers, and payments directly from your smartphone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/schedule-demo">
                <Button size="lg" className="bg-[#1E94A4] hover:bg-[#0B7989] text-white px-8 font-bold">
                  Get Free Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#1E94A4] text-[#1E94A4] font-bold">
                  <Download className="w-4 h-4 mr-2" /> Download App
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 overflow-hidden bg-slate-50 dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 dark:text-white mb-6">
              App Gallery & Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-serif">
              Explore the clean, intuitive, and powerful interface of the Sankalan Mobile App.
            </p>
          </div>

          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 md:gap-8 cursor-grab active:cursor-grabbing pb-12 pt-4">
                {screenshots.map((screen) => (
                  <div key={screen.id} className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                    <div className="relative mx-auto w-full max-w-[300px] aspect-[9/19] rounded-[2.5rem] border-[12px] border-black bg-black shadow-2xl dark:border-zinc-800 dark:bg-zinc-800 group hover:-translate-y-2 transition-transform duration-300">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black dark:bg-zinc-800 rounded-b-2xl z-20"></div>
                      
                      {/* Screen Content Mockup */}
                      <div className={`relative h-full w-full rounded-[1.8rem] overflow-hidden ${screen.color} flex flex-col items-center justify-center p-6 text-white text-center shadow-inner`}>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/30"></div>
                        <div className="relative z-10 flex flex-col items-center mt-8">
                          <div className="bg-white/20 p-4 rounded-2xl mb-6 backdrop-blur-sm">
                            <Smartphone className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{screen.title}</h3>
                          <p className="text-white/90 text-sm leading-relaxed px-2 font-serif">{screen.desc}</p>
                        </div>
                        
                        {/* Fake bottom navigation bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/20 backdrop-blur-md flex items-center justify-around px-4">
                           <div className="w-8 h-8 rounded-full bg-white/30"></div>
                           <div className="w-8 h-8 rounded-full bg-white/30"></div>
                           <div className="w-8 h-8 rounded-full bg-white/30"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={scrollPrev} className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 z-10 text-gray-800 dark:text-white border border-gray-100 dark:border-zinc-700">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 z-10 text-gray-800 dark:text-white border border-gray-100 dark:border-zinc-700">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Features List */}
        <section className="py-24 px-4 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-sans font-bold text-center mb-12">Core Capabilities</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Bulk Milk Collection (AMCU/DPMCU)",
                "FAT/SNF based Rate Charts",
                "Instant Farmer Billing via SMS/WhatsApp",
                "Milk Sale & Purchase Tracking",
                "Bluetooth Weighing Scale Integration",
                "Multilingual Support (English, Marathi, etc.)",
                "Advance & Deduction Management",
                "Cloud Backup & Security"
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-zinc-900 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="font-serif font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1E94A4] to-[#0B7989] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6">Ready to Digitalize Your Dairy?</h2>
            <p className="text-xl opacity-90 mb-8 font-serif">Join thousands of farmers and dairy owners using Sankalan Mobile App.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button size="lg" className="bg-white text-[#1E94A4] hover:bg-gray-50 px-8 font-bold">Book a Demo</Button>
              </Link>
              <WhatsAppButton className="w-fit mx-auto sm:mx-0" productName="Sankalan Mobile App" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
