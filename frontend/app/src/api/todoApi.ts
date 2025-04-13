import axios from "axios";
import { Todo } from "../types/todo";

const BASE_URL = "http://localhost:8080/api/todos";

export const getTodos = () => axios.get<Todo[]>(BASE_URL);
export const createTodo = (todo: Todo) => axios.post<Todo>(BASE_URL, todo);
export const updateTodo = (id: number, todo: Todo) => axios.put<Todo>(`${BASE_URL}/${id}`, todo);
export const deleteTodo = (id: number) => axios.delete(`${BASE_URL}/${id}`);
