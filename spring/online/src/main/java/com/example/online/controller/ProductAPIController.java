package com.example.online.controller;

import com.example.online.Models.Product;
import com.example.online.Repository.ProductRepository;
import com.example.online.exception.ProductNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductAPIController {

    @Autowired
    private ProductRepository productRepository;


    // Add a product
    @PostMapping("/addproduct")
    public Product addProduct(@RequestBody Product product) {

        return productRepository.save(product);
    }


    // View all products
    @GetMapping("/listproduct")
    public List<Product> listProduct() {

        return productRepository.findAll();
    }


    // View product by ID
    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable Integer id) {

        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }


    // Update product by ID
    @PutMapping("/updateproduct/{id}")
    public Product updateProduct(
            @PathVariable Integer id,
            @RequestBody Product productDetails) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));

        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setExpirydate(productDetails.getExpirydate());
        product.setCategory(productDetails.getCategory());
        product.setStock(productDetails.getStock());

        return productRepository.save(product);
    }


    // Delete product by ID
    @DeleteMapping("/deleteproduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));

        productRepository.delete(product);

        return ResponseEntity.ok("Product deleted successfully");
    }


    // Search products using keyword
    @GetMapping("/search")
    public List<Product> searchProduct(
            @RequestParam String keyword) {

        return productRepository.findAllByKeyword(keyword);
    }
}