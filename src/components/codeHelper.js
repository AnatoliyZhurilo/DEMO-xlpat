export default {
  textOptions: {
    'Full Text': 'text',
    'Abstract': 'ab',
    'Claim': 'clm',
    'Title': 'ttl',
    'Description': 'desc',
    'Title/Abstract/Claim': 'tac',
    'Title/Abstract': 'ta',
  },
  syntaxOptions: {
    'CPC/IPC': '',
    'CPC': 'cpc',
    'IPC': 'ic',
    'US Main and further': '',
  },
  datesOptions: {
    'Publication Date': 'pd',
    'Application Date': 'ad',
    'Priority Date': 'pridate',
    'Expiration Date': 'expd',
  },
  namesOptions: {
    'All Assignee': '',
    'Assignee': '',
    'Assignee Current': 'ifi_name_current',
    'Assignee Original': 'ifi_name_original',
    'Inventor': 'inv',
  },
  othersOptions: {
    'Legal Status': 'ls',
    'Publication Kind Code': 'pnkind',
    'Publication Number': 'pn',
    'Application Number': 'annum',
    'Priority Number': 'prinum',
    'Priority Country': '',
    'Application Country': 'anctry',
  },

  getCode(key) {
    return {
      ...this.textOptions,
      ...this.syntaxOptions,
      ...this.datesOptions,
      ...this.namesOptions,
      ...this.othersOptions
    }[key]
  },

  getOptions() {
    return {
      textOptions: Object.keys(this.textOptions),
      syntaxOptions: Object.keys(this.syntaxOptions),
      datesOptions: Object.keys(this.datesOptions),
      namesOptions: Object.keys(this.namesOptions),
      othersOptions: Object.keys(this.othersOptions)
    }
  },

  transformDataToCode(data) {
    let codeString = ''
    data.forEach(item => {
      const {
        operator,
        syntax,
        keyword
      } = item
      if (syntax && keyword) {
        if (operator) {
          codeString = `(${codeString})` + operator
        }
        codeString = `${codeString}${this.getCode(syntax)}:(${keyword})`
      }
    })

    return !codeString ? '' : `(${codeString})`
  }
}