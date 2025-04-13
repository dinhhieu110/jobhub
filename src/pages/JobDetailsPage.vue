<script setup>
import { BackButton } from '@/components';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const job = ref({});
const isLoading = ref(true);

const route = useRoute();
const jobId = route.params.id;

onMounted(async () => {
    try {
        const res = await axios.get(`/api/jobs/${jobId}`);
        if (res.data) job.value = res.data;

    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false;
    }

})

</script>

<template>
    <BackButton />
    <section v-if="!isLoading" class="bg-blue-50">
        <div class="container m-auto py-10">
            <div class="grid grid-cols-1 lg:grid-cols-70/30 w-full gap-6">
                <main>
                    <div class="bg-white p-6 rounded-lg shadow-md text-center lg:text-left">
                        <div class="text-blue-500 mb-4">{{ job.type }}</div>
                        <h1 class="text-3xl font-bold mb-4">{{ job.title }}</h1>
                        <div class="text-blue-500 mb-4 flex align-middle justify-center lg:justify-start">
                            <i class="pi pi-map-marker text-blue-700 mt-1 mr-2"></i>
                            <p class="text-blue-700">{{ job.location }}</p>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 class="text-blue-800 text-lg font-bold mb-6">
                            Job Description
                        </h3>

                        <p class="mb-4">
                            {{ job.description }}
                        </p>

                        <h3 class="text-blue-800 text-lg font-bold mb-2">Salary</h3>

                        <p class="mb-4">{{ job.salary }} / Year</p>
                    </div>
                </main>

                <!-- Sidebar -->
                <aside>
                    <!-- Company Info -->
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-6">Company Info</h3>

                        <h2 class="text-2xl">{{ job.company.name }}</h2>

                        <p class="my-2">
                            {{ job.company.description }}
                        </p>

                        <hr class="my-4" />

                        <h3 class="text-xl">Contact Email:</h3>

                        <p class="my-2 bg-blue-100 p-2 font-bold">
                            {{ job.company.contactEmail }}
                        </p>

                        <h3 class="text-xl">Contact Phone:</h3>

                        <p class="my-2 bg-blue-100 p-2 font-bold">{{ job.company.contactPhone }}</p>
                    </div>

                    <!-- Manage -->
                    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                        <RouterLink :to="`/jobs/edit/${job.id}`"
                            class="bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                            Edit
                            Job</RouterLink>
                        <button
                            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                            Delete Job
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    </section>
    <div v-else class="text-center text-gray-500 py-6">
        <PulseLoader />
    </div>
</template>