package com.sittiapp.backend.services;

import com.sittiapp.backend.repositories.*;
import com.sittiapp.backend.models.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacturaDetalleService {

    @Autowired
    private FacturaDetalleRepository facturaDetalleRepository;

    public List<FacturaDetalle> getAllFacturaDetalles() {
        return (List<FacturaDetalle>) facturaDetalleRepository.findAll();
    }

    public FacturaDetalle getFacturaDetalleById(Long id) {
        return facturaDetalleRepository.findById(id).orElse(null);
    }

    public void saveFacturaDetalle(FacturaDetalle facturaDetalle) {
        facturaDetalleRepository.save(facturaDetalle);
    }

    public void deleteFacturaDetalle(Long id) {
        facturaDetalleRepository.deleteById(id);
    }
}
