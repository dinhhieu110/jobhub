<script setup>
import { DoubleCards, Hero, JobList, NavBar } from './components';
</script>
<template>
  <NavBar />
  <Hero />
  <DoubleCards />
  <JobList :limit="3" :showButton="true" />
</template>