package com.sittiapp.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("productos")
public class Producto {

    @Id
    private Long id;
    private String nombre;
    private String estado;
    private int valorUnitario;

    public Producto(Long id, String nombre, String estado, int valorUnitario) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.valorUnitario = valorUnitario;
    }

    public Producto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public int getValorUnitario() {
        return valorUnitario;
    }

    public void setValorUnitario(int valorUnitario) {
        this.valorUnitario = valorUnitario;
    }
}
