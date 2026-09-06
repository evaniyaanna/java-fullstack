package com.example.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.library.Models.Member;
import com.example.library.Repository.MemberRepository;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public Member registerMember(Member member) {

        return memberRepository.save(member);
    }

    public boolean emailExists(String email) {

        return memberRepository.existsByEmail(email);
    }
}