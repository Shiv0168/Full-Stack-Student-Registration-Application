package com.encodeit.service;

import java.util.List;

import com.encodeit.entity.Todo;

public interface TodoService {

	Todo createTodo(Todo todo);

	List<Todo> listAllTodo();

	Todo getTodoById(int id);

	Todo updateTodo(int id, Todo todo);

	void deleteTodo(int id);
}
