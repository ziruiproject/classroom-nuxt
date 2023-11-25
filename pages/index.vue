<template>
    <div>
        <h1>Index</h1>
        <p>Halo gan {{ userUid }}</p>
    </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
const router = useRouter()
const userUid = ref(null);

onMounted(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userUid.value = user.uid
        } else {
            router.push('/login')
        }
    })
})

</script>