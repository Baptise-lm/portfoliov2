<script setup>
import Download from '../components/button/Download.vue'
import Back from '../components/button/Back.vue'
import ContactButton from '../components/button/ContactButton.vue'

defineProps(
        {
            imgtitle: {
                type : String,
                required: false,
            },
            titre: {
                type : String,
                required: false,
            },
            description: {
                type : String,
                required: false,
            },
            image1: {
                type : String,
                required: false,
            },
            image2: {
                type : String,
                required: false,
            },
            image3: {
                type : String,
                required: false,
            },
        }
    )

</script>


<template>
    <div id="backhome-postion"><Back name="Retour au projet"></Back></div>
    <div id="contact-postion"><ContactButton></ContactButton></div>
    <div id="page-align">
        <img :src="imgtitle" >
        <div id="presentation">
            <p id="title">{{ titre }}</p>
            <p id="text">{{ description }}</p>
        </div>
        <div id="image-border">
            <img class="image" :src="image1">
            <img class="image" :src="image2">
            <img class="image" :src="image3">
        </div>
        <Download name="TELECHARGER LE PROJET"></Download>
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
