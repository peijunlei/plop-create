
const component = {
  description: "create taro component ",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "taro组件名称:",
      default: "hello",
      validate: (name) => name ? true : "name is required"
    },
    {
      type: "confirm",
      name: "needCss",
      message: "是否引入样式文件:",
      default: true
    },
  ],
  actions: (answer) => {
    const { needCss } = answer
    const actions = [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "./plop-templates/taro-component/index.tsx.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.config.ts",
        templateFile: "./plop-templates/taro-component/index.config.ts.hbs",
        skipIfExists: true,
      },

    ];
    needCss && (actions.push(
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.less",
        templateFile: "./plop-templates/taro-component/index.less.hbs",
        skipIfExists: true
      },
    ))
    return actions
  }
}
export default component