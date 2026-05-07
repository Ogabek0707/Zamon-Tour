<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Menu, X, Phone, Mail, Instagram, Send } from 'lucide-vue-next'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)

const languages = [
  { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]

const changeLanguage = (langCode) => {
  locale.value = langCode
  localStorage.setItem('user-locale', langCode)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
    
    <!-- Topbar (Optional, for contact info) -->
    <div class="bg-primary-dark text-white text-sm py-2 hidden md:block">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <a href="tel:+998991234567" class="flex items-center gap-2 hover:text-primary-light transition">
            <Phone class="w-4 h-4" /> +998 99 123 45 67
          </a>
          <a href="mailto:info@zamontour.uz" class="flex items-center gap-2 hover:text-primary-light transition">
            <Mail class="w-4 h-4" /> info@zamontour.uz
          </a>
        </div>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:text-primary-light transition"><Instagram class="w-4 h-4" /></a>
          <a href="#" class="hover:text-primary-light transition"><Send class="w-4 h-4" /></a>
        </div>
      </div>
    </div>

    <!-- Header / Navbar -->
    <header class="sticky top-0 z-50 glass-header">
      <div class="container mx-auto px-4 h-20 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <span class="text-2xl font-bold text-primary">ZAMON<span class="text-dark">TOUR</span></span>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 font-medium">
          <router-link to="/" class="hover:text-primary transition">{{ t('nav.home') }}</router-link>
          <a href="#about" class="hover:text-primary transition">{{ t('nav.about') }}</a>
          <a href="#tours" class="hover:text-primary transition">{{ t('nav.tours') }}</a>
          <a href="#contacts" class="hover:text-primary transition">{{ t('nav.contacts') }}</a>
        </nav>

        <!-- Language Selector & Actions -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Custom Language Select -->
          <div class="relative group">
            <button class="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-100 transition">
              <span class="text-lg">{{ languages.find(l => l.code === locale)?.flag }}</span>
              <span class="uppercase font-medium text-sm">{{ locale }}</span>
            </button>
            <!-- Dropdown -->
            <div class="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
              <div class="p-2 flex flex-col gap-1">
                <button 
                  v-for="lang in languages" 
                  :key="lang.code"
                  @click="changeLanguage(lang.code)"
                  class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition text-left"
                  :class="{ 'text-primary font-medium bg-primary/5': locale === lang.code }"
                >
                  <span class="text-lg">{{ lang.flag }}</span>
                  <span class="text-sm">{{ lang.name }}</span>
                </button>
              </div>
            </div>
          </div>

          <a href="#contacts" class="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-dark transition shadow-lg shadow-primary/30">
            {{ t('nav.contacts') }}
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button @click="toggleMenu" class="md:hidden p-2 text-gray-600">
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-show="isMenuOpen" class="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
        <div class="container mx-auto px-4 py-4 flex flex-col gap-4">
          <router-link to="/" @click="isMenuOpen = false" class="block py-2 text-lg font-medium">{{ t('nav.home') }}</router-link>
          <a href="#about" @click="isMenuOpen = false" class="block py-2 text-lg font-medium">{{ t('nav.about') }}</a>
          <a href="#tours" @click="isMenuOpen = false" class="block py-2 text-lg font-medium">{{ t('nav.tours') }}</a>
          
          <div class="h-px bg-gray-100 my-2"></div>
          
          <div class="flex gap-2">
            <button 
              v-for="lang in languages" 
              :key="lang.code"
              @click="changeLanguage(lang.code)"
              class="flex-1 flex justify-center items-center gap-2 py-3 border rounded-lg"
              :class="locale === lang.code ? 'border-primary text-primary bg-primary/5' : 'border-gray-200'"
            >
              <span class="text-xl">{{ lang.flag }}</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content (Router View) -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-gray-300 py-12 mt-auto">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-2xl font-bold text-white mb-4">ZAMON<span class="text-primary">TOUR</span></h3>
          <p class="text-sm text-gray-400 max-w-xs">
            {{ t('footer.desc') }}
          </p>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">{{ t('footer.links') }}</h4>
          <ul class="flex flex-col gap-2">
            <li><a href="#" class="hover:text-primary transition">{{ t('nav.home') }}</a></li>
            <li><a href="#about" class="hover:text-primary transition">{{ t('nav.about') }}</a></li>
            <li><a href="#tours" class="hover:text-primary transition">{{ t('nav.tours') }}</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">{{ t('footer.contact') }}</h4>
          <ul class="flex flex-col gap-3">
            <li class="flex items-center gap-3">
              <Phone class="w-5 h-5 text-primary" /> +998 99 123 45 67
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-5 h-5 text-primary" /> info@zamontour.uz
            </li>
          </ul>
        </div>
      </div>
      <div class="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} Zamon Tour. {{ t('footer.rights') }}
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
