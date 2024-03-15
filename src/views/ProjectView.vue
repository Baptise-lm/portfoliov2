<script setup>
import Backhome from '../components/button/Backhome.vue';
import ContactButton from '../components/button/ContactButton.vue';
import ProjectBlock from '../components/block/ProjectBlock.vue';
import router from '../router';
import Data from '../services/data.js';

function getDetailProject(id){
    router.push(`/projet/${id}`)
}

</script>

<template>
    <body style="background-image: url(../assets/backgrounds/cobblestone.png);">
        <div id="backhome-postion"><Backhome name="Retour a l'accueil"></Backhome></div>
        <div id="contact-postion"><ContactButton></ContactButton></div>
        <div id="block">
            <img id="title" src="../components/image/projet-title.png" alt="">
            <div id="grey-block">
                <div id="scroll">
                    <ProjectBlock v-for="i in Data.projets" :id="i.id" :name="i.name" :img="i.image1" :date="i.date" :description="i.description" @detail-project="getDetailProject"></ProjectBlock>
                </div>
            </div>
        </div>
    </body>
</template>

<style scoped>

#block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 80px;
    padding: 100px;
}

#scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    height: 380px;
    width: 830px;
    border: 7px solid #000;
    background: #626262;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.50) inset;
    padding: 20px 0px;
    gap: 16px;
}

#backhome-postion {
    position: absolute;
    top: 100px; left: 80px;
    width: 200px;
    height: 50px;
}

#contact-postion {
    position: fixed;
    bottom: 50px; left: 80px;
    width: 70px;
    height: 70px;
}

#grey-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 915px;
    height: 500px;
    border: 7px solid #000;
    background: #D9D9D9;
    box-shadow: -5px -5px 0px 0px rgba(0, 0, 0, 0.70) inset;
}

</style>