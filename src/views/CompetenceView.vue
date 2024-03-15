<script setup>
import Blackbg from '../components/block/Blackbg.vue'
import Inventory from '../components/block/Inventory.vue'
import Textbox from '../components/block/Textbox.vue'
import Learnmore from '../components/button/Learn-more.vue'
import Backhome from '../components/button/Backhome.vue'
import ContactButton from '../components/button/ContactButton.vue'

var inventorydata = {
    "card": [
        {
            "img" : "./src/components/image/vuejs.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/html.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/css.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/js.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/python.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/elementor.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/figma.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/photoshop.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/illustrator.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/after.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/premierpro.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/office.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/react.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/vide.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/vide.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/vide.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/vide.png",
            "hoverdescription" : "",
        },
        {
            "img" : "./src/components/image/vide.png",
            "hoverdescription" : "",
        },
        
    ]
}
</script>


<template>
    <div id="backhome-postion"><Backhome name="Retour a l'accueil"></Backhome></div>
    <div id="contact-postion"><ContactButton></ContactButton></div>
    <div id="page-block">
        <img id="title-img" src="../components/image/competence-title.png" alt="titre-competence">
        <div id="inventory-background">
            <div id="inventory-gap">
                <div id="character-align">
                    <Blackbg></Blackbg>
                    <div id="about-me">
                        <Textbox description="Durant ces deux années de Bachelor, j'ai acquis au travers de divers projets plusieurs compétences dans le domaine du web."></Textbox>
                        <div id="learn-more-block">
                            <RouterLink to="/apropos"><Learnmore></Learnmore></RouterLink>
                            <p id="learn-more-font">En savoir plus</p>
                        </div>
                    </div>
                </div>
                <div class="inventory-case">
                    <Inventory v-for="i in inventorydata.card"
                    :imgcompetence="i.img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

#inventory-background {
    width: 682px;
    height: 643px;
    background-image: url(../components/image/inventory-bg.png);
    background-repeat: no-repeat;
    margin: auto;
    padding: 23px;
}

#title-img {
    width: 664px;
    height: 74px;
    margin: auto;
}

#page-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 100px;
}

#character-align {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
}

#learn-more-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
}

#about-me {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#learn-more-font {
    font-family: minecraft;
    font-size: 16px;
    color: black;
}

.inventory-case {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    margin-bottom: 10px;
}

#inventory-gap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

</style>