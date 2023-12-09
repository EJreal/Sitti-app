package com.sittiapp.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.sittiapp.backend.repositories.*;
import com.sittiapp.backend.models.*;

@Service
public class TipoIdentificacionService {

    @Autowired
    private TipoIdentificacionRepository tipoIdentificacionRepository;

    public List<TipoIdentificacion> getAllTiposIdentificaciones() {
        return (List<TipoIdentificacion>) tipoIdentificacionRepository.findAll();
    }

    public TipoIdentificacion getTipoIdentificacionById(Long id) {
        return tipoIdentificacionRepository.findById(id).orElse(null);
    }

    public void saveTipoIdentificacion(TipoIdentificacion tipoIdentificacion) {
        tipoIdentificacionRepository.save(tipoIdentificacion);
    }

    public void deleteTipoIdentificacion(Long id) {
        tipoIdentificacionRepository.deleteById(id);
    }
}
