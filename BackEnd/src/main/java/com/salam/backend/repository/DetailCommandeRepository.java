package com.salam.backend.repository;

import com.salam.backend.model.DetailCommande;
import com.salam.backend.model.Produit;
import com.salam.backend.model.Vendeur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailCommandeRepository extends JpaRepository<DetailCommande, Integer> {

    @Query("select sum (details.montant * details.quantite) from DetailCommande details")
    double calculateTotalPrice();


    @Query("SELECT detail.produit FROM DetailCommande detail WHERE detail.produit.vendeur.id = ?1 AND detail.commande.paiement.statut = 1")
    Page<Produit> vendeurProduitsVendus(int vendeurId, Pageable pageable);
}
