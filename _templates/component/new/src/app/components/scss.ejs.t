---
to: "<%= componentType === 'component' ? `src/app/components/${componentName}/${componentName}.scss` : null %>"
---
@import 'src/app/scss/import/assets';

.<%= h.changeCase.camel(componentName) %> {
  // スタイルを書いてください
}
