package com.sneha.gameclub.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sneha.gameclub.model.Member;

public interface MemberRepository extends MongoRepository<Member, String> {
}
