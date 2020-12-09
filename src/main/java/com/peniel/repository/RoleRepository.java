package com.peniel.repository;

import java.util.Optional;

import com.peniel.models.ERole;
import com.peniel.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}