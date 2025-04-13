<script setup>
import { DoubleCards, Hero, JobList } from '@/components';
</script>

<template>
    <Hero />
    <DoubleCards />
    <JobList :limit="3" :showButton="true" />
</template>