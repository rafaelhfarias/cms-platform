<template>
    <div>
        <div class=" text-center">
            <span class="text-3xl"> Módulo {{classId}}</span>
        </div>
        <div>
            <CardClass class="m-3" class-name="Class 1"/>
            <CardClass class="m-3" class-name="Class 2"/>
            <CardClass class="m-3" class-name="Class 3"/>
            <CardClass class="m-3" class-name="Class 4"/>

        </div>
    </div>
</template>

<script setup>

const classId = useRoute().params.id

</script>