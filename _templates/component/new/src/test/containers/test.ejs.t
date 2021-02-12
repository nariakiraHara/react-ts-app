---
to: "<%= componentType === 'container' ? `test/containers/${containerDir}/${componentName}/${componentName}.test.tsx` : null %>"
---
import renderer from 'react-test-renderer'
import <%= componentName %> from 'app/containers/<%= containerDir %>/<%= componentName %>'

describe('<%= componentName %>', () => {
  test('正常系', () => {
    const tree = renderer.create(<<%= componentName %> text={'テストテキスト'} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
