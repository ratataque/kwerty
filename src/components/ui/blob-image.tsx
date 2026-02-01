"use client";

import Image from "next/image";

interface BlobImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlobImage({ src, alt, className = "" }: BlobImageProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        {/* Animated blob background */}
        <div className="absolute inset-0 animate-blob">
          <div
            className="w-full h-full bg-gradient-to-br from-ctp-green/20 via-ctp-blue/20 to-ctp-mauve/20"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              animation: "blob-morph 8s ease-in-out infinite",
            }}
          />
        </div>

        {/* Second blob layer for depth */}
        <div className="absolute inset-0 animate-blob animation-delay-2000">
          <div
            className="w-full h-full bg-gradient-to-tr from-ctp-blue/10 via-ctp-mauve/10 to-ctp-green/10"
            style={{
              borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
              animation: "blob-morph 10s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* Image container with blob mask */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: "blob-morph-subtle 12s ease-in-out infinite",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-30 blur-xl bg-gradient-to-br from-ctp-green via-ctp-blue to-ctp-mauve"
          style={{
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: "blob-morph 15s ease-in-out infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes blob-morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% {
            border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%;
          }
        }

        @keyframes blob-morph-subtle {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          33% {
            border-radius: 40% 60% 50% 50% / 50% 50% 60% 40%;
          }
          66% {
            border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%;
          }
        }

        .animate-blob {
          animation: blob-float 7s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes blob-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(5%, -5%) scale(1.02);
          }
          50% {
            transform: translate(-3%, 3%) scale(0.98);
          }
          75% {
            transform: translate(-5%, -3%) scale(1.01);
          }
        }
      `}</style>
    </div>
  );
}
