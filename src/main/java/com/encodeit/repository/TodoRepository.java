package com.encodeit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.encodeit.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer> {

}
