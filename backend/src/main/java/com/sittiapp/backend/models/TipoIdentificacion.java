package com.sittiapp.backend.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("tipos_identificaciones")
public class TipoIdentificacion {
    @Id
    private Long tipoIdentificacion;
    private String abreviatura;
    private String descripcion;

    // Getters and setters
    public Long getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(Long tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }

    public String getAbreviatura() {
        return abreviatura;
    }

    public void setAbreviatura(String abreviatura) {
        this.abreviatura = abreviatura;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
