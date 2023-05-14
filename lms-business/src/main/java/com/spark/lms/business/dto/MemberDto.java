package com.spark.lms.business.dto;

import com.spark.lms.data.model.Member;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto {

    private Long id;
    private String type;
    private String firstName;
    private String middleName;
    private String lastName;
    private String gender;
    private Date dateOfBirth;
    private Date joiningDate;
    private String contact;
    private String email;

    public MemberDto(@NotNull String type, @NotNull String firstName, @NotNull String middleName, @NotNull String lastName,
                     @NotNull String gender, @NotNull Date dateOfBirth, @NotNull Date joiningDate) {
        super();
        this.type = type;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.joiningDate = joiningDate;
    }

    public static MemberDto fromMember(Member member) {
        MemberDto memberDto = new MemberDto();
        memberDto.setId(member.getId());
        memberDto.setType(member.getType());
        memberDto.setFirstName(member.getFirstName());
        memberDto.setMiddleName(member.getMiddleName());
        memberDto.setLastName(member.getLastName());
        memberDto.setGender(member.getGender());
        memberDto.setDateOfBirth(member.getDateOfBirth());
        memberDto.setJoiningDate(member.getJoiningDate());
        memberDto.setContact(member.getContact());
        memberDto.setEmail(member.getEmail());
        return memberDto;
    }

    public static Member toMember(MemberDto memberDto) {
        Member member = new Member();
        member.setId(memberDto.getId());
        member.setType(memberDto.getType());
        member.setFirstName(memberDto.getFirstName());
        member.setMiddleName(memberDto.getMiddleName());
        member.setLastName(memberDto.getLastName());
        member.setGender(memberDto.getGender());
        member.setDateOfBirth(memberDto.getDateOfBirth());
        member.setJoiningDate(memberDto.getJoiningDate());
        member.setContact(memberDto.getContact());
        member.setEmail(memberDto.getEmail());
        return member;
    }
}
