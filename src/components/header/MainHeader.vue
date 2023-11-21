<script setup lang="ts">
import useHeaderFixed, { type Options } from "~/composables/useHeaderFixed";

type Props = {
  withTopHeader?: boolean;
  defaultFixed?: boolean;
  zIndex?: string;
};

const withoutTopHeaderOptions: Options = {
  checkPoint: 0,
  fixedCheckPoint: 0,
};

const withTopHeaderOptions: Options = {
  checkPoint: 3,
  fixedCheckPoint: 3,
};

const props = withDefaults(defineProps<Props>(), {
  withTopHeader: false,
  defaultFixed: true,
  zIndex: "z-30",
});

const isFixed = useHeaderFixed(
  props.withTopHeader ? withTopHeaderOptions : withoutTopHeaderOptions,
  props.defaultFixed
);
</script>

<template>
  <header
    class="transition-top fixed left-0 h-16 w-full flex justify-between border-b border-gray-200 backdrop-blur-md duration-200 dark:border-gray-800"
    :class="[
      {
        'top-0': isFixed,
        'top-8': !isFixed,
      },
      props.zIndex,
    ]"
  >
    <div class="flex items-center">9ssi7</div>
    <div class=""></div>
    <div class="flex items-center justify-end">Toggle button</div>
  </header>
  <div class="h-16" />
</template>
