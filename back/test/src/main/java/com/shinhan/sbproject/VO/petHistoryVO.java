package com.shinhan.sbproject.VO;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;


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
@Table(name = "pet_history")

public class petHistoryVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer PET_HISTORY_ID;
	@CreationTimestamp
	private Timestamp INSERT_DAY;
	private Integer PET_TIME;
	private Float DISTANCE;
	private Double START_LATITUDE;
	private Double START_LONGITUDE;
	
	@ManyToOne
	@JoinColumn(name = "USER_ID")
	private userVO user;
	@ManyToOne
	@JoinColumn(name = "SPOT_ID")
	private walkSpotVO spot;
	
	
}