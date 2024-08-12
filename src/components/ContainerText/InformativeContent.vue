<template>
    <div>
        <h2 class="h-style">
            {{ contenido }}
        </h2>
    </div>
</template>
<script>
export default {
    name: "InformativeContent",
    props: {
        contenido: String,
    }
}
</script>
<style>
.h-style{
    color: #fff !important;
    font-size: 30px !important;
    font-weight: 700 !important;
    font-family: "ABeeZee", sans-serif !important;
}
</style>