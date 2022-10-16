<template>
    <div class="shadow-lg border rounded-lg p-3">
        <div class="grid grid-rows-1 grid-flow-col gap-4">
            <div class="row-span-2 xl:col-span-1 md:col-span-5">
                <n-image src="/images/thumbnail.webp" width="300" />
            </div>
            <div class="col-span-1"><span class="text-2xl"> {{props.className}}</span></div>
            <div class="col-span-4"><span class="text-lg"> {{props.classDescription}} </span></div>
    
        </div>
    </div>
</template>


<script setup>

    const props = defineProps({
        className: {
            type: String,
            required: true
        },
        classDescription: {
            type: String,
            required: false,
            default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nemo voluptates molestiae consequuntur reiciendis a, reprehenderit amet explicabo, sapiente ad dicta maxime! Dignissimos repellendus pariatur itaque iusto, cumque ad dolor?"
        }
    })


</script>