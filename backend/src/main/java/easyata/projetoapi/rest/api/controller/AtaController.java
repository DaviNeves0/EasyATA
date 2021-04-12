package easyata.projetoapi.rest.api.controller;

import easyata.projetoapi.rest.api.repository.AtaRepository;
import easyata.projetoapi.rest.api.model.AtaModel;

import easyata.projetoapi.rest.api.repository.AtaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="/ata")
public class AtaController {

    @Autowired
    AtaRepository ataRepository;

    @GetMapping("/atas")
    public List<AtaModel> listaAtas(){
        return ataRepository.findAll();
    }

    @GetMapping("/ata/{id}")
    public AtaModel listaAtaUnica(@PathVariable(value="id") long id){
        return ataRepository.findById(id);
    }

    @PostMapping("/saveAta")
    public AtaModel salvarAta(@RequestBody AtaModel ataModel){
        return ataRepository.save(ataModel);
    }

    @DeleteMapping("/ata")
    public void deletaAta(@RequestBody AtaModel ataModel){
        ataRepository.delete(ataModel);
    }

    @PutMapping("/ata")
    public AtaModel atualizaAta(@RequestBody AtaModel ataModel){
        return ataRepository.save(ataModel);
    }
}
