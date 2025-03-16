import { component$ } from '@builder.io/qwik';
import { useForm, zodForm$ } from '@modular-forms/qwik';
import { MatReportFilled } from '@qwikest/icons/material';
import cn from 'classnames';
import { useFormAction, useFormLoader } from '~/routes/login/layout';
import type { LoginForm } from '~/types';
import { LoginSchema } from './schemas';

// (Server-side) Render the route/page and return it to the client.
export default component$(() => {
  // Perform form validation on the "Add Task" form on the client side.
  const [_, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(LoginSchema),
  });

  return (
    <Form class={cn('flex flex-col gap-2')}>
      <Field name="login">
        {(field, props) => (
          <div>
            <input
              {...props}
              type="text"
              value={field.value}
              class={cn(
                'p-2 border rounded-md w-full',
                field.error ? 'border-red-600 focus:border-red-600 text-red-600' : '',
              )}
            />
            {field.error && (
              <div class="flex items-center mt-2 p-2 text-sm text-red-600">
                <MatReportFilled />
                <span class="ml-1">{field.error}</span>
              </div>
            )}
          </div>
        )}
      </Field>
      <Field name="password">
        {(field, props) => (
          <div>
            <input
              {...props}
              type="password"
              value={field.value}
              class={cn(
                'p-2 border rounded-md w-full',
                field.error ? 'border-red-600 focus:border-red-600 text-red-600' : '',
              )}
            />
            {field.error && (
              <div class="flex items-center mt-2 p-2 text-sm text-red-600">
                <MatReportFilled />
                <span class="ml-1">{field.error}</span>
              </div>
            )}
          </div>
        )}
      </Field>
      <button type="submit" class="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
        Login
      </button>
    </Form>
  );
});
