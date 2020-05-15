module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/index.tsx',
        templateFile: './templates/Component/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          './src/components/{{pascalCase name}}/index.module.scss',
        templateFile: './templates/Component/index.module.scss.hbs',
      },
      {
        type: 'add',
        path: './src/components/index.ts',
        templateFile: './templates/re-export.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: './src/components/index.ts',
        pattern: '/* PLOP_INJECT_REEXPORT */',
        template: "export * from './{{pascalCase name}}';",
      },
    ],
  });
};
