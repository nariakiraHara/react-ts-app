import renderer from 'react-test-renderer'
import Header from 'app/components/Header'

describe('Header', () => {
  test('正常系 未ログイン', () => {
    const tree = renderer.create(<Header isLogin={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('正常系 ログイン済み', () => {
    const tree = renderer.create(<Header isLogin={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
