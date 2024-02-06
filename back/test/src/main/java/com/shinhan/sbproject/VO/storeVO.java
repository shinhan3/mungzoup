package com.shinhan.sbproject.VO;



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
@Table(name = "store")

public class storeVO {
	@Id
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer STORE_ID;
	@ManyToOne
	@JoinColumn(name = "CATEGORY_ID")
	private categoryVO category;
	private Integer POST_COUNT;
	private String STORE_NAME;
	private String STORE_ADDRESS;
	private Double STORE_LATITUDE;
	private Double STORE_LONGITUDE;
	private String OPEN_TIME;
	private String CLOSED_DAYS;
	
}