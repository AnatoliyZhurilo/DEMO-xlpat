<template>
  <textArea :value.prop="code" disabled cols="60" rows="20"></textArea>
</template>

<script>
import codeHelper from "./codeHelper";

export default {
  name: "codeWrapper",
  props: ['data'],
  computed: {
    code() {
      const result =  codeHelper.transformDataToCode(this.data)
      console.log(result);
      return result
    }
  }
}
</script>

<style scoped>

</style>