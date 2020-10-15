import { fluentProvide } from 'inversify-binding-decorators';
import {interfaces as inversifyInterfaces } from 'inversify';
export function provideSingleton(identifier:  inversifyInterfaces.ServiceIdentifier<unknown>) {
  return fluentProvide(identifier)
    .inSingletonScope()
    .done();
}