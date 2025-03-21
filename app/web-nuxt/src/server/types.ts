import type { DaprClient } from '@dapr/dapr';

export type Context = {
  env: 'development' | 'staging' | 'production';
  dapr: DaprClient;
  localDev: boolean;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  due_at?: string | null;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
};
