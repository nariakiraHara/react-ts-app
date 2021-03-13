import renderer from 'react-test-renderer'
import FormInput from 'app/components/FormInput'

describe('FormInput', () => {
  test('正常系', () => {
    const tree = renderer.create(<FormInput text={'テストテキスト'} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
