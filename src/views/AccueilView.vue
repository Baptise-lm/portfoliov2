<script setup>
import MenuButton from '../components/button/Menubutton.vue';
import MenuButton2 from '../components/button/MenuButton2.vue';
import ContactButton from '../components/button/ContactButton.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="page-block">
        <img id="title-size" src="../components/image/titre1.png" alt="titre1">
        <p id="subtitle-font">Inspire de l'univers de <br> Minecraft</p>
        <div id="align-button">
            <div id="contact-button">
                <ContactButton></ContactButton>
                <p></p>
            </div>
            <div id="align-menu">
                <RouterLink to="/apropos"><MenuButton name="A propos de moi"></MenuButton></RouterLink>
                <RouterLink to="/projet"><MenuButton name="Mes projets"></MenuButton></RouterLink>
                <RouterLink to="/contact"><MenuButton name="Contact"></MenuButton></RouterLink>
            </div>
            <div id="personnage">
                <div id="black-bg">
                    <p id="myname">Baptiste LEMOINE MIGAUD</p>
                </div>
                <img id="steve" src="../components/image/skin-tortue3.png" alt="Steve">
                <RouterLink to="/competence"><MenuButton2 name="Mes competences"></MenuButton2></RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

#page-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 100px;
}

#title-size {
    width: 950px;
    height: 75px;
    margin: auto;
}

#subtitle-font {
    font-size: 25px;
    color: #F8FC18;
    text-shadow: 1px 1px 0px #000;
    font-family: Minecraft;
    text-align: center;
}

#align-button {
    display: flex;
    flex-direction: row;
    gap: 68px;
    margin: auto;
}

#contact-button {
    display: flex;
    width: 290px;
    height: 420px;
    align-items: flex-end;
    justify-content: flex-start;
}

#personnage {
    display: flex;
    flex-direction: column;
    width: 290px;
    height: 420px;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}

#align-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 56px;
}

#steve {
    width: 120px;
    height: 195px;
}

#myname {
    text-align: center;
    color: white;
    font-family: Minecraft;
    font-size: 20px;
}

#black-bg {
    display: flex;
    background: rgba(0, 0, 0, 0.60);
    padding: 5px;
    justify-content: center;
    align-items: center;
}

</style>