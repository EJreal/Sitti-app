package com.sittiapp.backend.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("clientes")
public class Cliente {
    
    @Id
    private Long cliente;
    private String identificacion;
    private String razonSocial;
    private Date fechaRegistro;
    private String estado;
    private Long tipoIdentificacion;

    // Getters and setters
    public Long getCliente() {
        return cliente;
    }

    public void setCliente(Long cliente) {
        this.cliente = cliente;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Long getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(Long tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }
}
