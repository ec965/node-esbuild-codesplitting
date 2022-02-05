import _ from 'lodash';
import { world } from './world'

export function hello() {
  console.log('hello')
  console.log(_.random(0, 10));
  world();
}
