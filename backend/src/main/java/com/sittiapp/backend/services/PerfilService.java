package com.sittiapp.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.sittiapp.backend.repositories.*;
import com.sittiapp.backend.models.*;

@Service
public class PerfilService {

    @Autowired
    private PerfilRepository perfilRepository;

    public List<Perfil> getAllPerfiles() {
        return (List<Perfil>) perfilRepository.findAll();
    }

    public Perfil getPerfilById(Long id) {
        return perfilRepository.findById(id).orElse(null);
    }

    public void savePerfil(Perfil perfil) {
        perfilRepository.save(perfil);
    }

    public void deletePerfil(Long id) {
        perfilRepository.deleteById(id);
    }
}

