package com.sittiapp.backend.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

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

    public ResponseEntity<Producto> getProductoById(@PathVariable Long id) {
        Optional<Producto> productoOptional = productoService.getProductoById(id);

        if (productoOptional.isPresent()) {
            Producto producto = productoOptional.get();
            return new ResponseEntity<>(producto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public void saveProducto(@RequestBody Producto producto) {
        productoService.saveProducto(producto);
    }

    @DeleteMapping("/{id}")
    public void deleteProducto(@PathVariable Long id) {
        productoService.deleteProducto(id);
    }
}
