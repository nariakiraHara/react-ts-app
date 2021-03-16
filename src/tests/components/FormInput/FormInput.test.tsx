import renderer from 'react-test-renderer'
import FormInput from 'app/components/FormInput'

describe('FormInput', () => {
  test('正常系 type=text', () => {
    const tree = renderer.create(<FormInput type={'text'} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('正常系 type=email', () => {
    const tree = renderer.create(<FormInput type={'email'} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('正常系 type=password', () => {
    const tree = renderer.create(<FormInput type={'password'} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
