package com.shinhan.sbproject.VO;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
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
@Table(name = "pet_health")

public class PetHealthVO {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer pethealthId;

	@OneToOne
	@JoinColumn(name = "petId")
	private PetsVO pet;
	private String disease;
}
