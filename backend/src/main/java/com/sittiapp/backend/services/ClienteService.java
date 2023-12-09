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
        // Verifica si el cliente con el ID dado existe
        if (clienteRepository.existsById(id)) {
            // Obtén el cliente existente
            Cliente clienteExistente = clienteRepository.findById(id).orElse(null);

            if (clienteExistente != null) {
                // Actualiza los datos del cliente
                clienteExistente.setIdentificacion(cliente.getIdentificacion());
                clienteExistente.setRazonSocial(cliente.getRazonSocial());
                clienteExistente.setFechaRegistro(cliente.getFechaRegistro());
                clienteExistente.setEstado(cliente.getEstado());

                // Si el tipo de identificación ha cambiado, actualiza también el tipoIdentificacion
                if (!clienteExistente.getIdentificacion().equals(cliente.getIdentificacion())) {
                    clienteExistente.setTipoIdentificacion(cliente.getTipoIdentificacion());
                }

                // Guarda el cliente actualizado
                clienteRepository.save(clienteExistente);
            }
        }
        // Manejo adicional si el cliente no existe, por ejemplo, lanzar una excepción o realizar otra acción.
    }

    public void deleteCliente(Long id) {
        clienteRepository.deleteById(id);
    }
}
