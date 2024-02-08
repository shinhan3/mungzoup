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

public class BenefitVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer benefitHistoryId;
	private Boolean benefitType;
	@ManyToOne
	@JoinColumn(name = "cardId")
	private CardVO card;
	@CreationTimestamp
	private Timestamp date;

	private Boolean isMaxBenefit;
	private Boolean confirmed;
	@ManyToOne
	@JoinColumn(name = "creditId")
	private CreditVO credit;
}