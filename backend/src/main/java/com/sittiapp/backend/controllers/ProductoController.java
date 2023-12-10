package com.sittiapp.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.sittiapp.backend.services.*;
import com.sittiapp.backend.models.*;


@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public List<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }

    @GetMapping("/{id}")
    public Producto getProductoById(@PathVariable Long id) {
        return productoService.getProductoById(id);
    }

    @PostMapping
    public void saveProducto(@RequestBody Producto producto) {
        productoService.saveProducto(producto);
    }

    @PutMapping("/{id}")
    public void updateProducto(@PathVariable Long id, @RequestBody Producto producto) {
        productoService.updateProducto(id, producto);
    }


    @DeleteMapping("/{id}")
    public void deleteProducto(@PathVariable Long id) {
        productoService.deleteProducto(id);
    }
}
