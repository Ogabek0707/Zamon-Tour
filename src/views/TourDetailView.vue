<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTourStore } from '@/stores/tourStore'
import { useI18n } from 'vue-i18n'
import { MapPin, Clock, Calendar, CheckCircle2, XCircle, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-vue-next'

const { t, tm } = useI18n()
const route = useRoute()
const store = useTourStore()

const tour = computed(() => store.getTourById(route.params.id))
const activeDay = ref(1)
const showModal = ref(false)

const form = ref({
  name: '',
  phone: ''
})

const submitForm = () => {
  // Mock form submission
  alert(t('contact.success'))
  showModal.value = false
  form.value = { name: '', phone: '' }
}

onMounted(() => {
  // Ensure we start at top of page (though router scrollBehavior also handles this)
  window.scrollTo(0, 0)
})
</script>

<template>
  <div v-if="tour" class="pb-24">
    <!-- Hero Header (Fixed overlapping issue with pt-32) -->
    <section class="relative h-[70vh] min-h-[500px] flex items-end pb-16 pt-32 mt-[-80px]">
      <div class="absolute inset-0 z-0">
        <img :src="tour.image" :alt="tour.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10 text-white">
        <div class="flex items-center gap-3 mb-6">
          <span class="bg-primary/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold shadow-lg tracking-wide uppercase">{{ t('detail.premium') }}</span>
          <span class="flex items-center gap-1.5 text-gray-200 text-sm bg-dark/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            <MapPin class="w-4 h-4 text-primary-light" /> {{ t(`tours_data.t${tour.id}.location`) }}
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-xl">{{ t(`tours_data.t${tour.id}.title`) }}</h1>
        <div class="flex flex-wrap gap-8 text-lg text-gray-200 bg-dark/30 backdrop-blur-sm w-fit px-6 py-3 rounded-2xl border border-white/10">
          <div class="flex items-center gap-2.5"><Clock class="w-6 h-6 text-primary" /> <span class="font-medium">{{ t(`tours_data.t${tour.id}.days`) }}</span></div>
          <div class="w-px h-6 bg-white/20"></div>
          <div class="flex items-center gap-2.5"><Calendar class="w-6 h-6 text-primary" /> <span class="font-medium">{{ t(`tours_data.t${tour.id}.date`) }}</span></div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4 mt-16">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Content -->
        <div class="lg:w-2/3">
          <!-- Description -->
          <div class="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-8">
            <h2 class="text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary rounded-full"></span> {{ t('detail.about') }}
            </h2>
            <p class="text-gray-600 leading-relaxed text-lg">{{ t(`tours_data.t${tour.id}.description`) }}</p>
          </div>

          <!-- Included / Excluded -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <div class="bg-green-100 p-2 rounded-xl"><CheckCircle2 class="text-green-600 w-6 h-6" /></div> {{ t('detail.includes') }}
              </h3>
              <ul class="flex flex-col gap-4">
                <li v-for="(item, i) in tm(`tours_data.t${tour.id}.includes`)" :key="i" class="flex items-start gap-3 text-gray-700 font-medium">
                  <div class="mt-2 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-red-50 to-red-100/50 rounded-3xl p-8 border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <div class="bg-red-100 p-2 rounded-xl"><XCircle class="text-red-500 w-6 h-6" /></div> {{ t('detail.excludes') }}
              </h3>
              <ul class="flex flex-col gap-4">
                <li v-for="(item, i) in tm(`tours_data.t${tour.id}.excludes`)" :key="i" class="flex items-start gap-3 text-gray-700 font-medium">
                  <div class="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></div>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Itinerary -->
          <div class="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-8">
            <h2 class="text-3xl font-bold text-dark mb-8 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary rounded-full"></span> {{ t('detail.itinerary') }}
            </h2>
            <div class="flex flex-col gap-4">
              <div 
                v-for="(day, idx) in tm(`tours_data.t${tour.id}.itinerary`)" 
                :key="idx"
                class="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button 
                  @click="activeDay = activeDay === day.day ? null : day.day"
                  class="w-full flex items-center justify-between p-6 bg-gray-50/50 hover:bg-primary/5 transition-colors text-left"
                >
                  <div class="flex items-center gap-5">
                    <span class="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary font-bold text-lg border border-primary/20">
                      {{ day.day }}
                    </span>
                    <span class="font-bold text-xl text-dark">{{ day.title }}</span>
                  </div>
                  <div class="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                    <ChevronUp v-if="activeDay === day.day" class="text-primary w-5 h-5" />
                    <ChevronDown v-else class="text-gray-400 w-5 h-5" />
                  </div>
                </button>
                <div 
                  v-show="activeDay === day.day" 
                  class="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-100 text-lg"
                >
                  {{ day.desc }}
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery -->
          <div class="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <h2 class="text-3xl font-bold text-dark mb-8 flex items-center gap-3">
              <span class="w-8 h-1 bg-primary rounded-full"></span> {{ t('detail.gallery') }}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="(img, idx) in tour.gallery" :key="idx" class="rounded-2xl overflow-hidden h-56 group cursor-pointer border border-gray-100">
                <img :src="img" alt="Gallery image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>

        <!-- Right Sidebar (Sticky Booking Card) -->
        <div class="lg:w-1/3">
          <div class="sticky top-28 bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-gray-100">
            <div class="text-sm text-primary uppercase tracking-[0.2em] font-bold mb-3">{{ t('detail.price_title') }}</div>
            <div class="flex items-end gap-2 mb-8 border-b border-gray-100 pb-8">
              <span class="text-6xl font-extrabold text-dark">{{ tour.price }}</span>
              <span class="text-gray-500 font-medium mb-2">{{ t('detail.per_person') }}</span>
            </div>
            
            <div class="flex flex-col gap-5 mb-8">
              <div class="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div class="bg-white p-3 rounded-xl shadow-sm"><Clock class="text-primary w-6 h-6" /></div>
                <div>
                  <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-0.5">{{ t('detail.duration') }}</div>
                  <div class="font-bold text-lg text-dark">{{ t(`tours_data.t${tour.id}.days`) }}</div>
                </div>
              </div>
              <div class="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div class="bg-white p-3 rounded-xl shadow-sm"><Calendar class="text-primary w-6 h-6" /></div>
                <div>
                  <div class="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-0.5">{{ t('detail.date') }}</div>
                  <div class="font-bold text-lg text-dark">{{ t(`tours_data.t${tour.id}.date`) }}</div>
                </div>
              </div>
            </div>

            <button 
              @click="showModal = true"
              class="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-bold text-xl shadow-[0_10px_20px_rgba(0,180,216,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              {{ t('detail.apply') }}
            </button>
            <p class="text-center text-sm text-gray-400 mt-5 font-medium">{{ t('detail.apply_desc') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking Modal -->
    <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-dark/60 backdrop-blur-md transition-opacity" @click="showModal = false"></div>
      <div class="bg-white rounded-[2rem] w-full max-w-md relative z-10 overflow-hidden shadow-2xl transform transition-all scale-100">
        <button @click="showModal = false" class="absolute top-5 right-5 text-gray-400 hover:text-dark bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
          <XCircle class="w-6 h-6" />
        </button>
        
        <div class="p-10">
          <h3 class="text-3xl font-bold text-dark mb-3">{{ t('detail.book') }}</h3>
          <p class="text-gray-500 mb-8 font-medium">{{ t('detail.book_desc') }}</p>
          
          <form @submit.prevent="submitForm" class="flex flex-col gap-5">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">{{ t('contact.form_name') }}</label>
              <input 
                v-model="form.name" 
                type="text" 
                required 
                :placeholder="t('contact.form_name_ph')"
                class="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-lg"
              />
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">{{ t('contact.form_phone') }}</label>
              <input 
                v-model="form.phone" 
                type="tel" 
                required 
                placeholder="+998 90 123 45 67"
                class="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-lg"
              />
            </div>
            <button 
              type="submit" 
              class="w-full bg-dark hover:bg-gray-800 text-white py-5 rounded-xl font-bold text-lg mt-4 shadow-xl transition-all hover:-translate-y-1"
            >
              {{ t('contact.submit') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="h-screen flex items-center justify-center bg-gray-50">
    <div class="text-2xl text-gray-400 font-medium flex items-center gap-3">
      <div class="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      {{ t('detail.loading') }}
    </div>
  </div>
</template>
