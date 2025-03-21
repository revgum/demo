import { env, localDev } from './config';
import { daprClient } from './dapr';
import type { Context } from './types';

export const context: Context = {
  env,
  dapr: daprClient,
  localDev,
};
