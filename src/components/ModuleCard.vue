<template>
    <div class="shadow-lg text-center border rounded-lg p-2" style="width: 440px;">
        <span class="text-3xl">{{props.name}}</span>
        <n-image src="/images/thumbnail.webp" width="400"/>
        <br>
        <span class="text-xl">only a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga rerum laudantium at ea, doloribus nisi eligendi quis, voluptas maxime quod laborum praesentium corporis sapiente ad magnam obcaecati quibusdam repellendus magni.</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        }
    })

</script>