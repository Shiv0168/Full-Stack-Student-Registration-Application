package com.encodeit.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.encodeit.entity.Todo;
import com.encodeit.repository.TodoRepository;
import com.encodeit.service.TodoService;

@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	private TodoRepository todoRepository;

	@Override
	public Todo createTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	@Override
	public List<Todo> listAllTodo() {
		return todoRepository.findAll();
	}

	@Override
	public Todo getTodoById(int id) {
		return todoRepository.findById(id).get();
	}

	@Override
	public Todo updateTodo(int id, Todo todo) {
		Todo todo2 = todoRepository.findById(id).get();

		todo2.setTitle(todo.getTitle());
		todo2.setDescription(todo.getDescription());

		Todo updatedTodo = todoRepository.save(todo2);
		return updatedTodo;
	}

	@Override
	public List<Todo> deleteTodo(int id) {
		todoRepository.deleteById(id);
		return todoRepository.findAll();
	}

}
