    <script setup>
    import { defineProps, ref, computed } from 'vue';

    defineProps({
        job: Object
    })

</script>

<template>
    <div class="bg-white rounded-xl shadow-md">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>

            <div class="mb-5 line-clamp-4 overflow-hidden" :title="job.description">
                {{ job.description }}
            </div>

            <h3 class="text-blue-500 mb-2">{{ job.salary }}/ Year</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-blue-500 mb-3">
                    <i class="pi pi-map-marker text-blue-700"></i>
                    {{ job.location }}
                </div>
                <RouterLink :to="`/jobs/${job.id}`"
                    class="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Read More
                </RouterLink>
            </div>
        </div>
    </div>
</template>