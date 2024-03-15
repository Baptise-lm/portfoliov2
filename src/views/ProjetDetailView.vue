
<script setup>

import Download from '../components/button/Download.vue'
import Back from '../components/button/Back.vue'
import ContactButton from '../components/button/ContactButton.vue'
import { useRouter } from "vue-router";
import Data from '../services/data.js';

const router = useRouter();
console.log(router);

const IdforProject = router.currentRoute.value.params.id
console.log(IdforProject)

const IdContent = Data.projets.find( i => i.id === IdforProject )
console.log(IdContent)

</script>

<template>

    <div id="backhome-postion"><Back name="Retour au projet"></Back></div>
    <div id="contact-postion"><ContactButton></ContactButton></div>
    <div id="page-align">
        <img :src="IdContent.titleimg" alt="title">
        <div id="presentation">
            <p id="title"> Présentation :</p>
            <p id="text">{{ IdContent.desc }}</p>
        </div>
        <div id="image-border">
            <img class="image" :src="IdContent.img1" alt="dossier page 1">
            <img class="image" :src="IdContent.img2" alt="dossier page 2">
            <img class="image" :src="IdContent.img3" alt="dossier page 3">
        </div>
        <!-- <Download name="LIEN VERS LE PROJET" :href="IdContent.link"></Download> -->
    </div>

</template>

<style scoped>

#title {
    font-family: poppins;
    font-size: 17px;
    font-weight: 600;
    color: black;
}

#text {
    font-family: poppins;
    font-size: 16px;
    color: black;
    font-weight: 500;
}

#presentation {
    width: 70%;
    background-color: #EBEBEB;
    box-shadow: 4px 4px 0px 0px #000 inset;
    padding: 13px;
    text-align: justify;
}

#page-align {
    padding: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
}

#image-border {
    display: flex;
    flex-direction: column;
    border: 4px solid #000;
    margin: auto;
    width: 70%;
}

#backhome-postion {
    position: absolute;
    top: 110px; left: 80px;
    width: 200px;
    height: 50px;
}

#contact-postion {
    position: fixed;
    bottom: 50px; left: 80px;
    width: 70px;
    height: 70px;
}

</style>