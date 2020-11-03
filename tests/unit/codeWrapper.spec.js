// import { shallowMount } from '@vue/test-utils'
import codeHelper from '@/components/codeHelper'

describe('codeWrapper.vue', () => {
  test('returns nothing if empty objects', () => {
    const data = [
      {},
      {}
    ]
    expect(codeHelper.transformDataToCode(data)).toBe('')
  })

  test(`returns code`, () => {
    const data = [
      {
        syntax: 'Full Text',
        keyword: 'some'
      },
    ]
    expect(codeHelper.transformDataToCode(data)).toBe('(text:(some))')
  })

  test(`returns code`, () => {
    const data = [
      {
        syntax: 'Full Text',
        keyword: 'some'
      },
      {
        operator: 'AND',
        syntax: 'Publication Date',
        keyword: 'date'
      },
    ]
    expect(codeHelper.transformDataToCode(data)).toBe('((text:(some))ANDpd:(date))')
  })

  test(`returns code`, () => {
    const data = [
      {
        syntax: 'Full Text',
        keyword: 'some'
      },
      {
        operator: 'AND',
        syntax: 'Publication Date',
        keyword: 'date'
      },
      {
        operator: 'AND',
        syntax: 'CPC',
        keyword: 'classification'
      },
    ]
    expect(codeHelper.transformDataToCode(data)).toBe('(((text:(some))ANDpd:(date))ANDcpc:(classification))')
  })

  test(`returns code`, () => {
    const data = [
      {
        syntax: 'Full Text',
        keyword: 'some'
      },
      {
        operator: 'AND',
        syntax: 'Publication Date',
        keyword: 'date'
      },
      {
        operator: 'AND',
        syntax: 'CPC',
        keyword: 'classification'
      },
      {
        operator: 'AND',
        syntax: 'CPC',
        keyword: 'classification'
      },
    ]
    expect(codeHelper.transformDataToCode(data)).toBe('((((text:(some))ANDpd:(date))ANDcpc:(classification))ANDcpc:(classification))')
  })
})
