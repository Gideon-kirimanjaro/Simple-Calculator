import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return{

      firstNumber : '',
      secondNumber: '',
      total: '',
    }
  },
  mutations: {
    setFirst(state,firstNumber){
      state.firstNumber = firstNumber 
    },
    setSecond(state,secondNumber){
      state.secondNumber = secondNumber
    },
    sum(){
      this.state.total = this.state.firstNumber+this.state.secondNumber
    },
    minus(){
      this.state.total = this.state.firstNumber-this.state.secondNumber
    },
    multiply(){
      this.state.total = this.state.firstNumber*this.state.secondNumber
    },
    divide(){
      this.state.total = this.state.firstNumber/this.state.secondNumber
    },
    
  },
  getters:{
    firstNumber: state=>{
      return state.firstNumber
    },
    secondNumber: state=>{
      return state.secondNumber
    },
  },
  actions: {
    add({commit}){
       if(this.state.firstNumber !=='' && this.state.secondNumber!=='' ){
         return commit('sum') 
       } else if(this.state.firstNumber ==''){
          alert('Enter first Number')
       }
        else if(this.state.secondNumber ==''){
          alert('Enter Second Number')
       }
        else if(this.state.firstNumber =='' && this.state.secondNumber ){
          alert('Enter Numbers')
       }

      

    },
    subtract({commit}){
       if(this.state.firstNumber !=='' && this.state.secondNumber!=='' ){
         return commit('minus') 
       } else if(this.state.firstNumber ==''){
          alert('Enter first Number')
       }
        else if(this.state.secondNumber ==''){
          alert('Enter Second Number')
       }
        else if(this.state.firstNumber =='' && this.state.secondNumber ){
          alert('Enter Numbers')
       }

      

    },
    multiply({commit}){
       if(this.state.firstNumber !=='' && this.state.secondNumber!=='' ){
         return commit('multiply') 
       } else if(this.state.firstNumber ==''){
          alert('Enter first Number')
       }
        else if(this.state.secondNumber ==''){
          alert('Enter Second Number')
       }
        else if(this.state.firstNumber =='' && this.state.secondNumber ){
          alert('Enter Numbers')
       }

      

    },
    divide({commit}){
       if(this.state.firstNumber !=='' && this.state.secondNumber!=='' ){
         return commit('divide') 
       } else if(this.state.firstNumber ==''){
          alert('Enter first Number')
       }
        else if(this.state.secondNumber ==''){
          alert('Enter Second Number')
       }
        else if(this.state.firstNumber =='' && this.state.secondNumber ){
          alert('Enter Numbers')
       }

      

    },

  },
  modules: {
  }
})
