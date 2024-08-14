<template>
    <div class="flex w-full justify-center">
        <h2 class="h-style text-center">
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
    font-size: 44px !important;
    font-weight: 700 !important;
    font-family: "Times New Roman", Times, serif !important;
    width: 40%;
}
</style>