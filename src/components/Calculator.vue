<template>
    <v-main>
        <card-container>
            <v-container class="d-flex justify-center" >
                <div class="d-flex flex-column">
                    <div class="d-flex justify-center">
            <h4  class="pink--text">Web Calculator</h4>
            </div>
            <v-col>
                
                <v-text-field v-model.number="$store.state.firstNumber" label="First Number"></v-text-field>
            </v-col>
            <v-row>
    <v-btn @click="add" class="mr-2" depressed color="green"> <v-icon large color="white darken-2">
      mdi-plus-thick
      </v-icon></v-btn>
    <v-btn @click="subtract" class="mr-2" depressed color="blue"> <v-icon large color="white darken-2">
      mdi-minus
      </v-icon></v-btn>
    <v-btn @click="multiply" class="mr-2" depressed color="pink"> <v-icon large color="white darken-2">
      mdi-close
      </v-icon></v-btn>
    <v-btn @click="divide" class="mr-2" depressed color="red"> <v-icon large color="white darken-2">
      mdi-slash-forward
      </v-icon></v-btn>
            </v-row>
            <v-col>
                
                <v-text-field v-model.number="$store.state.secondNumber" label="Second Number"></v-text-field>
                
            </v-col>
            <v-col>
                <h4>The answer is {{$store.state.total}}</h4>
            </v-col>
            </div>
            </v-container>
            
        </card-container>
    </v-main>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'Calculator',
        methods: {
            ...mapActions(['add', 'subtract', 'multiply', 'divide'])
        }
    }
</script>

<style lang="scss" scoped>

</style>