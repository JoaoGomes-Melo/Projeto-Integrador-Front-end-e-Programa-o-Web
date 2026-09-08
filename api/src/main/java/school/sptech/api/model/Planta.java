package school.sptech.api.model;

import java.time.LocalDate;

public class Planta {
    private Long id;
    private String nome;
    private String especie;
    private String status;
    private String estagio;
    private String local;
    private Integer regaDias;
    private String notas;
    private LocalDate criadoEm;

    public Planta() {}

    public Planta(Long id, String nome, String especie, String status, String estagio,
                  String local, Integer regaDias, String notas, LocalDate criadoEm) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.status = status;
        this.estagio = estagio;
        this.local = local;
        this.regaDias = regaDias;
        this.notas = notas;
        this.criadoEm = criadoEm;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getEspecie() { return especie; }
    public void setEspecie(String especie) { this.especie = especie; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getEstagio() { return estagio; }
    public void setEstagio(String estagio) { this.estagio = estagio; }
    public String getLocal() { return local; }
    public void setLocal(String local) { this.local = local; }
    public Integer getRegaDias() { return regaDias; }
    public void setRegaDias(Integer regaDias) { this.regaDias = regaDias; }
    public String getNotas() { return notas; }
    public void setNotas(String notas) { this.notas = notas; }
    public LocalDate getCriadoEm() { return criadoEm; }
    public void setCriadoEm(LocalDate criadoEm) { this.criadoEm = criadoEm; }
}
