<template>
  <div>
    <VideoBackground
      :video-src="videoSrc"
      :title="title"
      :sub-title="subTitle"
      :sub-title-second="subTitleSecond"
      :is-active="true"
      class="w-full h-screen"
    />
    <MarqueeText />
    <div
      class="flex flex-col items-center justify-center h-screen bg-black text-white"
    >
      <h1 class="text-4xl font-bold mb-2">{{ title }}</h1>
      <h2 class="text-2xl">{{ subTitle }}</h2>
      <h3 class="text-xl">{{ subTitleSecond }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  videoSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "WHELM Presents",
  },
  subTitle: {
    type: String,
    default: "2025",
  },
  subTitleSecond: {
    type: String,
    default: "Tours",
  },
});
</script>
