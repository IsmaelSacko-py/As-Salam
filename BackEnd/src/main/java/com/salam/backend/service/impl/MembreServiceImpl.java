//package com.salam.backend.service.impl;
//
//import com.salam.backend.model.Commande;
//import com.salam.backend.model.Membre;
//import com.salam.backend.repository.UtilisateurRepository;
//import com.salam.backend.service.MembreService;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//
//
//@Slf4j
//@Service
//public class MembreServiceImpl<Entity extends Membre> extends UtilisateurServiceImpl<Entity> implements MembreService<Entity>{
//
//
//    public MembreServiceImpl(UtilisateurRepository<Entity> utilisateurRepository) {
//        super(utilisateurRepository);
//    }
//
//    @Override
//    public Page<Commande> getCommandes(Pageable pageable) {
//        return null;
//    }
//}
