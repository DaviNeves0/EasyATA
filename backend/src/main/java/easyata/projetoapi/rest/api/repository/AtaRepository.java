package easyata.projetoapi.rest.api.repository;

import easyata.projetoapi.rest.api.model.AtaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtaRepository extends JpaRepository<AtaModel, Long> {
    AtaModel findById(long id);
}
