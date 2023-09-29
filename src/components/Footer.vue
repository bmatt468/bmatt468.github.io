<script setup>
import { computed } from 'vue';

const lastDeploymentTime = computed(() => {
  const dateObject = new Date(import.meta.env.VITE_LAST_DEPLOYMENT * 1000);
  const [year, time] = dateObject.toISOString().split('T');
  const [cleanTime] = time.split('.');

  return `${year} ${cleanTime}`;
});
const deployedCommit = import.meta.env.VITE_CURRENT_COMMIT;
const deploymentLink = `https://github.com/bmatt468/bmatt468.github.io/commits/${deployedCommit}`;
</script>

<template>
  <footer class="p-4">
    <div class="flex">
      <div class="grow p-1">
        &copy; {{ new Date().getFullYear() }} Benjamin R. Matthews.
      </div>

      <div class="p-1">
        Last deployment: {{ lastDeploymentTime }}
      </div>

      <div class="p-1">
        <a
          :href="deploymentLink"
          target="_blank"
        >
          Current hash: {{ deployedCommit.substring(0, 7) }}
        </a>
      </div>
    </div>
  </footer>
</template>
