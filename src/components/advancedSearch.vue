<template>
  <div>
    <div v-for="(row, index) in rows" :key="index">
      <select v-if="index > 0" name="" :value="row.operator" v-model="row.operator">
        <option v-for="operator in operators" :value="operator" :key="operator">{{ operator }}</option>
      </select>
      <select name="" :value="row.syntax" v-model="row.syntax">
        <option v-for="option in textOptions" :value="option" :key="option">{{ option }}</option>
        <option v-for="option in syntaxOptions" :value="option" :key="option">{{ option }}</option>
        <option v-for="option in datesOptions" :value="option" :key="option">{{ option }}</option>
        <option v-for="option in namesOptions" :value="option" :key="option">{{ option }}</option>
        <option v-for="option in othersOptions" :value="option" :key="option">{{ option }}</option>
      </select>
      <input type="text"  v-model="row.keyword">
      <button>helper</button>
      <button @click="deleteRow(index)" v-if="index > 0">delete</button>
    </div>
    <button @click="addRow">add row</button>
  </div>
</template>

<script>
import codeHelper from './codeHelper'

const {textOptions,
  syntaxOptions,
  datesOptions,
  namesOptions,
  othersOptions} = codeHelper.getOptions()

export default {
  name: 'AdvancedSearch',
  data() {
    return {
      operators: [
        'AND',
        'OR',
        'NOT'
      ],
      textOptions,
      syntaxOptions,
      datesOptions,
      namesOptions,
      othersOptions,
      rows: [
        {
          syntax: 'Full Text',
          keyword: ''
        },
        {
          operator: 'AND',
          syntax: 'All Assignee',
          keyword: ''
        },
        {
          operator: 'AND',
          syntax: 'Publication Date',
          keyword: ''
        },
        {
          operator: 'AND',
          syntax: 'CPC/IPC',
          keyword: ''
        },
      ]
    }
  },
  mounted() {
    this.$emit('rowsChanged', this.rows)
  },
  methods: {
    addRow() {
      this.rows.push({
        operator: 'AND',
        syntax: 'CPC/IPC',
        keyword: ''
      })
    },
    deleteRow(index) {
      this.rows.splice(index, 1)
    }
  },
  watch: {
    rows(values) {
      this.$emit('rowsChanged', values)
    }
  }
}
</script>
