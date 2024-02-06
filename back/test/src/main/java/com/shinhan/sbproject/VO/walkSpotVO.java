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
@Table(name = "walk_spot")

public class walkSpotVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer SPOT_ID;
	private String SPOT_NAME;
	private Double SPOT_LATITUDE;
	private Double SPOT_LONGITUDE;
	private String SPOT_ADDRESS;
	
	@ManyToOne
	@JoinColumn(name = "USER_ID")
	private userVO user;
	
	
}