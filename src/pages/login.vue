<template>
    <n-space justify="center" class="mt-24">
        <form @submit.prevent="login">
            <n-input class="mb-5" v-model:value="email" type="text" placeholder="Email" round />
            <n-input class="mb-5" v-model:value="password" type="password" placeholder="Password" round
                show-password-on="click" />
            <n-button type="primary" round attr-type="submit" class="text-green-900">Login</n-button>
            <n-button type="primary" round class="text-green-900 float-right">Cadastrar</n-button>
        </form>
    </n-space>


</template>

<script setup>
const email = ref("")
const password = ref("")
const auth = useAuth()

const login = () => {
    console.log(email.value, password.value);
    auth.value.isAuthenticated = true
}

</script>