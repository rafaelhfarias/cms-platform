<template>
   <div :class=" {'dark': darkMode}">
        <h1 class="text-red-600 dark:text-dim-600">Hello from pages</h1>
   </div>
</template>

<script setup>
const darkMode = ref(true)

</script>