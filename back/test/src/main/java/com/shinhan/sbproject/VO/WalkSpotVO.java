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

public class WalkSpotVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer spotId;
	private String spotName;
	private Double spotLatitude;
	private Double spotLongitude;
	private String spotAddress;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	private UserVO user;
	
	
}
