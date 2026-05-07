<script setup>
import HeroSlider from '@/components/HeroSlider.vue'
import ToursSection from '@/components/ToursSection.vue'
import VisaSection from '@/components/VisaSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <div>
    <!-- Dynamic Hero Slider replacing static section -->
    <HeroSlider />

    <!-- Tours Section -->
    <ToursSection />

    <!-- Visa Support Section -->
    <VisaSection />

    <!-- Contact / Ariza qoldirish Section -->
    <ContactSection />
  </div>
</template>
