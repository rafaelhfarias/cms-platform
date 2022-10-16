<template>
    <div class="w-full overflow-auto mt-10 flex justify-center gap-6 flex-wrap">
        <div v-for="plan in planos">
            <CardPlan :plan="plan" />
        </div>
    </div>



</template>


<script setup>

const planos = [
    {
        id: "1",
        name: "Plano free",
        description: "Plano gratuito etc etc etc",
        price: null
    },
    {
        id: "2",
        name: "Plano premium",
        description: "Plano premium etc etc etc",
        price: "100"
    },
    {
        id: "3",
        name: "Plano Super Premium",
        description: "Plano Super Premium etc etc etc",
        price: "200"
    }
]

</script>