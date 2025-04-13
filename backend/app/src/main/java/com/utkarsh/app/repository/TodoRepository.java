package com.utkarsh.app.repository;

import com.utkarsh.app.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
