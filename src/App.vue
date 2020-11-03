<template>
  <div id="app">
    <AdvancedSearch @rowsChanged="updateRows"/>
    <CodeWrapper :data="rows"></CodeWrapper>
  </div>
</template>

<script>
import AdvancedSearch from './components/advancedSearch'
import CodeWrapper from "./components/codeWrapper";


export default {
  name: 'App',
  components: {
    AdvancedSearch,
    CodeWrapper
  },
  data(){
    return {
      rows: []
    }
  },
  methods: {
    updateRows(nextRows) {
      this.rows = nextRows
    }
  }
}
</script>

<style>

</style>
