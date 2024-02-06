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
@Table(name = "benefit_history")

public class benefitVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer BENEFIT_HISTORY_ID;
	private Boolean BENEFIT_TYPE;
	@ManyToOne
	@JoinColumn(name = "CARD_ID")
	private cardVO card;
	@CreationTimestamp
	private Timestamp DATE;

	private Boolean IS_MAX_BENEFIT;
	private Boolean CONFIRMED;
	@ManyToOne
	@JoinColumn(name = "CREDIT_ID")
	private creditVO credit;
}