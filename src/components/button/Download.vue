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
    <a id="button-style">
        <p>{{ name }}</p>
        <svg id="vector-size" width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M11 17.25L4.125 10.0625L6.05 7.97812L9.625 11.7156V0H12.375V11.7156L15.95 7.97812L17.875 10.0625L11 17.25ZM2.75 23C1.99375 23 1.34658 22.7187 0.8085 22.1562C0.270416 21.5936 0.000916667 20.9166 0 20.125V15.8125H2.75V20.125H19.25V15.8125H22V20.125C22 20.9156 21.731 21.5927 21.1929 22.1562C20.6548 22.7197 20.0072 23.001 19.25 23H2.75Z" />
        </svg>
    </a>
</template>

<style scoped>

#vector-size {
    width: 25px;
    height: 25px;
}

#button-style {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    font-family: poppins;
    font-size: 18px;
    box-shadow: -4px -4px 0px 0px rgba(0, 0, 0, 0.25) inset;
    border: 4px solid #000;
    background-color: #D9D9D9;
}

#button-style:hover {
    color: white;
    fill: white;
    background-color: #3D3D3D;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25) inset;
}



</style>

