<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <input v-model="email" type="text" />
            <input v-model="password" type="password" />
            <button type="submit">Register</button>
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