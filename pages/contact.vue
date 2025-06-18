<template>
  <div
    class="flex font-mono flex-col items-center justify-center min-h-screen bg-black text-white"
  >
    <div class="flex items-start">
      <p
        class="px-6 flex justify-start mb-12 text-white font-mono text-xs md:text-sm"
      >
        Contact Us:
        <a href="mailto:contact@whelm-interactive.com" class="underline">
          contact@whelm-interactive.com
        </a>
      </p>
    </div>

    <div v-if="!lastStep">
      <p class="font-mono text-xs">1 / 2</p>

      <label for="email">What is your email address?</label>
      <input
        id="email"
        ref="emailInput"
        v-model="email"
        type="email"
        name="email"
        class="text-3xl font-mono outline-none w-full placeholder:text-white/25 text-white bg-transparent border-b py-4"
        required
        placeholder="Email"
      />
      <div class="ml-2 mt-4 flex justify-end">
        <button
          class="font-mono w-min py-1.5 px-8 rounded-md bg-white text-black border border-white hover:rounded-3xl transition-all disabled:opacity-50 disabled:hover:rounded-md"
          type="submit"
          :disabled="!isValidEmail"
          @click="lastStep = true"
        >
          Send
        </button>
      </div>
    </div>

    <div v-if="lastStep" class="flex max-w-3xl px-6 flex-col w-full mx-auto">
      <p class="font-mono text-xs">2 / 2</p>
      <div>
        <label class="font-mono text-sm"> What is your inquiry? </label>
        <textarea
          v-model="input"
          rows="5"
          class="font-mono text-3xl outline-none w-full placeholder:text-white/25 text-white bg-transparent border-b py-4"
          placeholder="Share your inquiry"
        />
        <div class="flex items-center gap-2 justify-end mt-4">
          <button
            class="font-mono w-min py-1.5 px-8 rounded-md text-white border border-white"
            @click="lastStep = false"
          >
            Back
          </button>
          <button
            :disabled="input.length === 0"
            class="w-min font-mono flex items-center gap-2 py-1.5 px-8 rounded-md bg-white text-black border hover:rounded-3xl transition-all border-white disabled:opacity-50 disabled:hover:rounded-md"
          >
            <span> Submit </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const lastStep = ref(false);
const email = ref("");
const emailInput = ref<HTMLInputElement | null>(null);
const isValidEmail = ref(false);

const input = ref("");

watch(email, () => {
  if (emailInput.value) {
    isValidEmail.value = emailInput.value.validity.valid;
  }
});
</script>
