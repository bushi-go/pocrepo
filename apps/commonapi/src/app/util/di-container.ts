import 'reflect-metadata';

import { Container} from 'inversify';

import {buildProviderModule} from 'inversify-binding-decorators';

import '../poi';

const DI_CONTAINER = new Container();

DI_CONTAINER.load(buildProviderModule());

export { DI_CONTAINER };