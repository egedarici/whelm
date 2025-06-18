<template>
  <div class="relative overflow-hidden bg-black w-full">
    <div
      ref="marquee"
      class="flex gap-8 text-gray-300 uppercase tracking-widest text-xl whitespace-nowrap"
    >
      <span v-for="i in 20" :key="i">· ON SALE NOW</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const marquee = ref(null)

onMounted(() => {
  gsap.to(marquee.value, {
    xPercent: -50,
    repeat: -1,
    duration: 15,
    ease: 'linear',
  })
})
</script>
