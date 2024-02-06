package com.shinhan.sbproject.VO;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
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
@Table(name = "payment")

public class paymentVO {
	@Id
	private Integer PAY_NUM;
	@ManyToOne
	@JoinColumn(name = "STORE_ID")
	private storeVO store;
	@ManyToOne
	@JoinColumn(name = "BENEFIT_HISTORY_ID")
	private benefitVO benefit;
	@ManyToOne
	@JoinColumn(name = "USER_ID")
	private userVO USER;
	private Integer PRICE;
	@CreationTimestamp
	private Timestamp PAYMENT_DATE;
	@ManyToOne
	@JoinColumn(name = "RATING_CATEGORY_ID")
	private ratingCategoryVO ratingCategory;
	
}