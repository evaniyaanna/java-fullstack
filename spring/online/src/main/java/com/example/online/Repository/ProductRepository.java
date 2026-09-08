package com.example.online.Repository;

import com.example.online.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("""
           SELECT p FROM Product p
           WHERE p.name LIKE %:keyword%
           OR p.description LIKE %:keyword%
           OR p.category LIKE %:keyword%
           """)
    List<Product> findAllByKeyword(@Param("keyword") String keyword);
}