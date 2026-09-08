package com.example.myapp2.controller;

import com.example.myapp2.Models.Product;
import com.example.myapp2.Repository.ProductRepository;
import com.example.myapp2.exception.ProductNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3002")
public class ProductAPIController {

    @Autowired
    private ProductRepository productRepository;

   
    @PostMapping("/api/addproduct")
    public Product newProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    
    
    @GetMapping("/api/listproduct")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    
    @GetMapping("/api/product/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @PutMapping("/api/updateproduct/{id}")
    public Product updateProduct(
            @RequestBody Product newProduct,
            @PathVariable Integer id) {

        return productRepository.findById(id)
                .map(product -> {

                    product.setName(newProduct.getName());
                    product.setDescription(newProduct.getDescription());
                    product.setPrice(newProduct.getPrice());
                    product.setExpirydate(newProduct.getExpirydate());

                    return productRepository.save(product);

                })
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    
    @DeleteMapping("/api/deleteproduct/{id}")
    public String deleteProduct(@PathVariable Integer id) {

        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException(id);
        }

        productRepository.deleteById(id);

        return "Product with id " + id + " has been deleted successfully.";
    }

   
    @GetMapping("/api/search")
    public List<Product> searchProducts(
            @RequestParam("keyword") String keyword) {

        return productRepository.findAllByKeyword(keyword);
    }
}