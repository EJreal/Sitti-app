package com.sittiapp.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.sittiapp.backend.models.Producto;
import com.sittiapp.backend.repositories.ProductoRepository;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> getAllProductos() {
        return (List<Producto>) productoRepository.findAll();
    }

    public Producto getProductoById(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    public void saveProducto(Producto producto) {
         productoRepository.save(producto);
    }

    public void updateProducto(Long id, Producto producto) {
        if (productoRepository.existsById(id)) {
            producto.setId(id);
            productoRepository.save(producto);
        }
    }

    public void deleteProducto(Long id) {
        productoRepository.deleteById(id);
    }
}
