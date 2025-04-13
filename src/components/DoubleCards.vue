<script setup>
import { RouterLink } from 'vue-router';
import Card from './Card.vue';

</script>

<template>
    <section class="py-4">
        <div class="container-xl lg:container m-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <Card>
                    <h2 class="text-2xl font-bold">For Employees</h2>
                    <p class="mt-2 mb-4">
                        Browse our jobs and start your career today
                    </p>
                    <RouterLink to="/jobs" class="bg-black text-white rounded-lg px-4 py-3 hover:bg-gray-700">
                        Browse Jobs
                    </RouterLink>
                </Card>
                <Card bg="bg-blue-100">
                    <h2 class="text-2xl font-bold">For Employers</h2>
                    <p class="mt-2 mb-4">
                        List your job to find the perfect employee for the position
                    </p>
                    <RouterLink to="/jobs/add" class=" bg-blue-500 text-white rounded-lg px-4 py-3 hover:bg-blue-600">
                        Add Job
                    </RouterLink>
                </Card>
            </div>
        </div>
    </section>
</template>