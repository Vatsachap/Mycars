package org.example.mycars;

import com.fasterxml.jackson.annotation.JsonTypeId;
import jakarta.persistence.*;

@Entity
@Table(name = "Mycars")
public class Mycars {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    String name;
    String model;
    int  power_in_hp;

    public Mycars(String model, String name, int power_in_hp) {
        this.model = model;
        this.name = name;
        this.power_in_hp = power_in_hp;
    }

    public Mycars() {

    }

    public String getName() {
        return name;
    }

    public String Model() {
        return model;
    }

    public int getPower_in_hp() {
        return power_in_hp;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public void setPower_in_hp(int power_in_hp) {
        this.power_in_hp = power_in_hp;
    }

    @Override
    public String toString() {
        return "Mycars{" +
                "name='" + name + '\'' +
                ", model=" + model +
                ", power_in_hp=" + power_in_hp +
                '}';
    }
}