package com.salam.backend.repository;

import com.salam.backend.enumeration.EtatCommande;
import com.salam.backend.enumeration.EtatPaiement;
import com.salam.backend.model.Commande;
import com.salam.backend.model.Paiement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Integer> {
    Page<Commande> getCommandeByClientIdOrderByDateDesc(int clientId, Pageable pageable);
    Page<Commande> getCommandeByVendeurIdOrderByDateDesc(int clientId, Pageable pageable);

    @Query("SELECT MONTH(c.date) AS month, COUNT(c) AS salesCount FROM Commande c WHERE c.vendeur.id = ?1 AND c.paiement.statut = ?2 GROUP BY MONTH(c.date) ORDER BY month")
    List<Object[]> countSalesByMonth(int vendeurId, EtatPaiement statut);

    @Query("SELECT MONTH(c.date) AS month, " +
            "SUM(SIZE(c.detailsCommande)) AS productCount " +
            "FROM Commande c " +
            "WHERE c.vendeur.id = ?1 AND c.paiement.statut = ?2 " +
            "GROUP BY MONTH(c.date) ORDER BY month")
    List<Object[]> countProductSalesByMonth(int vendeurId, EtatPaiement statut);

    @Query("SELECT SUM(SIZE(c.detailsCommande)) AS productCount " +
            "FROM Commande c " +
            "WHERE c.vendeur.id = ?1 AND c.paiement.statut = ?2 " +
            "AND EXTRACT(MONTH FROM c.date) = EXTRACT(MONTH FROM CURRENT_DATE) " +
            "AND EXTRACT(YEAR FROM c.date) = EXTRACT(YEAR FROM CURRENT_DATE)")
    Long countProductSalesInCurrentMonth(int vendeurId, EtatPaiement statut);


    @Query("SELECT MONTH(c.date) AS month, COUNT(c) AS salesCount FROM Commande c WHERE c.vendeur.id = ?1 AND c.statut = ?2 GROUP BY MONTH(c.date) ORDER BY month")
    List<Object[]> countOrderCancelByMonth(int vendeurId, EtatCommande statut);


//    @Query("SELECT MONTH(c.date) AS month, COUNT(c) AS salesCount FROM Commande c WHERE c.vendeur.id = ?1 AND c.statut = ?2 GROUP BY MONTH(c.date) ORDER BY month")
//    List<Object[]> countSalesByMonth(int vendeurId, EtatCommande statut);


}
