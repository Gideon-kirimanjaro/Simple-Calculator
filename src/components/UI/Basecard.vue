<template>
<div>
    <v-main>
        <v-container class="d-flex justify-md-center">
            <v-card width="350" >
                <slot ></slot>
            </v-card>
        </v-container>
    </v-main>
    </div>
</template>

<script>
    export default {
        name: 'Basecard',
    }
</script>

<style lang="scss" scoped>

</style>