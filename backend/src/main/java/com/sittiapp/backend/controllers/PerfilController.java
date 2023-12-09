package com.sittiapp.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.sittiapp.backend.services.*;
import com.sittiapp.backend.models.*;

@RestController
@RequestMapping("/perfiles")
public class PerfilController {

    @Autowired
    private PerfilService perfilService;

    @GetMapping
    public List<Perfil> getAllPerfiles() {
        return perfilService.getAllPerfiles();
    }

    @GetMapping("/{id}")
    public Perfil getPerfilById(@PathVariable Long id) {
        return perfilService.getPerfilById(id);
    }

    @PostMapping
    public void savePerfil(@RequestBody Perfil perfil) {
        perfilService.savePerfil(perfil);
    }

    @DeleteMapping("/{id}")
    public void deletePerfil(@PathVariable Long id) {
        perfilService.deletePerfil(id);
    }
}
