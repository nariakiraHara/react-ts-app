---
to: "<%= componentType === 'component' ? `src/app/components/${componentName}/index.tsx` : null %>"
---
export { default } from './<%= componentName %>'