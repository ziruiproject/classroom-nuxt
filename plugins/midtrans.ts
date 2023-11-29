import Midtrans from "../midtrans-nodejs-client/index";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    // Create Snap API instance
    let snap = new Midtrans.Snap({
        isProduction: false,
        serverKey: config.public.midtransServerKey,
        clientKey: config.public.midtransClientKey
    });

    nuxtApp.vueApp.provide('snap', snap)
    nuxtApp.provide('snap', snap)
})