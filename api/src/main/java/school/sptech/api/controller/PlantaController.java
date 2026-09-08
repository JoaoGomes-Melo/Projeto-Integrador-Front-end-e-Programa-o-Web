package school.sptech.api.controller;

import school.sptech.api.exception.ValidacaoException;
import school.sptech.api.model.Planta;
import school.sptech.api.service.PlantaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/plantas")
public class PlantaController {

    private final PlantaService service;

    public PlantaController(PlantaService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Planta>> listar() {
        return ResponseEntity.ok(service.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) {
        Planta planta = service.buscarPorId(id);
        if (planta == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", "Planta não encontrada."));
        return ResponseEntity.ok(planta);
    }

    @PostMapping
    public ResponseEntity<?> criar(@RequestBody Planta planta) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.criar(planta));
        } catch (ValidacaoException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizar(@PathVariable Long id, @RequestBody Planta planta) {
        try {
            Planta atualizada = service.atualizar(id, planta);
            if (atualizada == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", "Planta não encontrada."));
            return ResponseEntity.ok(atualizada);
        } catch (ValidacaoException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(@PathVariable Long id) {
        if (!service.excluir(id)) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("erro", "Planta não encontrada."));
        return ResponseEntity.noContent().build();
    }
}