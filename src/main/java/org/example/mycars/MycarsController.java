package org.example.mycars;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/Mycars")
public class MycarsController {
private MycarsRepository MycarsRepository;
public MycarsController(MycarsRepository MycarsRepository) {
    this.MycarsRepository = MycarsRepository;
}
    @GetMapping("/List")
    public List<Mycars> getCars() {
        return MycarsRepository.findAll();
    }
}
