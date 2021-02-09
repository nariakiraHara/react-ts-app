---
to: "<%= componentType === 'container' ? `src/app/containers/${containerDir}/${componentName}/index.tsx` : null %>"
---
export { default } from './<%= componentName %>'
