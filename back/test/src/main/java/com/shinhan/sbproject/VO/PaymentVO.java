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
@Table(name = "payment")

public class PaymentVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer PAY_NUM;
	@ManyToOne
	@JoinColumn(name = "storeId")
	private StoreVO store;
	@ManyToOne
	@JoinColumn(name = "benefitHistoryId")
	private BenefitVO benefit;
	@ManyToOne
	@JoinColumn(name = "userId")
	private UserVO user;
	private Integer price;
	@CreationTimestamp
	private Timestamp paymentDate;
	@ManyToOne
	@JoinColumn(name = "ratingCategoryId")
	private RatingCategoryVO ratingCategory;
	
}
