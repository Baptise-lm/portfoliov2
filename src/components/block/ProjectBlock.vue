<script setup>
    defineProps(
        {
            id: {
                type : Number,
                required: true,
            },
            name: {
                type : String,
                required: false,
            },
            img: {
                type : String,
                required: false,
            },
            date: {
                type : String,
                required: false,
            },
            description: {
                type : String,
                required: false,
            },
        }
    )
</script>

<template>
    <div @click="$emit('DetailProject', id)" id="all-block" >
        <button id= "block">
            <div>
                <img class="mini-img" :src="img">
            </div>
            <div id="text-align">
                <div id="first-line">
                    <p>{{ name }}</p>
                    <p>{{ date }}</p>
                </div>
                <p id="description-style">{{ description }}</p>
            </div>
        </button>
        <button class="download-button">
            <img src="../image/download-project.png" alt="download-button">
        </button>
    </div>
</template>

<style scoped>

#all-block {
    display: flex;
    flex-direction: row;
}

#block {
    display: flex;
    flex-direction: row;
    color: white;
    font-family: minecraft;
    font-size: 22px;
    background-color: #3A3A3A;
    box-shadow: 3px -3px 0px 0px rgba(0, 0, 0, 0.70) inset, 0px 3px 0px 0px rgba(255, 255, 255, 0.05) inset;
    width: 670px;
    height: 93px;
    align-items: center;
    padding: 0px 15px;
    gap: 15px;
}

#text-align {
    width: 100%;
}

#first-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#description-style {
    color: rgba(255, 255, 255, 0.70);
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: start;
}

.mini-img {
    max-width: 70px;
    max-height: 50px;
}

.download-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    padding-bottom: 10px;
    width: 83px;
    height: 93px;
    box-shadow: 3px -3px 0px 0px rgba(0, 0, 0, 0.70) inset, 0px 3px 0px 0px rgba(255, 255, 255, 0.05) inset, -3px 0px 0px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: #3A3A3A;
}

.download-button:hover {
    box-shadow: -3px 3px 0px 0px rgba(0, 0, 0, 0.70) inset, 3px -3px 0px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: #2e2e2e;
}

button {
    border: none;
}

</style>