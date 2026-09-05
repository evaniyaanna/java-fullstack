package com.example.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

import com.example.student.Models.student;

import java.util.List;

public interface studentRepository extends JpaRepository<student, Integer> {

    @Query("SELECT s FROM student s WHERE LOWER(s.name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<student> findAllByKeyword(@Param("keyword") String keyword);
}