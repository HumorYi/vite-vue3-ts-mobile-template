<template>
  <div
    id="app-container"
    :class="{
      desktop: isDesktop,
      mobile: isMobile,
      'platform-safe-area': $route.meta.safeArea !== false,
      'platform-safe-area-v': $route.meta.safeAreaV === true,
      'platform-safe-area-h': $route.meta.safeAreaH === true
    }"
  >
    <router-view />
  </div>
</template>

<script setup lang="ts" name="App">
import { isDesktop, isMobile } from 'vue-device-detect'
</script>

<style lang="scss" scoped></style>
