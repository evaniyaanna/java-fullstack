package com.example.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.shop.Models.Product;
import com.example.shop.repository.ProductRepository;

@Controller
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/product_create")
    public String addProduct(Model model) {

        model.addAttribute("message", "Enter the product details");

        return "product";
    }

    @PostMapping("/save_product")
    public String saveProduct(Product product, Model model) {

        Product p = new Product();

        p.setName(product.getName());
        p.setDescription(product.getDescription());
        p.setPrice(product.getPrice());

        productRepository.save(p);

        model.addAttribute(
                "message",
                "The product " + product.getName()
                        + " is saved successfully"
        );

        return "product";
    }

    @GetMapping("/products")
    public String showProducts(Model model) {

        Iterable<Product> productList =
                productRepository.findAll();

        model.addAttribute("products", productList);

        return "products";
    }
}