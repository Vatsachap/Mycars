package org.example.mycars;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Mycars")
public class MycarsController {
    @Autowired
private MycarsRepository MycarsRepository;
public MycarsController(MycarsRepository MycarsRepository) {
    this.MycarsRepository = MycarsRepository;
}
    @GetMapping("/List")
    public List<Mycars> getCars() {
        return MycarsRepository.findAll();
    }
    @PostMapping("/add")
    public ResponseEntity<String> addCar(@RequestParam String name,
                                         @RequestParam String model,
                                         @RequestParam Integer hp) {
    Mycars car = new Mycars();
    car.setName(name);
    car.setModel(model);
    car.setPower_in_hp(hp);
    MycarsRepository.save(car);
    return ResponseEntity.status(HttpStatus.CREATED).body("Car added successfully" + car.toString());
    }
    @PutMapping("/updateCar")
    public ResponseEntity<String> updateCar(
            @RequestParam Long id,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) Integer power_in_hp) {

        Optional<Mycars> existingCar = MycarsRepository.findById(id);

        if (existingCar.isPresent()) {
            Mycars car = existingCar.get();

            if (name != null) {
                car.setName(name);
            }
            if (model != null) {
                car.setModel(model);
            }
            if (power_in_hp != null) {
                car.setPower_in_hp(power_in_hp);
            }

            MycarsRepository.save(car);
            return ResponseEntity.status(HttpStatus.OK).body("Car updated successfully: " + car.toString());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Car with ID " + id + " not found.");
        }
    }
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteCar(@RequestParam Long id) {
    Optional<Mycars> existingCar = MycarsRepository.findById(id);
    if (existingCar.isPresent()) {
        Mycars car = existingCar.get();
        MycarsRepository.delete(car);

    }
        return ResponseEntity.status(HttpStatus.OK).body("Car deleted successfully: ");
    }


}
