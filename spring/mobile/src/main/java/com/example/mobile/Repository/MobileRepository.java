package com.example.mobile.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.mobile.Models.Mobile;

public interface MobileRepository extends JpaRepository<Mobile, Integer> {

    // Query 1: All phone names and prices
    @Query("SELECT m.name, m.price FROM Mobile m")
    Iterable<Object[]> getAllNamesAndPrices();

    // Query 2: Phones below ₹20,000
    @Query("SELECT m FROM Mobile m WHERE m.price < 20000")
    Iterable<Mobile> getPhonesBelow20000();

    // Query 3: Total phones grouped by type
    @Query("SELECT m.type, COUNT(m) FROM Mobile m GROUP BY m.type")
    Iterable<Object[]> getPhoneCountByType();
}