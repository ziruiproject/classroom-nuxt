<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <input v-model="email" type="text" />
            <p>{{ email }}</p>
            <input v-model="password" type="password" />
            <p>{{ password }}</p>
            <button type="submit"></button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('')
const password = ref('')

const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        // Berhasil
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        // Gagal
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
}
</script>