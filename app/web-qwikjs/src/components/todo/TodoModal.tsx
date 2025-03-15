import { type Signal, component$ } from '@builder.io/qwik';
import { cn } from '@qwik-ui/utils';
import { MatCancelFilled } from '@qwikest/icons/material';
import { Modal, buttonVariants } from '~/components/ui';
import type { Todo } from '~/types';
import TodoForm from './TodoForm';

// TODO: pass in Todo from clicking edit button on a todo item?
export default component$(({ show, todo }: { show: Signal<boolean>; todo: Todo }) => {
  return (
    <Modal.Panel class="max-w-sm rounded-xl">
      <Modal.Title>Edit Todo</Modal.Title>
      <Modal.Description>
        Make changes to your todo here. Click save when you're done.
      </Modal.Description>
      <TodoForm modalVisible={show} todo={todo} classList="mt-6" />
      <Modal.Close
        class={cn(
          buttonVariants({ size: 'icon', look: 'link' }),
          'absolute right-3 top-2',
        )}
        type="submit"
      >
        <MatCancelFilled class="h-6 w-6 text-red-500" />
      </Modal.Close>
    </Modal.Panel>
  );
});
