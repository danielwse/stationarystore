<template>
   <div>
    <header>
        <h1>{{ msg }}</h1>
    </header>
    </div>
  
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'Online Bakery'
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    border-style: solid;
    border-color:black;
    border-width: 2px;
    height: 60px;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
h1{
    color:ivory
}
</style>