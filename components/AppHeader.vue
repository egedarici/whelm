<template>
  <nav
    class="flex justify-between z-50 p-4 max-md:items-center fixed top-0 left-0 w-full"
  >
    <div>
      <img src="/logo.png" class="h-16 w-auto" />
    </div>
    <div class="max-md:hidden flex gap-2 max-md:items-center">
      <NuxtLink to="/">
        <button
          class="font-mono flex items-center gap-1.5 text-xs py-1.5 px-5 rounded-full bg-gray-700/50 hover:bg-gray-700 text-white border-gray-700 false"
        >
          {{ $t("home") }}
        </button>
      </NuxtLink>
      <NuxtLink to="/events">
        <button
          class="font-mono flex items-center gap-1.5 text-xs py-1.5 px-5 rounded-full bg-gray-700/50 hover:bg-gray-700 text-white border-gray-700 false"
        >
          {{ $t("events") }}
        </button>
      </NuxtLink>
      <NuxtLink to="/contact">
        <button
          class="font-mono flex items-center gap-1.5 text-xs py-1.5 px-5 rounded-full bg-white hover:bg-gray-700 hover:text-white border-gray-700"
        >
          {{ $t("contact") }}
          <Icon name="i-heroicons-arrow-right" class="h-4 w-4" />
        </button>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
