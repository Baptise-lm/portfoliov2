<script setup></script>

<template>
    <button id="book-button">
        <img id="book-size" src="../image/Knowledge_Book_JE1.webp" alt="Livre-vert">
    </button>
</template>

<style scoped>

#book-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    height: 68px;
    border: 3px solid #000;
    background: #c6c6c6;
    box-shadow: -3px -3px 0px 0px rgba(0, 0, 0, 0.70) inset;
}

#book-size {
    width: 50px;
    height: 50px;
}

#book-button:hover {
    border: 3px solid #000;
    background: #3D3D3D;
    box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.70) inset;
}


</style>