<template>
  <header
    class="flex justify-between items-center align-middle py-8 md:py-[26px] px-8 z-50"
  >
    <a href="/">
      <h1
        class="text-3xl md:text-5xl ml-2 hover:scale-110 hover:text-sky-400 transition duration-150 ease-in"
      >
        INGLEWOOD
      </h1>
    </a>

    <button
      @click="openNav"
      class="sm:hover:scale-125 group transition duration-150 ease-in"
    >
      <svg
        class="mr-2 mt-1"
        width="30"
        height="24"
        viewBox="0 0 30 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="sm:group-hover:stroke-sky-400 stroke-current transition duration-150 ease-in"
          d="M13.1665 21.1667H27.8332M2.1665 12H27.8332M13.1665 2.83337H27.8332"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <aside
      v-show="sideNavOpen"
      class="fixed font-mono inset-0 bg-transparent z-10 transition-opacity duration-500"
      :class="{ 'opacity-0 pointer-events-none': !sideNavOpen }"
    >
      <section
        class="fixed top-0 right-0 bg-white shadow-2xl text-gray-900 h-full flex flex-col justify-center items-center overflow-hidden duration-500 font-bold z-20"
        :class="{
          'translate-x-0': sideNavOpen,
          'translate-x-full': !sideNavOpen,
          'w-full md:w-3/5 lg:w-2/5': true,
        }"
      >
        <button
          href="javascript:void(0)"
          @click="exitNav"
          class="text-4xl absolute top-0 right-0 mr-10 mt-8 sm:hover:scale-125 transition duration-150 ease-in sm:hover:text-sky-400"
        >
          &times;
        </button>

        <ul
          class="text-lg sm:text-xl mt-2 mr-10 ml-10 text-center font-mono font-normal gap-4"
        >
          <li class="text-3xl font-mono font-semibold">Welcome</li>
          <li
            class="mb-6 mt-6 text-2xl text-white sm:hover:scale-110 transition duration-150 ease-in"
          >
            <a href="/" class="p-4 bg-sky-400">To Inglewood</a>
          </li>
          <li
            class="p-4 sm:hover:scale-110 transition duration-150 ease-in sm:hover:text-sky-400 sm:hover:underline underline-offset-8 decoration-2"
          >
            <a href="/#Interactive-Map">Interactive Map</a>
          </li>
          <li
            class="p-4 sm:hover:scale-110 transition duration-150 ease-in sm:hover:text-sky-400 sm:hover:underline underline-offset-8 decoration-2"
          >
            <a href="/best-restaurants">Restaurants</a>
          </li>
          <li
            class="p-4 sm:hover:scale-110 transition duration-150 ease-in sm:hover:text-sky-400 sm:hover:underline underline-offset-8 decoration-2"
          >
            <a href="/shopping">Shopping</a>
          </li>
          <li
            class="p-4 sm:hover:scale-110 transition duration-150 ease-in sm:hover:text-sky-400 sm:hover:underline underline-offset-8 decoration-2"
          >
            <a href="/things-to-do">Things To Do</a>
          </li>
          <li
            class="p-4 sm:hover:scale-110 transition duration-150 ease-in sm:hover:text-sky-400 sm:hover:underline underline-offset-8 decoration-2"
          >
            <a href="/coffee-shops">Coffee Shops</a>
          </li>
          <li
            class="p-4 sm:hover:scale-110 transition duration-150 ease-in sm:hover:text-sky-400 sm:hover:underline underline-offset-8 decoration-2"
          >
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </section>
    </aside>
  </header>
</template>

<script setup>
import { ref } from "vue";

const sideNavOpen = ref(false);

const openNav = () => {
  sideNavOpen.value = true;
};

const exitNav = () => {
  sideNavOpen.value = false;
};
</script>
