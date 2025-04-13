<script setup>
import { RouterLink, useRoute } from 'vue-router';
import menu from "@/assets/menu.png"
import logo from "@/assets/jobhub.jpeg"

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath
};
console.log("isActiveLink:", isActiveLink)

</script>

<template>
    <nav class="bg border-b border-gray-300">
        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center">
                <!-- Logo -->
                <div class="flex h-full items-center mr-auto">
                    <RouterLink to="/" class="mr-8">
                        <img class="h-10 mt-3 md:h-10 w-auto cursor-pointer" :src="logo" alt="Vue Jobs" />
                    </RouterLink>
                    <div class="hidden md:flex items-center space-x-6 h-full">
                        <RouterLink to="/"
                            :class="[isActiveLink('/') ? 'border-b-primary border-b-2' : 'hover:border-b-primary hover:border-b-2', 'h-full', 'flex', 'items-center', 'pt-4']">
                            Home
                        </RouterLink>
                        <RouterLink to="/jobs"
                            :class="[isActiveLink('/jobs') ? 'border-b-primary border-b-2' : 'hover:border-b-primary hover:border-b-2', 'h-full', 'flex', 'items-center', 'pt-4']">
                            Jobs
                        </RouterLink>
                        <RouterLink to="/about"
                            :class="[isActiveLink('/about') ? 'border-b-primary border-b-2' : 'hover:border-b-primary hover:border-b-2', 'h-full', 'flex', 'items-center', 'pt-4']">
                            About
                        </RouterLink>
                    </div>
                </div>
                <div class="flex items-center h-full space-x-6">
                    <RouterLink to="/signin"
                        :class="[isActiveLink('/signin') ? 'border-b-primary border-b-2' : 'hover:border-b-primary hover:border-b-2', 'h-full', 'flex', 'items-center', 'pt-4']">
                        Sign
                        in </RouterLink>
                    <div class="hidden md:inline w-px h-6 bg-blue-300 mt-4"></div>
                    <RouterLink to="/jobs/add"
                        :class="[isActiveLink('/jobs/add') ? 'border-b-primary border-b-2' : 'hover:border-b-primary hover:border-b-2', 'h-full', 'flex', 'items-center', 'pt-4']">
                        Employers
                        / Post
                        Job</RouterLink>
                    <button class="md:hidden">
                        <img class="h-10 w-auto" :src="menu" alt="menu_icon">
                        <!-- Impement overlay page for menu later -->
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>