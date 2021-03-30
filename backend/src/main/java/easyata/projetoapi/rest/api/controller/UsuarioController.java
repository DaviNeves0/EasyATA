package easyata.projetoapi.rest.api.controller;

import easyata.projetoapi.rest.api.repository.UsuarioRepository;
import easyata.projetoapi.rest.api.model.UsuarioModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="/api")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/usuarios")
    public List<UsuarioModel> listaUsuarios(){
        return usuarioRepository.findAll();
    }

    @GetMapping("/usuario/{id}")
    public UsuarioModel listaUsuarioUnico(@PathVariable(value="id") long id){
        return usuarioRepository.findById(id);
    }

    @PostMapping("/usuario")
    public UsuarioModel salvarUsuario(@RequestBody UsuarioModel usuarioModel){
        return usuarioRepository.save(usuarioModel);
    }

    @DeleteMapping("/usuario")
    public void deletaUsuario(@RequestBody UsuarioModel usuarioModel){
        usuarioRepository.delete(usuarioModel);
    }

    @PutMapping("/usuario")
    public UsuarioModel atualizaUsuario(@RequestBody UsuarioModel usuarioModel){
        return usuarioRepository.save(usuarioModel);
    }
}
