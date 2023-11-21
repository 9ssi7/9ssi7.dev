<script setup lang="ts">
import GlassEffect from "~/components/design/GlassEffect.vue";
import MainHeader from "~/components/header/MainHeader.vue";
</script>

<template>
  <div>
    <MainHeader />
    <ClientOnly>
      <GlassEffect />
    </ClientOnly>
    <slot />
  </div>
</template>
