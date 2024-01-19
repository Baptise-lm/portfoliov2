<script setup>
import Backhome from '../components/button/Backhome.vue'
</script>

<template>
    <div id="backhome-postion"><Backhome name="Retour a l'accueil"></Backhome></div>
    <div id="page-align">
        <img id="title-img" src="../components/image/mecontacter.png" alt="titre-competence">
        <div id="contact-from-bg">
            <form id="form-align" accept-charset="UTF-8" action="https://www.formbackend.com/f/2e4583c8fd46dabe" method="POST" :id="form">
                <div class="form-content">
                    <label class="from-title-font" for="name">Nom / Prenom</label>
                    <input class="input-one" type="text" id="name" name="name" required>
                </div>

                <div class="form-content">
                    <label class="from-title-font" for="email">E-mail</label>
                    <input class="input-one" type="email" id="email" name="email" required>
                </div>

                <div class="form-content">
                    <label class="from-title-font" for="message">Votre message</label>
                    <textarea class="input-two" name="message" form="form"></textarea>
                </div>

                <button id="submit-button" type="submit">Envoyer</button>
            </form>
        </div>
        <div id="align-button">
            <button class="follow-button">
                <img src="../components/image/linkedin.png" alt="">
            </button>
            <button class="follow-button">
                <img src="../components/image/gmail.png" alt="">
            </button>
        </div>
    </div>
</template>

<style scoped>

#form-align {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    padding: 50px;
}

#backhome-postion {
    position: absolute;
    top: 100px; left: 80px;
    width: 200px;
    height: 50px;
}

#title-img {
    margin: auto;
    width: 527px;
    height: 74px;
}

#contact-from-bg {
    background-color: #6B6562;
    margin: auto;
    height: 500px;
    width: 80%;
    border: 3px solid #000;
    box-shadow: -4px -4px 0px 0px rgba(0, 0, 0, 0.40) inset;
}

.form-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

#page-align {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 100px;
    gap: 40px;
}

.from-title-font {
    color: #FFF;
    font-family: minecraft;
    font-size: 16px;
}

.input-one {
    height: 35px;
}

.input-two {
    height: 115px;
}

#submit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    border: 3px solid #000000;
    background-color: #363331;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: -3px -3px 0px 0px rgba(0, 0, 0, 0.70) inset;
    color: white;
    font-family: minecraft;
    font-size: 18px;
    text-shadow: 0px 2px 0px #000;
    margin: 0 auto;
}

#submit-button:hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 50px;
    border: 3px solid #000000;
    background-color: #363331;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.70) inset;
    color: white;
    font-family: minecraft;
    font-size: 18px;
    text-shadow: 0px 2px 0px #000;
}

.follow-button {
    width: 71px;
    height: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -4px -4px 0px 0px rgba(0, 0, 0, 0.50) inset;
    background-color: #6B6562;
    border: 3px solid #000;
}

.follow-button:hover {
    width: 71px;
    height: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.50) inset;
    background-color: #363331;
    border: 3px solid #000;
}

#align-button {
    display: flex;
    flex-direction: row;
    margin: auto;
    gap: 30px;
}

</style>