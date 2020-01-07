<template>
  <div id="app">
    啦啦啦
    <PbulicModel></PbulicModel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PbulicModel from '@/components/public_model.vue'

@Component({
  components: {
    PbulicModel
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
