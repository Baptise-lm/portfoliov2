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
    <RouterLink to="/projet">
        <button id="back-button">
            <img src="../image/arrowpixel.png">
            <p>{{ name }}</p>
        </button>
    </RouterLink>
</template>

<style scoped>

#back-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 200px;
    height: 50px;
    border: 3px solid #000000;
    background-image: url(../image/cobblestone.png);
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: -3px -3px 0px 0px rgba(0, 0, 0, 0.70) inset;
    color: white;
    font-family: minecraft;
    font-size: 16px;
    padding: 10px;
    text-shadow: 0px 2px 0px #000;
}

#back-button:hover {
    background-image: url(../image/cobblestone-dark.png);
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 2px 2px -0px 0px rgba(0, 0, 0, 0.70) inset;
}

</style>