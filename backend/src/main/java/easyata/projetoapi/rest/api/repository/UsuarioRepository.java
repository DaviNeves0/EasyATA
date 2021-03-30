package easyata.projetoapi.rest.api.repository;

import easyata.projetoapi.rest.api.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {

    UsuarioModel findById(long id);
}
