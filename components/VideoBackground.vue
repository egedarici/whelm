// src/components/VideoBackground.vue
<template>
  <div class="h-[100vh] w-screen overflow-hidden relative -mt-[1px]">
    <div class="w-full h-full">
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black/25 flex flex-col items-center text-white justify-center gap-2 sm:gap-3 p-4 md:p-6"
      >
        <div class="flex flex-col items-center">
          <h1
            v-if="title"
            class="font-mono uppercase text-3xl sm:text-5xl !leading-tight lg:text-5xl xl:text-6xl text-center"
          >
            {{ title }}
          </h1>

          <div
            class="mt-6 font-mono flex max-sm:flex-col items-center justify-between gap-2 w-full"
          >
            <p class="text-[10px] md:text-xs">{{ subTitle }}</p>
            <p class="text-[10px] md:text-xs">{{ subTitleSecond }}</p>
          </div>
        </div>
      </div>
      <video
        ref="videoPlayer"
        :src="videoSrc"
        class="w-full h-full object-cover"
        loop
        muted
        playsinline
        preload="metadata"
        :poster="posterImage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  videoSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "WHELM Interactive",
  },
  subTitle: {
    type: String,
    default: "Sub title",
  },
  subTitleSecond: {
    type: String,
    default: "Sub title second",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  posterImage: {
    type: String,
    default: null,
  },
});

const videoPlayer = ref(null);

watch(
  () => props.isActive,
  (newValue) => {
    if (videoPlayer.value) {
      if (newValue) {
        videoPlayer.value.play();
      } else {
        videoPlayer.value.pause();
      }
    }
  }
);

onMounted(() => {
  if (props.isActive && videoPlayer.value) {
    videoPlayer.value.play();
  }
});

onUnmounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.pause();
  }
});
</script>
