<script setup>

defineProps(
        {
            description: {
                type : String,
                required: false,
            },
        }
    )

</script>

<template>
    <div id="whitebox">
        <p id="text-in-the-box">{{ description }}</p>
    </div>
</template>

<style scoped>

#whitebox {
    width: 285px;
    height: 195px;
    box-shadow: 4px 4px 0px 0px #000 inset;
    background-color: white;
    padding: 12px;
}

#text-in-the-box {
    color: black;
    font-size: 16px;
    font-family: Poppins;
    text-align: justify;
}

</style>