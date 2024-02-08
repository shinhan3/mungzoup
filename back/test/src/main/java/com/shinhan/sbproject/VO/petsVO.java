package com.shinhan.sbproject.VO;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Builder
@Entity
@Table(name = "pets")

public class PetsVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer petId;
	private String name;
	private String image;
	private Boolean sex;
	private Date birth;
	private Float weight;
	private String breed; 
	@ManyToOne
	@JoinColumn(name = "userId")
	private UserVO user;
	private Double petLatitude;
	private Double petLongitude;

	
	
}