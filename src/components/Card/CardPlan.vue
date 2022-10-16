<template>
    <n-card class="text-center" :title="props.plan.name">
        <n-image src="/images/thumbnail.webp" width="400" />
        <br>
        <span class="text-lg">{{props.plan.description}}</span>
        <template #action>
            <n-button round>Assinar: R$ {{props.plan.price}}</n-button>
        </template>
    </n-card>

</template>

<script setup>

const props = defineProps({
    plan: {
        type: Object,
        required: true
    }
})

</script>