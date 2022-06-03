import reactComponent from './plop-generators/react-component.js'
import TaroComponent from './plop-generators/taro-component.js'

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // controller generator
  plop.setGenerator('react-component', reactComponent);
  plop.setGenerator('taro-component', TaroComponent);
};