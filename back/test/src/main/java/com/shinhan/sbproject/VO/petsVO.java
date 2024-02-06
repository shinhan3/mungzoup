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

public class petsVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer PET_ID;
	private String NAME;
	private String IMAGE;
	private Boolean SEX;
	private Date BIRTH;
	private Float WEIGHT;
	private String BREED; 
	@ManyToOne
	@JoinColumn(name = "USER_ID")
	private userVO user;
	private Double PET_LATITUDE;
	private Double PET_LONGITUDE;

	
	
}