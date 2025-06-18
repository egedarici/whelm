<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1">
      <VideoBackground
        v-for="(event, index) in events"
        :key="index"
        :title="event.title"
        :video-src="event.videoSrc"
        :sub-title="event.subTitle"
        :is-active="true"
        :sub-title-second="event.subTitleSecond"
        @mouseenter="showCursor = true"
        @mouseleave="showCursor = false"
        @mousemove="updateCursor"
        @click="() => goToEvent(event)"
      />
    </main>
    <AppFooter />

    <div
      v-if="showCursor"
      :style="cursorStyle"
      class="flex fixed w-12 h-12 justify-center items-center text-black rounded-full border-2 border-white pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999] bg-white"
    >
      <span class="text-xs font-mono">View</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
function goToEvent(event): void {
  router.push({ name: "event-id", params: { id: event.id } });
}
const video1Url = new URL("@/assets/videos/video1.mp4", import.meta.url).href;
const video2Url = new URL("@/assets/videos/video2.mp4", import.meta.url).href;

const events = ref([
  {
    id: 1,
    title: "Sample Event",
    videoSrc: video1Url,
    subTitle: "Sample Subtitle",
    subTitleSecond: "Sample Subtitle Second",
  },
  {
    id: 2,
    title: "Another Event",
    videoSrc: video2Url,
    subTitle: "Another Subtitle",
    subTitleSecond: "Another Subtitle Second",
  },
  {
    id: 3,
    title: "Third Event",
    videoSrc: video1Url,
    subTitle: "Third Subtitle",
    subTitleSecond: "Third Subtitle Second",
  },
  {
    id: 4,
    title: "Fourth Event",
    videoSrc: video2Url,
    subTitle: "Fourth Subtitle",
    subTitleSecond: "Fourth Subtitle Second",
  },
  {
    id: 5,
    title: "Fifth Event",
    videoSrc: video1Url,
    subTitle: "Fifth Subtitle",
    subTitleSecond: "Fifth Subtitle Second",
  },
]);

const showCursor = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);

function updateCursor(e): void {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}

const cursorStyle = computed(() => ({
  top: `${mouseY.value}px`,
  left: `${mouseX.value}px`,
}));
</script>
