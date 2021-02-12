---
to: "<%= componentType === 'container' ? `src/app/containers/${containerDir}/${componentName}/${componentName}.scss` : null %>"
---
@import 'src/app/scss/import/assets';

.<%= h.changeCase.camel(componentName) %> {
  // スタイルを書いてください
}
