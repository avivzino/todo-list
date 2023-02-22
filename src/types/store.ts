export interface TodoItemType {
  id: number;
  item: string;
  completed: boolean;
  editMode: boolean;
}

export interface ReducerState {
  todos: TodoItemType[];
}
