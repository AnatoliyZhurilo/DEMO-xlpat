import { shallowMount } from '@vue/test-utils'
import advancedSearch from '@/components/advancedSearch.vue'

describe('advancedSearch.vue', () => {
  test('renders select with options if passed undefined ', () => {
    const receivedRows = undefined
    const wrapper = shallowMount(advancedSearch, {
      propsData: { receivedRows }
    })
    expect(wrapper.html()).toContain(`<option value="AND">AND</option>`)
  })
})
