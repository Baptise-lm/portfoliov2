<script setup>
    defineProps(
        {
            name: {
                type : String,
                required: false,
            },
        }
    )
</script>


<template>
    <RouterLink to="/contact">
        <button id="contact-button">
            <img id="image-size" src="../image/contact.png" alt="contact">
        </button>
    </RouterLink>
</template>

<style scoped>

#contact-button {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 70px;
    max-height: 70px;
    border: 3px solid #000;
    background-image: url(../image/cobblestone.png);
    background-size: 700%;
    background-repeat: no-repeat;
    box-shadow: -2px -2px 0px 0px rgba(0, 0, 0, 0.70) inset;
    padding: 5px;
}

#contact-button:hover {
    background-image: url(../image/cobblestone-dark.png);
    background-size: 700%;
    background-repeat: no-repeat;
    box-shadow: 2px 2px -0px 0px rgba(0, 0, 0, 0.70) inset;
}

#image-size {
    width: 54px;
    height: 54px;
}

</style>