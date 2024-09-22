package com.salam.backend.model;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorType;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@DiscriminatorColumn(columnDefinition = "vendeur", discriminatorType = DiscriminatorType.STRING)

public class Vendeur extends Membre{

}
