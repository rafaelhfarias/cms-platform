<template>
    <div>
        <span class="text-3xl"> Módulo {{classId}}</span>
        <ClassCard/>
    </div>
</template>

<script setup>

    const classId = useRoute().params.id

</script>