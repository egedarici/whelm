<template>
  <div
    ref="pageContainerRef"
    class="min-h-[300vh] text-sm overflow-x-hidden relative"
  >
    <section
      ref="firstSectionRef"
      class="fixed inset-0 flex justify-center items-center text-center z-20"
      :style="{ opacity: 1 - scrollProgress }"
    >
      <VideoBackground
        :id="'video-bg-first'"
        :video-src="video1Url"
        :is-active="scrollProgress < 0.7"
        class="w-full h-screen"
      />
    </section>

    <section
      ref="secondSectionRef"
      class="fixed inset-0 flex justify-center items-center text-center z-10"
      :style="{ opacity: scrollProgress }"
    >
      <VideoBackground
        :id="'video-bg-second'"
        :video-src="video2Url"
        :is-active="scrollProgress >= 0.3"
        class="w-full h-screen"
      />
    </section>

    <!-- Section 3 -->
    <section
      ref="textSectionRef"
      class="h-screen relative z-30 bg-black text-white mt-[200vh] opacity-100 flex items-center"
    >
      <h2 class="text-xl lg:text-4xl w-1/2 uppercase">
        Text content goes here. This is a placeholder for the text section that
        will appear after the video sections. It can contain any information you
        want to display to the user. You can also add more content or images as
        needed. This is a placeholder for the text section that will appear
        after the video sections. It can contain any information you want to
        display to the user. You can also add more content or images as needed.
      </h2>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pageContainerRef = ref(null);
const firstSectionRef = ref(null);
const secondSectionRef = ref(null);

const video1Url = new URL("@/assets/videos/video1.mp4", import.meta.url).href;
const video2Url = new URL("@/assets/videos/video2.mp4", import.meta.url).href;

const scrollProgress = ref(0);

onMounted(() => {
  gsap.to(scrollProgress, {
    value: 1,
    ease: "none",
    scrollTrigger: {
      trigger: pageContainerRef.value,
      start: "top top",
      end: `+=${window.innerHeight}`,
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.value = self.progress;
      },
    },
  });
});
</script>
