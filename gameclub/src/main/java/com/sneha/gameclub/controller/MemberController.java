package com.sneha.gameclub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sneha.gameclub.model.Member;
import com.sneha.gameclub.repository.MemberRepository;

@RestController
@RequestMapping(path = "/members")
public class MemberController {

    @Autowired
    private MemberRepository repo;

    // Create new member
    @PostMapping
    public Member create(@RequestBody Member member) {
        member.setId(null); // Let database generate ID
        return repo.save(member);
    }

    // Get all members
    @GetMapping
    public List<Member> findAll() {
        return repo.findAll();
    }

    // Get member by id
    @GetMapping("/{id}")
    public Member findById(@PathVariable String id) {
        return repo.findById(id).orElse(null);
    }

    // Update member
    @PutMapping("/{id}")
    public Member update(@PathVariable String id, @RequestBody Member member) {
        Member oldMember = repo.findById(id).orElse(null);
        if (oldMember != null) {
            oldMember.setName(member.getName());
            oldMember.setPhoneNumber(member.getPhoneNumber());
            oldMember.setBalance(member.getBalance());
            return repo.save(oldMember);
        }
        return null;
    }

    // Delete member
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        repo.deleteById(id);
    }
}

