
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
  prompt: async ({ prompter }) => {
    // ファイル生成時にエラーになることがあるため、キーをセットしておく
    const res = {
      componentType: null,
      containerDir: null,
      pageDir: null,
      componentName: null,
      device: null,
      pcLayout: null
    }
    Object.assign(res, await prompter.prompt(
      {
        type: 'select',
        name: 'componentType',
        message: 'どの種類のコンポネントを作る？',
        choices: ['component', 'container', 'page']
      }
    ))
    switch (res.componentType) {
      case 'container':
        Object.assign(res, await prompter.prompt(
          {
            type: 'select',
            name: 'containerDir',
            message: 'どのディレクトリに作る？',
            choices: [
              'auth',
              'blog'
            ]
          }
        ))
        break
      case 'page':
        Object.assign(res, await prompter.prompt(
          {
            type: 'input',
            name: 'pageDir',
            message: 'どのディレクトリに作る？',
            hint: '\n例）blog\n※ 空文字の場合、pages配下に作成されます'
          }
        ))
        break
    }
    Object.assign(res, await prompter.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'コンポネント名は？',
        validate: value => {
          if (value && /^[A-z0-9_-]+$/.test(value)) {
            return true
          }
          return false
        }
      }
    ]))
    return res
  }
}
