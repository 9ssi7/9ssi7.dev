<script setup lang="ts">
import MainHeader from "~/components/header/MainHeader.vue";
import GlassEffect from "~/components/design/GlassEffect.vue";
</script>

<template>
  <div>
    <MainHeader />
    <GlassEffect />
    <slot />
  </div>
</template>
