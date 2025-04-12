<script setup>
import { defineProps } from 'vue';

defineProps({
    bg: String,
})
</script>

<template>
    <div :class="`${bg} p-6 rounded-lg shadow-md`">
        <slot></slot>
    </div>
</template>