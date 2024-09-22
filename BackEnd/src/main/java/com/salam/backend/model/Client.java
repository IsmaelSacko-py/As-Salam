package com.salam.backend.model;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorType;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorColumn(columnDefinition = "client", discriminatorType = DiscriminatorType.STRING)
public class Client extends Membre{
}
