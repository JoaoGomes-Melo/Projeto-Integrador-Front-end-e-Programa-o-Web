package school.sptech.api.repository;

import school.sptech.api.model.Planta;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class PlantaRepository {

    private final JdbcTemplate jdbcTemplate;

    public PlantaRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Planta> listarTodas() {
        String sql = "SELECT * FROM plantas ORDER BY id DESC";
        return jdbcTemplate.query(sql, (rs, rowNum) -> new Planta(
                rs.getLong("id"), rs.getString("nome"), rs.getString("especie"),
                rs.getString("status"), rs.getString("estagio"), rs.getString("local"),
                rs.getInt("rega_dias"), rs.getString("notas"), rs.getDate("criado_em").toLocalDate()
        ));
    }

    public Planta buscarPorId(Long id) {
        String sql = "SELECT * FROM plantas WHERE id = ?";
        List<Planta> resultado = jdbcTemplate.query(sql, (rs, rowNum) -> new Planta(
                rs.getLong("id"), rs.getString("nome"), rs.getString("especie"),
                rs.getString("status"), rs.getString("estagio"), rs.getString("local"),
                rs.getInt("rega_dias"), rs.getString("notas"), rs.getDate("criado_em").toLocalDate()
        ), id);
        return resultado.isEmpty() ? null : resultado.get(0);
    }

    public Long salvar(Planta planta) {
        String sql = "INSERT INTO plantas (nome, especie, status, estagio, local, rega_dias, notas) VALUES (?, ?, ?, ?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, planta.getNome());
            ps.setString(2, planta.getEspecie());
            ps.setString(3, planta.getStatus());
            ps.setString(4, planta.getEstagio());
            ps.setString(5, planta.getLocal());
            ps.setInt(6, planta.getRegaDias());
            ps.setString(7, planta.getNotas());
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int atualizar(Long id, Planta planta) {
        String sql = "UPDATE plantas SET nome=?, especie=?, status=?, estagio=?, local=?, rega_dias=?, notas=? WHERE id=?";
        return jdbcTemplate.update(sql, planta.getNome(), planta.getEspecie(), planta.getStatus(),
                planta.getEstagio(), planta.getLocal(), planta.getRegaDias(), planta.getNotas(), id);
    }

    public int excluir(Long id) {
        return jdbcTemplate.update("DELETE FROM plantas WHERE id = ?", id);
    }
}