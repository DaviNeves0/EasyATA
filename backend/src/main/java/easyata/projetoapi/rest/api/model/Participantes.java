package easyata.projetoapi.rest.api.model;

import javax.persistence.*;
import java.io.Serializable;

@Table(name = "participantes")
@Entity
public class Participantes implements Serializable {
    //Cabeçalho
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    @JoinColumn(name = "ata_id")
    private Ata ata;

    @Column(nullable = false, length = 50)
    public String participante;

    @Column(nullable = false, length = 50)
    public String area;

    @Column(nullable = false, length = 50)
    public String email;

    @Column(nullable = false, length = 50)
    public String telefone;

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

    public String getParticipante() {
        return participante;
    }

    public void setParticipante(String participante) {
        this.participante = participante;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}
