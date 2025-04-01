package org.example.mycars;

import jakarta.persistence.*;

@Entity
public class Mycars {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String model;  // Ensure this is a String
    private int power_in_hp;

    // Constructors
    public Mycars() {}

    public Mycars(String name, String model, int power_in_hp) {
        this.name = name;
        this.model = model;
        this.power_in_hp = power_in_hp;
    }

    // Getters
    public String getName() { return name; }
    public String getModel() { return model; }
    public int getPower_in_hp() { return power_in_hp; }

    // Setters
    public void setName(String name) { this.name = name; }
    public void setModel(String model) { this.model = model; }  // Ensure this setter exists
    public void setPower_in_hp(int power_in_hp) { this.power_in_hp = power_in_hp; }

    @Override
    public String toString() {
        return "Mycars{name='" + name + "', model='" + model + "', power_in_hp=" + power_in_hp + "}";
    }
}