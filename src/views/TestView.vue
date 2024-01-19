<script setup>
import Menubutton from '../components/button/MenuButton.vue';
import MenuButton2 from '../components/button/MenuButton2.vue';
import ContactButton from '../components/button/ContactButton.vue';
import Inventory from '../components/block/Inventory.vue';
import LearnMore from '../components/button/Learn-more.vue';
import Blackbg from '../components/block/Blackbg.vue';
import Textbox from '../components/block/Textbox.vue';
import Backhome from '../components/button/Backhome.vue';
import Download from '../components/button/Download.vue';
import ProjectBlock from '../components/block/ProjectBlock.vue';
</script>

<template>
    <div id="test-align">
        <Menubutton name="A propos de moi"></Menubutton>
        <MenuButton2 name="Mes competences"></MenuButton2>
        <ContactButton></ContactButton>
        <Inventory imgcompetence="src/components/image/vuejs.png"></Inventory>
        <img src="src/components/image/vuejs.png" alt="">
        <LearnMore></LearnMore>
        <Blackbg></Blackbg>
        <Textbox description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." > 
        </Textbox>
        <Backhome name="Retour a l'accueil"></Backhome>
        <div>
            <form accept-charset="UTF-8" action="https://www.formbackend.com/f/2e4583c8fd46dabe" method="POST">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message</label>
            <input type="message" id="message" name="message" required>

            <button type="submit">Submit</button>
            </form>
        </div>  
        <Download name="TELECHARGER LE DOSSIER COMPLET"></Download>
    </div>
    <div class="cadre_scroll"> blabla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
        id est laborum.
        <img id="img-test" src="../components/image/cobblestone-dark.png" alt=""></div>
    <div id="padding-page">
        <ProjectBlock name="Nom Projet" date="00/00/2023" description="type de projet" img="src/components/image/projet-test.png"></ProjectBlock>
    </div>
</template>

<style scoped>

#test-align {
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    justify-content: center;
}

.cadre_scroll{
  overflow-y: scroll;
  max-height: 500px;
  width: 80%;
  margin: auto;
}

#img-test {
    width: 100%;
}

#padding-page {
    padding: 50px 0px 50px 200px;
}

</style>