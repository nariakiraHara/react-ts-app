import renderer from 'react-test-renderer'
import CardSimple from 'app/containers/common/CardSimple'

describe('CardSimple', () => {
  test('正常系', () => {
    const tree = renderer.create(<CardSimple><div></div></CardSimple>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
