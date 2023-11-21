<script setup lang="ts">
type Service = {
  title: string;
  icon: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "",
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "",
  },
  {
    title: "SEO Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "",
  },
];
</script>

<template>
  <div class="container">
    <div class="flex flex-wrap items-center">
      <div class="lg:w-2/4 text-center mx-auto">
        <h6 class="text-4xl">
          <span
            class="bg-gradient-to-r from-fuchsia-500 to-teal-500 bg-clip-text text-transparent"
            >Serverices</span
          >
        </h6>
        <h3>Services provide for you</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4"
        v-for="(service, idx) in [
          ...services,
          ...services,
          ...services,
          ...services,
        ]"
        :key="idx"
      >
        <div
          class="relative flex items-start rounded-lg dark:bg-white/10 border-white dark:border-slate-950 bg-white/10 p-6 transition duration-300 ease-linear backdrop-saturate-180 backdrop-blur-lg"
        >
          <div class="flex-auto pl-5">
            <h5 class="text-lg text-black dark:text-white">
              {{ service.title }}
            </h5>
            <p>
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
