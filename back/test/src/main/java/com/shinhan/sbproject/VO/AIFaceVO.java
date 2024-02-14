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
@Table(name = "ai_face")

public class AIFaceVO {
	@Id
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String protectionId;
	private String breed;
	private String img;
	private String shelter;
	// private String outputValue;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	private UserVO user;
	
	@CreationTimestamp
	private Timestamp aiFaceInsertDay;
	
	
}