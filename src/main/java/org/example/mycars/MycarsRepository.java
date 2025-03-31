package org.example.mycars;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MycarsRepository  extends JpaRepository<Mycars, Long> {
    void deleteByMakeAndModel(String name, String model);
}
