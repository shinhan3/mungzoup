package com.shinhan.sbproject.VO;


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

public class cardVO {
	@Id
	private String CARD_ID;
	private String EXPIRED_YEAR;
	private String EXPIRED_MONTH;
	private String CVC;
	private String CARD_PASSWORD;
	private Integer POINT;
}