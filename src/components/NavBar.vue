<script setup>
import { RouterLink, useRoute } from 'vue-router';
import menu from "@/assets/menu.png"
import logo from "@/assets/jobhub.jpeg"
// const isActiveLink = (routePath) => {
//     const route = useRoute();
//     return route.path === routePath;
// };
const isActiveLink = () => true;

</script>

<template>
    <nav class="bg border-b border-gray-300">
        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center">
                <!-- Logo -->
                <div class="flex h-full items-center mr-auto">
                    <a href="/" class="mr-8">
                        <img class="h-10 mt-3 md:h-10 w-auto cursor-pointer" :src="logo" alt="Vue Jobs" />
                    </a>
                    <div class="hidden md:flex items-center space-x-6 h-full">
                        <a href="/"
                            class="hover:border-b-primary hover:border-b-2 h-full flex items-center pt-4">Home</a>
                        <a href="/jobs"
                            class="hover:border-b-primary hover:border-b-2 h-full flex items-center pt-4">Jobs</a>
                        <a href="/jobs/add"
                            class="hover:border-b-primary hover:border-b-2 h-full flex items-center pt-4">Add
                            Job</a>
                    </div>
                </div>
                <div class="flex items-center h-full space-x-6">
                    <a href="#"
                        class="bg-primary text-white rounded-md px-6 py-2 h-10 hover:border-b-primary md:text-primary md:py-0 md:bg-white md:rounded-none font-semibold  hover:border-b-2 md:h-full flex items-center md:pt-4 ">Sign
                        in </a>
                    <div class="hidden md:inline w-px h-6 bg-blue-300 mt-4"></div>
                    <a href="jobs.html"
                        class="hidden md:flex items-center hover:border-b-primary hover:border-b-2 h-full pt-4 ">Employers
                        / Post
                        Job</a>
                    <button class="md:hidden">
                        <img class="h-10 w-auto" :src="menu" alt="menu_icon">
                        <!-- Impement overlay page for menu later -->
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>