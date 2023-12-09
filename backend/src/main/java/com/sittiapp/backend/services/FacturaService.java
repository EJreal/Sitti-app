package com.sittiapp.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.sittiapp.backend.repositories.*;
import com.sittiapp.backend.models.*;

@Service
public class FacturaService {

    @Autowired
    private FacturaRepository facturaRepository;

    public List<Factura> getAllFacturas() {
        return (List<Factura>) facturaRepository.findAll();
    }

    public Factura getFacturaById(Long id) {
        return facturaRepository.findById(id).orElse(null);
    }

    public void saveFactura(Factura factura) {
        facturaRepository.save(factura);
    }

    public void deleteFactura(Long id) {
        facturaRepository.deleteById(id);
    }
}
