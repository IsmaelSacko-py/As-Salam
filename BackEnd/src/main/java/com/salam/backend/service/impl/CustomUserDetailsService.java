package com.salam.backend.service.impl;

import com.salam.backend.model.Administrateur;
import com.salam.backend.model.Utilisateur;
import com.salam.backend.repository.AdministrateurRepository;
import com.salam.backend.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UtilisateurRepository<Utilisateur> utilisateurRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Utilisateur user = utilisateurRepository.findByTelephone(username);
        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }
        return new User(user.getTelephone(), user.getPassword(), Collections.singletonList(new SimpleGrantedAuthority(user.getProfil().getNom())));
    }
}
