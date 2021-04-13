package easyata.projetoapi.rest.api.model;

import javax.persistence.*;
import java.io.Serializable;

@Table(name = "dados_ata")
@Entity
public class Ata implements Serializable {
    //Cabeçalho
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    @Column(nullable = false, length = 50)
    public String data;

    @Column(nullable = false, length = 50)
    public String inicio;

    @Column(nullable = false, length = 50)
    public String fim;

    @Column(nullable = false, length = 50)
    public String local;

    //Corpo

    @Column(nullable = false, length = 50)
    public String projeto;

    @Column(nullable = false, length = 50)
    public String participante;

    @Column(nullable = false, length = 50)
    public String area;

    @Column(nullable = false, length = 50)
    public String email;

    @Column(nullable = false, length = 50)
    public String telefone;

    @Column(nullable = false, length = 50)
    public String pauta;

    //corpo2

    @Column(nullable = false, length = 500)
    public String assunto;

    @Column(nullable = false, length = 50)
    public String responsavel;

    @Column(nullable = false, length = 50)
    public String prazo;

    @Column(nullable = false, length = 50)
    public String distribuicao;

    //get & set


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getData() { return data; }

    public void setData(String data) { this.data = data; }

    public String getInicio() { return inicio; }

    public void setInicio(String inicio) { this.inicio = inicio; }

    public String getFim() { return fim; }

    public void setFim(String fim) { this.fim = fim;}

    public String getLocal() { return local; }

    public void setLocal(String local) { this.local = local; }

    public String getProjeto() { return projeto; }

    public void setProjeto(String projeto) { this.projeto = projeto; }

    public String getParticipante() { return participante; }

    public void setParticipante(String participante) { this.participante = participante; }

    public String getArea() { return area; }

    public void setArea(String area) { this.area = area; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getPauta() { return pauta; }

    public void setPauta(String pauta) { this.pauta = pauta; }

    public String getAssunto() { return assunto; }

    public void setAssunto(String assunto) { this.assunto = assunto; }

    public String getResponsavel() { return responsavel; }

    public void setResponsavel(String responsavel) { this.responsavel = responsavel; }

    public String getPrazo() { return prazo; }

    public void setPrazo(String prazo) { this.prazo = prazo; }

    public String getDistribuicao() { return distribuicao; }

    public void setDistribuicao(String distribuicao) { this.distribuicao = distribuicao; }
}
