---
to: "<%= componentType === 'page' ? `src/app/pc/pages/${pageDir}/${componentName}.scss` : null %>"
---
@import 'src/app/scss/import/assets';

.p- {
  // スタイルを書いてください
  &block {
    &__element {
      &--modifier {
        
      }
    }
  }
}
