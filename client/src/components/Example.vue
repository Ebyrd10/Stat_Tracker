<template>
  <div class="example" >
      <div class="exampleBox" v-tooltip="'Load Example Profile'" v-on:click="onClick">
          <div class="exampleSymbol">
              <img src="../assets/help-circle.svg" alt="Example Profile" id="exampleIcon">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'Example',
    methods: {
        onClick() {
            this.$router.push(`/profile/apex/origin/Facilitatur`);
        }
    }
}
</script>

<style>
.example{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.exampleBox{
    border: 4px #fff solid;
    background: rgba(2, 3, 7, 0.3);
    margin-bottom: -17px;
    border-bottom: 0px;
}
.exampleBox:hover{
    cursor: pointer;
}
.exampleSymbol{
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>