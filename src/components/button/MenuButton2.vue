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
    <button id="secondary-button-border">{{ name }}</button>
</template>

<style scoped>

#secondary-button-border {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 250px;
    max-height: 55px;
    border: 3px solid #000000;
    background-image: url(../image/cobblestone.png);
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: -3px -3px 0px 0px rgba(0, 0, 0, 0.70) inset;
    color: white;
    font-family: minecraft;
    font-size: 20px;
    text-shadow: 0px 2px 0px #000;
    padding: 17px 34px 17px 34px;
}

#secondary-button-border:hover {
    background-image: url(../image/cobblestone-dark.png);
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 2px 2px -0px 0px rgba(0, 0, 0, 0.70) inset;
}

</style>