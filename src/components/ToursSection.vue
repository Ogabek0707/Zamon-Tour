<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Calendar, MapPin, Clock } from 'lucide-vue-next'
import { useTourStore } from '@/stores/tourStore'

const { t } = useI18n()
const store = useTourStore()

const visibleCount = ref(9)

const visibleTours = computed(() => {
  return store.tours.slice(0, visibleCount.value)
})

const hasMoreTours = computed(() => {
  return visibleCount.value < store.tours.length
})

const loadMore = () => {
  if (hasMoreTours.value) {
    visibleCount.value = store.tours.length
  } else {
    visibleCount.value = 9
  }
}
</script>

<template>
  <section id="tours" class="py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="text-primary font-semibold tracking-[0.2em] uppercase text-sm">{{ t('tours.subtitle') }}</span>
        <h2 class="text-4xl md:text-5xl font-bold mt-3 text-dark">{{ t('tours.title') }}</h2>
        <div class="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        <p class="mt-6 text-gray-500 max-w-2xl mx-auto">{{ t('tours.desc') }}</p>
      </div>

      <!-- Tours Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="tour in visibleTours" 
          :key="tour.id"
          class="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col"
        >
          <!-- Image Container with Hover Effect -->
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="tour.image" 
              :alt="tour.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <!-- Price Badge -->
            <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-sm">
              {{ tour.price }} {{ t('tours.from') }}
            </div>
            <!-- Overlay that appears on hover -->
            <div class="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          <!-- Content -->
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-center gap-2 text-gray-500 text-sm mb-3">
              <MapPin class="w-4 h-4 text-primary" />
              <span class="font-medium">{{ t(`tours_data.t${tour.id}.location`) }}</span>
            </div>
            
            <h3 class="text-2xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">
              {{ t(`tours_data.t${tour.id}.title`) }}
            </h3>
            
            <div class="mt-auto">
              <div class="flex items-center justify-between text-sm text-gray-600 mb-6 border-b border-gray-100 pb-4">
                <div class="flex items-center gap-2">
                  <Clock class="w-4.5 h-4.5 text-primary" />
                  <span class="font-medium">{{ t(`tours_data.t${tour.id}.days`) }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Calendar class="w-4.5 h-4.5 text-primary" />
                  <span class="font-medium">{{ t(`tours_data.t${tour.id}.date`) }}</span>
                </div>
              </div>
              
              <!-- Action Button -->
              <router-link :to="`/tours/${tour.id}`" class="flex items-center justify-center w-full bg-gray-50 hover:bg-primary text-dark hover:text-white font-medium py-3.5 rounded-xl transition-all duration-300">
                {{ t('tours.details') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- View All Button -->
      <div class="text-center mt-16" v-if="store.tours.length > 6">
        <button 
          @click="loadMore"
          class="bg-dark hover:bg-gray-800 text-white px-10 py-4 rounded-full font-semibold transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform duration-300"
        >
          {{ hasMoreTours ? t('tours.load_more') : t('tours.close') }}
        </button>
      </div>
    </div>
  </section>
</template>
