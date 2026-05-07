<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Slides information
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop', // Dubai
    titleKey: 'hero.slide1_title',
    subtitleKey: 'hero.slide1_sub'
  },
  {
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070&auto=format&fit=crop', // Istanbul
    titleKey: 'hero.slide2_title',
    subtitleKey: 'hero.slide2_sub'
  },
  {
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop', // Europe (Paris)
    titleKey: 'hero.slide3_title',
    subtitleKey: 'hero.slide3_sub'
  }
]

const currentSlide = ref(0)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Slider Backgrounds -->
    <div 
      v-for="(slide, index) in slides" 
      :key="index"
      class="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
      :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
    >
      <img 
        :src="slide.image" 
        alt="Travel Background" 
        class="w-full h-full object-cover"
      />
      <!-- Dark Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/80"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10 text-center text-white">
      <span class="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 mb-6 font-medium text-sm tracking-[0.2em] uppercase">
        Zamon Tour
      </span>
      
      <!-- Titles (we keep them in a wrapper to animate them too) -->
      <div class="min-h-[160px] flex flex-col justify-center items-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          {{ t(slides[currentSlide].titleKey) }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          {{ t(slides[currentSlide].subtitleKey) }}
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#tours" class="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-primary/40 transform hover:-translate-y-1">
          {{ t('hero.btn_more') }}
        </a>
        <a href="#contacts" class="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1">
          {{ t('contact.subtitle') }}
        </a>
      </div>
    </div>
    
    <!-- Dots indicator -->
    <div class="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-10">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentSlide === index ? 'bg-primary w-10' : 'bg-white/50 hover:bg-white'"
      ></button>
    </div>
  </section>
</template>
