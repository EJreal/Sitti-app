package com.sittiapp.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.sittiapp.backend.services.*;
import com.sittiapp.backend.models.*;


@RestController
@RequestMapping("/tipos-identificaciones")
public class TipoIdentificacionController {

    @Autowired
    private TipoIdentificacionService tipoIdentificacionService;

    @GetMapping
    public List<TipoIdentificacion> getAllTiposIdentificaciones() {
        return tipoIdentificacionService.getAllTiposIdentificaciones();
    }

    @GetMapping("/{id}")
    public TipoIdentificacion getTipoIdentificacionById(@PathVariable Long id) {
        return tipoIdentificacionService.getTipoIdentificacionById(id);
    }

    @PostMapping
    public void saveTipoIdentificacion(@RequestBody TipoIdentificacion tipoIdentificacion) {
        tipoIdentificacionService.saveTipoIdentificacion(tipoIdentificacion);
    }

    @DeleteMapping("/{id}")
    public void deleteTipoIdentificacion(@PathVariable Long id) {
        tipoIdentificacionService.deleteTipoIdentificacion(id);
    }
}

