export interface TodoItemType {
  id: number;
  item: string;
  isCompleted: boolean;
  isEditMode: boolean;
}

export interface ReducerState {
  todos: TodoItemType[];
}
