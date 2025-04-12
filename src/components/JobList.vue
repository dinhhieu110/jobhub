<script setup>
import jobData from "@/jobs.json"
import { ref, defineProps } from "vue";
import Job from "./Job.vue";

const jobs = ref(jobData).value.jobList;
console.log("jobs:", jobs);

defineProps({
    limit: Number,
    showButton: {
        default: false,
        type: Boolean
    }
})
</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-primary text-center mb-4">
                Latest Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Job v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <a href="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</a>
    </section>

</template>