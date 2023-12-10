package com.sittiapp.backend.controllers;

import com.sittiapp.backend.services.FacturaDetalleService;
import com.sittiapp.backend.models.FacturaDetalle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/facturacion/detalle")
public class FacturaDetalleController {

    @Autowired
    private FacturaDetalleService facturaDetalleService;

    @GetMapping
    public List<FacturaDetalle> getAllFacturaDetalles() {
        return facturaDetalleService.getAllFacturaDetalles();
    }

    @GetMapping("/{id}")
    public FacturaDetalle getFacturaDetalleById(@PathVariable Long id) {
        return facturaDetalleService.getFacturaDetalleById(id);
    }

    @PostMapping
    public void saveFacturaDetalle(@RequestBody FacturaDetalle facturaDetalle) {
        facturaDetalleService.saveFacturaDetalle(facturaDetalle);
    }

    @DeleteMapping("/{id}")
    public void deleteFacturaDetalle(@PathVariable Long id) {
        facturaDetalleService.deleteFacturaDetalle(id);
    }
}
