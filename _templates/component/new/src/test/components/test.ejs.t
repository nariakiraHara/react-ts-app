---
to: "<%= componentType === 'component' ? `src/tests/components/${componentName}/${componentName}.test.tsx` : null %>"
---
import renderer from 'react-test-renderer'
import <%= componentName %> from 'app/components/<%= componentName %>'

describe('<%= componentName %>', () => {
  test('正常系', () => {
    const tree = renderer.create(<<%= componentName %> text={'テストテキスト'} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
