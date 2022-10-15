<template>
    <div v-if="!auth.isAuthenticated" class="bg-purple-700 shadow-lg p-3 text-white text-lg">
            <NuxtLink class="mr-4"  to="/">Home</NuxtLink>
            <NuxtLink class="mr-4"  to="/courses">Planos</NuxtLink>
            <div class="float-right"> 
                <NuxtLink class="mr-4"  to="/profile">Sobre</NuxtLink>
                <button @click="login">Login</button>

            </div>
    </div>
    <div v-else class="bg-purple-700 shadow-lg p-3 text-white text-lg">
        <NuxtLink class="mr-4" to="/">Home</NuxtLink>
        <NuxtLink class="mr-4" to="/courses">Courses</NuxtLink>
        <NuxtLink class="mr-4" to="/courses">Agendamentos</NuxtLink>
        <div class="float-right">
            <NuxtLink class="mr-4" to="/profile">Profile</NuxtLink>
            <button @click="login">Logout</button>
        </div>
    </div>

</template>


<script setup>
const auth = useAuth()

const login = () => {
    auth.value.isAuthenticated = !auth.value.isAuthenticated
}
</script>