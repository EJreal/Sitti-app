package com.sittiapp.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.sittiapp.backend.services.*;
import com.sittiapp.backend.models.*;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteService.getAllClientes();
    }

    @GetMapping("/{id}")
    public Cliente getClienteById(@PathVariable Long id) {
        return clienteService.getClienteById(id);
    }
    
    @PostMapping
    public void saveCliente(@RequestBody Cliente cliente) {
        clienteService.saveCliente(cliente);
    }
    
    @PutMapping("/{id}")
    public void updateCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        clienteService.updateCliente(id, cliente);
    }

    @DeleteMapping("/{id}")
    public void deleteCliente(@PathVariable Long id) {
        clienteService.deleteCliente(id);
    }
}
