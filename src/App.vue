<script setup>
import { NavBar } from './components';
import { HomePage } from './pages';
import { RouterView } from 'vue-router';

</script>
<template>
  <NavBar />
  <!-- Same as outlet -->
  <RouterView />
</template>