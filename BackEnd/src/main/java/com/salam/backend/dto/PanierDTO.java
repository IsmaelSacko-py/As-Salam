package com.salam.backend.dto;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
public class PanierDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private int id;
    private double totalPrix;

    private List<DetailPanierDTO> detailsPanier;
}
