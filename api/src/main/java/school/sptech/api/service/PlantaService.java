package school.sptech.api.service;

import school.sptech.api.exception.ValidacaoException;
import school.sptech.api.model.Planta;
import school.sptech.api.repository.PlantaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantaService {

    private final PlantaRepository repository;

    public PlantaService(PlantaRepository repository) {
        this.repository = repository;
    }

    public List<Planta> listarTodas() {
        return repository.listarTodas();
    }

    public Planta buscarPorId(Long id) {
        return repository.buscarPorId(id);
    }

    public Planta criar(Planta planta) {
        validar(planta);
        Long id = repository.salvar(planta);
        return repository.buscarPorId(id);
    }

    public Planta atualizar(Long id, Planta planta) {
        if (repository.buscarPorId(id) == null) return null;
        validar(planta);
        repository.atualizar(id, planta);
        return repository.buscarPorId(id);
    }

    public boolean excluir(Long id) {
        if (repository.buscarPorId(id) == null) return false;
        repository.excluir(id);
        return true;
    }

    private void validar(Planta planta) {
        if (planta.getNome() == null || planta.getNome().trim().length() < 2)
            throw new ValidacaoException("O nome da planta deve ter pelo menos 2 caracteres.");
        if (planta.getEspecie() == null || planta.getEspecie().trim().isEmpty())
            throw new ValidacaoException("A espécie é obrigatória.");
        if (planta.getStatus() == null || !(planta.getStatus().equals("tenho") || planta.getStatus().equals("desejo")))
            throw new ValidacaoException("Status inválido: use 'tenho' ou 'desejo'.");
        if (planta.getEstagio() == null || planta.getEstagio().trim().isEmpty())
            throw new ValidacaoException("O estágio de crescimento é obrigatório.");
        if (planta.getLocal() == null || planta.getLocal().trim().isEmpty())
            throw new ValidacaoException("O local é obrigatório.");
        if (planta.getRegaDias() == null || planta.getRegaDias() < 1 || planta.getRegaDias() > 60)
            throw new ValidacaoException("O intervalo de rega deve ser entre 1 e 60 dias.");
    }
}