package com.sittiapp.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.sittiapp.backend.repositories.ClienteRepository;
import com.sittiapp.backend.models.Cliente;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> getAllClientes() {
        return (List<Cliente>) clienteRepository.findAll();
    }

    public Cliente getClienteById(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public void saveCliente(Cliente cliente) {
        clienteRepository.save(cliente);
    }

    public void updateCliente(Long id, Cliente cliente) {
        if (clienteRepository.existsById(id)) {
            cliente.setCliente(id);
            clienteRepository.save(cliente);
        }
    }

    public void deleteCliente(Long id) {
        clienteRepository.deleteById(id);
    }
}
