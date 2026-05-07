<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { MapPin, Phone, Mail, Send } from 'lucide-vue-next'

const { t } = useI18n()

const form = ref({
  name: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = () => {
  isSubmitting.value = true
  setTimeout(() => {
    alert(t('contact.success'))
    isSubmitting.value = false
    form.value = { name: '', phone: '', message: '' }
  }, 1000)
}
</script>

<template>
  <section id="contacts" class="py-24 bg-dark text-white relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] pointer-events-none transform translate-x-1/3"></div>
    <div class="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/5 blur-[100px] pointer-events-none transform -translate-x-1/3"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        
        <!-- Left Side: Info -->
        <div class="lg:w-1/2">
          <span class="text-primary font-semibold tracking-[0.2em] uppercase text-sm">{{ t('contact.subtitle') }}</span>
          <h2 class="text-4xl md:text-6xl font-bold mt-4 mb-6">{{ t('contact.title') }}</h2>
          <p class="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            {{ t('contact.desc') }}
          </p>
          
          <div class="flex flex-col gap-8">
            <div class="flex items-start gap-5">
              <div class="bg-white/10 p-4 rounded-2xl text-primary backdrop-blur-sm border border-white/5">
                <MapPin class="w-7 h-7" />
              </div>
              <div>
                <h4 class="text-xl font-bold mb-1">{{ t('contact.address') }}</h4>
                <p class="text-gray-400">{{ t('contact.address_val') }}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-5">
              <div class="bg-white/10 p-4 rounded-2xl text-primary backdrop-blur-sm border border-white/5">
                <Phone class="w-7 h-7" />
              </div>
              <div>
                <h4 class="text-xl font-bold mb-1">{{ t('contact.phone') }}</h4>
                <p class="text-gray-400">+998 90 123 45 67</p>
                <p class="text-gray-400">+998 99 765 43 21</p>
              </div>
            </div>
            
            <div class="flex items-start gap-5">
              <div class="bg-white/10 p-4 rounded-2xl text-primary backdrop-blur-sm border border-white/5">
                <Mail class="w-7 h-7" />
              </div>
              <div>
                <h4 class="text-xl font-bold mb-1">{{ t('contact.email') }}</h4>
                <p class="text-gray-400">info@zamontour.uz</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Form -->
        <div class="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0">
          <div class="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-2xl">
            <h3 class="text-3xl font-bold mb-8 text-white">{{ t('contact.form_title') }}</h3>
            
            <form @submit.prevent="submitForm" class="flex flex-col gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">{{ t('contact.form_name') }}</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  :placeholder="t('contact.form_name_ph')"
                  class="w-full bg-dark/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-primary focus:bg-dark/80 transition-all text-lg placeholder-gray-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">{{ t('contact.form_phone') }}</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  required
                  placeholder="+998"
                  class="w-full bg-dark/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-primary focus:bg-dark/80 transition-all text-lg placeholder-gray-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">{{ t('contact.form_msg') }}</label>
                <textarea 
                  v-model="form.message"
                  rows="3"
                  :placeholder="t('contact.form_msg_ph')"
                  class="w-full bg-dark/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-primary focus:bg-dark/80 transition-all text-lg placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-primary hover:bg-primary-light text-dark font-bold text-lg py-5 rounded-2xl transition-all mt-4 flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(0,180,216,0.2)] hover:shadow-[0_10px_20px_rgba(0,180,216,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">{{ t('contact.submit') }}</span>
                <span v-else class="flex items-center gap-2">
                  <div class="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></div> {{ t('detail.loading') }}
                </span>
                <Send v-if="!isSubmitting" class="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
