<script setup>
import axios from "axios";
import { defineProps, onMounted, reactive, ref } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue"
import { RouterLink } from "vue-router";
import Job from "./Job.vue";
const props = defineProps({
    limit: Number,
    showButton: {
        default: false,
        type: Boolean
    }
})

const jobs = ref([]);
const isLoading = ref(true);


onMounted(async () => {
    try {
        const res = await axios.get("http://localhost:5000/jobs");
        if (res.data) jobs.value = res.data;

    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false;
    }

})

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-primary text-center mb-4">
                Latest Jobs
            </h2>
            <div v-if="isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Job v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section>

</template>