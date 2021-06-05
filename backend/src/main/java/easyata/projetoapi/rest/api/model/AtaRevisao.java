package easyata.projetoapi.rest.api.model;

import org.hibernate.annotations.Check;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Table(name = "revisao_ata")
@Entity
public class AtaRevisao implements Serializable {
    //Cabeçalho
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(nullable = false, length = 50)
    public Long id_ata;

    @Column(nullable = false, length = 50)
    public String assunto;

    @Column(nullable = false, length = 50)
    public String responsavel;

    @Column(nullable = false, length = 50)
    public String prazo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId_ata() { return id_ata; }

    public void setId_ata(Long id_ata) { this.id_ata = id_ata; }

    public String getAssunto() {
        return assunto;
    }

    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }

    public String getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }

    public String getPrazo() {
        return prazo;
    }

    public void setPrazo(String prazo) {
        this.prazo = prazo;
    }
}