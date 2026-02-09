<template>
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300">
    <!-- Decorative Background Shapes -->
    <div class="decorative-shape shape-green"></div>
    <div class="decorative-shape shape-orange-wave"></div>
    <div class="decorative-shape shape-orange-blob"></div>

    <!-- Main Container -->
    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- Logo Header -->
      <header class="pt-8 pb-4 px-4 flex justify-center animate-fade-in">
        <div class="bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-3 hover:shadow-xl transition-shadow duration-300">
          <div class="bg-blue-600 rounded-full p-2 flex items-center justify-center">
            <img
              src="./assets/logo.png"
              alt="Taofeek Consulting Logo"
              class="h-5 w-5 object-contain invert"
            />
          </div>
          <span class="font-semibold text-gray-900 text-lg">Taofeek Consulting</span>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 flex items-center justify-center px-4 py-12">
        <div class="text-center max-w-3xl mx-auto">
          <!-- Thumbs Up Emoji with Animation -->
          <div class="text-7xl mb-6 animate-bounce-slow">
            👍
          </div>

          <!-- Heading Text -->
          <p class="text-gray-700 text-sm font-medium tracking-wider mb-4 animate-fade-in-up" style="animation-delay: 0.2s">
            WE'RE STILL
          </p>

          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-600 mb-6 leading-tight animate-fade-in-up" style="animation-delay: 0.3s">
            Cooking Our Website.
          </h1>

          <p class="text-gray-600 text-base md:text-lg mb-4 animate-fade-in-up" style="animation-delay: 0.4s">
            We are going to launch our website Very Soon.
          </p>

          <p class="text-gray-600 text-base md:text-lg mb-10 animate-fade-in-up" style="animation-delay: 0.5s">
            Stay Tune.
          </p>

          <!-- Notify Me Button -->
          <a
            href="mailto:info@taofeekconsulting.com"
            class="inline-flex items-center gap-4 bg-gray-900 text-white pl-3 pr-6 py-3 rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 group animate-fade-in-up"
            style="animation-delay: 0.6s"
          >
            <div class="bg-white rounded-full p-3 flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="font-semibold text-lg">Notify Me</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </main>

      <!-- Footer with Social Icons and Copyright -->
      <footer class="pb-8 px-4 animate-fade-in" style="animation-delay: 0.7s">
        <div class="flex flex-col items-center gap-6">
          <!-- Social Icons Container -->
          <div class="bg-white rounded-full px-6 py-4 shadow-lg flex items-center gap-5">
            <!-- LinkedIn Icon (Active) -->
            <a
              href="https://www.linkedin.com/in/taofeek/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-800 hover:text-blue-600 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <!-- Instagram Icon (Disabled) -->
            <div
              class="text-gray-300 cursor-not-allowed"
              aria-label="Instagram (Coming Soon)"
              title="Coming Soon"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>

          <!-- Copyright -->
          <p class="text-gray-600 text-sm">
            &copy; {{ currentYear }} Taofeek Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Decorative Shapes */
.decorative-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
}

.shape-green {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #86efac 0%, #4ade80 100%);
  bottom: 25%;
  left: 8%;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-orange-wave {
  width: 140px;
  height: 80px;
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  top: 35%;
  right: 10%;
  border-radius: 50% 50% 60% 40% / 70% 70% 30% 30%;
  animation: float 7s ease-in-out infinite;
  animation-delay: 1s;
}

.shape-orange-blob {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  bottom: 5%;
  right: 5%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: float 8s ease-in-out infinite;
  animation-delay: 2s;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
  animation-fill-mode: both;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .shape-green {
    width: 80px;
    height: 80px;
    left: 5%;
    bottom: 20%;
  }

  .shape-orange-wave {
    width: 100px;
    height: 60px;
    right: 5%;
  }

  .shape-orange-blob {
    width: 120px;
    height: 120px;
    bottom: 3%;
    right: 3%;
  }
}
</style>
