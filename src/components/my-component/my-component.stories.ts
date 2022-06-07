export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/MyComponent',
    parameters: {
      actions: {
        argTypesRegex: '^on.*',
        handles: ['click', 'myEvent'] // you can add custom events to this array to trigger actions
      }
    },
};

const Template = (args) => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;

export const Example = Template.bind({});
Example.args = {
  first: 'Winnie',
  middle: 'The',
  last: 'Pooh'
};
