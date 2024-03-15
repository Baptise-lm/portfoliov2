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
    <button id="primary-button-border">{{ name }}</button>
</template>

<style scoped>

#primary-button-border {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 70px;
    border: 3px solid #000000;
    /* background-image: url(../image/cobblestone.png); */
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: -3px -3px 0px 0px rgba(0, 0, 0, 0.70) inset;
    color: white;
    font-family: minecraft;
    font-size: 22px;
    text-shadow: 0px 2px 0px #000;
}

#primary-button-border:hover {
    /* background-image: url(../image/cobblestone-dark.png); */
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 2px 2px -0px 0px rgba(0, 0, 0, 0.70) inset;
}

</style>