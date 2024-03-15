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
                    <p id="title-font">Developpeur mais pas que ...</p>
                    <p id="text-font">Après un BAC général spécialisé en Maths et Sciences de l'informatique, n'étant pas sur de quel métier je voulais faire, j'ai commencé une license informatique.
                        Me rendant compte que cela ne me correspondait pas, j'ai terminé mon année et j'ai cherché une école plus professionalisante. MyDigitalSchool correspondait totalement à mes attentes
                        et j'ai donc commencé mon cursus là bas. Je ne savais pas vers quoi me diriger l'année dernière entre le développement web et le webdesign.
                        <br><br>
                        Ma première année au sein de l'école et mon stage de fin d'année dans le design permis d'y voir plus clair. Je m'oriente donc vers le Développement Web.
                        <br><br>
                        Cependant, ma formation me permet d'avoir un panel de compétence très large dans le domaine du digital. Maquettage, Intégration de site web, Montage photo et vidéo, Communication réseaux
                        , Marketing Digital ...
                        <br><br>
                        N'hésitez pas à regarder mes projets pour en voir plus sur mes capacités et à me contacter pour plus d'information si mon profil vous intéresse.
                    </p>
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
    gap: 40px;
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