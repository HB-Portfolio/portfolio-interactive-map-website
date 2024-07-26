<template>
  <main class="bg-white p-10 flex flex-col items-center">
    <section
      class="auto-rows-fr mx-auto grid grid-row-4 grid-cols-1 sm:grid-cols-2 gap-10 max-w-7xl sm:mt-10 sm:mb-10 lg:grid-cols-4 lg:max-w-9xl transition-all ease-in duration-300"
    >
      <figure
        v-for="group in 4"
        :key="`group-${group}`"
        class="text-white p-0 flex flex-col justify-center items-center md:hover:scale-105 transition duration-150 ease-in max-w-72"
      >
        <a :href="linkForGroup(group)">
          <img
            :src="`/images/Group-${group}.png`"
            :alt="`Group ${group} image`"
          />
        </a>
      </figure>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    linkForGroup(group) {
      const links = [
        "best-restaurants",
        "shopping",
        "things-to-do",
        "coffee-shops",
      ];
      return "/" + links[group - 1];
    },
  },
};
</script>
