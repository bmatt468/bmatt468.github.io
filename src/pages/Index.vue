<script setup>
import { onMounted } from 'vue';
import { initTheme } from '@/composables/theme.js';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

onMounted(() => {
  initTheme();
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="mx-auto flex grow max-w-3xl flex-col items-center justify-center py-16 px-4">
      <h1 class="pb-20 text-center text-6xl text-outerspace transition-colors dark:text-gray-100">
        Coming soon...
      </h1>
    </main>

    <Footer />
  </div>
</template>

<style>
body {
  @apply dark:bg-outerspace dark:text-gray-50;
}
</style>
