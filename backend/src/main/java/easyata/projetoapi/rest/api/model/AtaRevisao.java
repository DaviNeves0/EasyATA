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

    @ManyToOne
    @JoinColumn(name = "ata_id")
    private Ata ata;

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

    public Ata getAta() {
        return ata;
    }

    public void setAta(Ata ata) {
        this.ata = ata;
    }

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