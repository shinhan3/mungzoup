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

public class StoreVO {
	@Id
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer storeId;
	@ManyToOne
	@JoinColumn(name = "categoryId")
	private CategoryVO category;
	private Integer postCount;
	private String storeName;
	private String storeAddress;
	private Double storeLatitude;
	private Double storeLongitude;
	private String openTime;
	private String closedDays;
	
}
