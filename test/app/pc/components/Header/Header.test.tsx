import renderer from 'react-test-renderer'
import Header from 'app/components/Header'

describe('Header', () => {
  test('正常系', () => {
    const tree = renderer.create(<Header text={'テストテキスト'} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
