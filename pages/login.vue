<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="email" type="text" />
            <p>{{ email }}</p>
            <input v-model="password" type="text" />
            <p>{{ password }}</p>
            <button type="submit"></button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const email = ref('')
        const password = ref('')

        return {
            email,
            password
        }
    }
}
</script>