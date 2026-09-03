package com.example.myapp2.Repository;

import org.springframework.data.repository.CrudRepository;
import com.example.myapp2.Models.ProductModel;

public interface ProductRepository extends CrudRepository<ProductModel,Integer> {

}