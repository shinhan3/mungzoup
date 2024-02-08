package com.shinhan.sbproject.VO;


import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
@Table(name = "card")

public class CardVO {
	@Id
	private String cardId;
	private String expiredYear;
	private String expiredMonth;
	private String cvc;
	private String cardPassword;
	private Integer point;
	@CreationTimestamp
	private Timestamp insertDay;
}