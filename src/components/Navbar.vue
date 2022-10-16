<template>
    <div class="bg-purple-900 shadow-lg text-white text-lg p-0 flex">
        <div v-for="link in links.filter((a) => a.needAuth === false || a.needAuth === auth.isAuthenticated)"
            class="mr-4 p-3 hover:bg-blue-200 h-full">
            <NuxtLink :to="link.path">{{link.label}}</NuxtLink>
        </div>
        <div class="m-0 p-3 flex justify-end">
            <div v-for="link in rightMenu.filter((a) => a.needAuth === false || a.needAuth === auth.isAuthenticated)"
                class="mr-4 hover:bg-blue-200 h-full ">
                <NuxtLink :to="link.path">{{link.label}}</NuxtLink>
            </div>
        </div>


    </div>


</template>


<script setup>
const auth = useAuth()

const links = [
    {
        label: "Home",
        path: "/",
        needAuth: false,
    },
    {
        label: "Aulas",
        path: "/aulas",
        needAuth: true,
    },
    {
        label: "Planos",
        path: "/planos",
        needAuth: false,
    },

    {
        label: "Sobre",
        path: "/profile",
        needAuth: false,
    },
]

const rightMenu = [
    {
        label: "Profile",
        path: "/profile",
        needAuth: true,
    },
    {
        label: "Login",
        path: "/login",
        needAuth: false,
    }
]


</script>