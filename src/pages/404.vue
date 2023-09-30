<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="mx-auto flex grow max-w-3xl flex-col items-center justify-center py-16 px-4">
      <h1 class="pb-20 text-center text-2xl text-outerspace transition-colors dark:text-gray-100">
        404 | Not Found
      </h1>
    </main>

    <Footer />
  </div>
</template>
