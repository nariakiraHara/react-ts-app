---
to: "<%= componentType === 'page' ? `test/pages/${pageDir}/${componentName}.test.tsx` : null %>"
---
import renderer from 'react-test-renderer'
import Page from 'app/pages/<%= pageDir ? pageDir + '/' : '' %><%= componentName %>'

describe('<%= componentName %>', () => {
  test('正常系', () => {
    const tree = renderer.create(<Page isJobUser={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
