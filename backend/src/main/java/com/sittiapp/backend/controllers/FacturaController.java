package com.sittiapp.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.sittiapp.backend.services.FacturaService;
import com.sittiapp.backend.models.Factura;

@RestController
@RequestMapping("/facturacion")
public class FacturaController {

    @Autowired
    private FacturaService facturaService;

    @GetMapping
    public List<Factura> getAllFacturas() {
        return facturaService.getAllFacturas();
    }

    @GetMapping("/{id}")
    public Factura getFacturaById(@PathVariable Long id) {
        return facturaService.getFacturaById(id);
    }
    
    @PostMapping
    public ResponseEntity<Factura> saveFactura(@RequestBody Factura factura) {
        Factura facturaCreada = facturaService.saveFactura(factura);
        return new ResponseEntity<>(facturaCreada, HttpStatus.CREATED);
    }
    
    @DeleteMapping("/{id}")
    public void deleteFactura(@PathVariable Long id) {
        facturaService.deleteFactura(id);
    }
}
