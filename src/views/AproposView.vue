<script setup>
import Backhome from '../components/button/Backhome.vue'
import ContactButton from '../components/button/ContactButton.vue'
</script>

<template>
    <div id="backhome-postion"><Backhome name="Retour a l'accueil"></Backhome></div>
    <div id="contact-postion"><ContactButton></ContactButton></div>
    <div id="page-alignement">
        <img id="page-title" src="../components/image/a-propos-de-moi.png" alt="title">
        <div id="brown-bg">
            <div id="white-bg">
                <img src="../components/image/paranthese.png" alt="paranthese">
                <div id="text-box">
                    <p id="title-font">Titre</p>
                    <p id="text-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

#page-title {
    margin: 0 auto;
}

#brown-bg {
    background-image: url(../components/image/brown-bg.png);
    background-repeat: no-repeat;
    height: 840px;
    width: 680px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}

#white-bg {
    display: flex;
    padding: 25px;
    background-color: #FCFAF2;
    height: 760px;
    width: 610px;
}

#text-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 15px;
    padding-top: 10px;
    gap: 25px;
}
#title-font {
    text-align: center;
    font-family: Minecraft;
    font-size: 26px;
}

#text-font {
    font-family: poppins;
    font-size: 16px;
    text-align: justify;
    padding-right: 10px;
}

#page-alignement {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 25px;
    padding: 100px;
}

</style>