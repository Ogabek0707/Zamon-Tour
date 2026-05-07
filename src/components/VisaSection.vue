<script setup>
import { ref, computed } from 'vue'
import { CheckCircle2 } from 'lucide-vue-next'

import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const visaImages = [
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Long_Island_City_New_York_May_2015_panorama_3.jpg/800px-Long_Island_City_New_York_May_2015_panorama_3.jpg',
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop'
]

const visibleCount = ref(3)

const visibleVisas = computed(() => {
  return tm('visas_data').slice(0, visibleCount.value)
})

const hasMoreVisas = computed(() => {
  return visibleCount.value < tm('visas_data').length
})

const loadMore = () => {
  if (hasMoreVisas.value) {
    visibleCount.value += 3
  } else {
    visibleCount.value = 3
  }
}
</script>

<template>
  <section id="visa" class="py-24 bg-white relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <span class="text-primary font-semibold tracking-[0.2em] uppercase text-sm">{{ t('visa.subtitle') }}</span>
        <h2 class="text-4xl md:text-5xl font-bold mt-3 text-dark">{{ t('visa.title') }}</h2>
        <div class="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        <p class="mt-6 text-gray-500 max-w-2xl mx-auto">{{ t('visa.desc') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="(visa, index) in visibleVisas" 
          :key="index"
          class="bg-white rounded-[2rem] p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          <div class="bg-gray-50/50 rounded-[1.75rem] p-7 h-full flex flex-col">
            <!-- Header -->
            <div class="flex justify-between items-center mb-6">
              <div class="flex items-center gap-4">
                <span class="text-5xl">{{ visa.flag }}</span>
                <h3 class="text-2xl font-bold text-dark">{{ visa.country }}</h3>
              </div>
            </div>

            <!-- Image representation -->
            <div class="w-full h-40 rounded-2xl overflow-hidden mb-8 relative">
              <img :src="visaImages[index]" :alt="visa.country" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div class="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white font-bold text-3xl drop-shadow-lg tracking-wide">{{ visa.price }} {{ t('tours.from') }}</span>
              </div>
            </div>

            <!-- Features list -->
            <ul class="flex flex-col gap-4 mb-8 flex-grow">
              <li v-for="(feature, idx) in visa.features" :key="idx" class="flex items-center gap-3 text-gray-700 font-medium">
                <div class="bg-primary/10 p-1 rounded-full"><CheckCircle2 class="w-4 h-4 text-primary flex-shrink-0" /></div>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- Action -->
            <a href="#contacts" class="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300 flex justify-center items-center">
              {{ t('visa.apply') }}
            </a>
          </div>
        </div>
      </div>
      
      <!-- View All Button for Visas -->
      <div class="text-center mt-16" v-if="tm('visas_data').length > 3">
        <button 
          @click="loadMore"
          class="bg-dark hover:bg-gray-800 text-white px-10 py-4 rounded-full font-semibold transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform duration-300"
        >
          {{ hasMoreVisas ? t('visa.load_more') : t('visa.close') }}
        </button>
      </div>
    </div>
  </section>
</template>
