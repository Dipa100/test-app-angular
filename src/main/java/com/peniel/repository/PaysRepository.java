package com.peniel.repository;


import com.peniel.models.Pays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PaysRepository extends JpaRepository<Pays, Long> {


}
