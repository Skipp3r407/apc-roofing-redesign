"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { galleryItems } from "@/lib/content";

export function GallerySection() {
  return (
    <AnimatedSection id="gallery" className="scroll-mt-24 py-16 sm:py-20" slide="left">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Gallery</h2>
          <p className="mt-3 text-zinc-400">
            Recent work—shingle, metal, tile, TPO, and more. Hover for a closer look.
          </p>
        </div>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.04 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10"
            >
              <div className="group relative">
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={800}
                  height={600}
                  className="w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 text-xs text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
