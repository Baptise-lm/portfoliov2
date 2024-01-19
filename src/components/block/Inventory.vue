<script setup>

defineProps(
        {
            imgcompetence: {
                type : String,
                required: false,
            },
        }
    )

</script>

<template>
    <div id="slot-style"><img id="imgbox" :src="imgcompetence"></div>
</template>

<style scoped>

#slot-style {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 87px;
    height: 87px;
    background-color: #8b8b8b;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.70) inset;
}

#slot-style:hover {
    width: 87px;
    height: 87px;
    background-color: #a0a0a0;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.70) inset;
}

#imgbox {
    width: 60px;
    height: 60px;
}

</style>