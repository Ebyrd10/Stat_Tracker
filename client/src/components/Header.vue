<template>
  <header>
      <img :src="image">
      <img :src="overwatch">
      <img :src="csgo">
  </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            image: require("@/assets/logo.png"),
            overwatch: require("@/assets/overwatch.png"),
            csgo: require("@/assets/csgo.png")
        }
    }
}
</script>

<style scoped>
img {
    width:300px;
}
header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex: .3;
}

/* when the svreen is smaller, move the background img to the middle */
@media(max-width: 700px){
    img {
        display: block;
        margin: auto;
    }
}
</style>
