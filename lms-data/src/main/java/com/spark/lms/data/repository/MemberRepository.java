package com.spark.lms.data.repository;

import com.spark.lms.data.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    List<Member> findAllByOrderByFirstNameAscMiddleNameAscLastNameAsc();

    Long countByType(String type);
    Long countByGender(String gender);
}
