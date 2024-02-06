package com.shinhan.sbproject.VO;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
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
@Table(name = "credit", uniqueConstraints = {
	@UniqueConstraint(
		name ="CATEGORY_ID_LEVEL",
		columnNames={"CATEGORY_ID","LEVEL"}
)
})
public class creditVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CREDIT_ID")
	private Integer CREDIT_ID;
	@ManyToOne
	@JoinColumn(name = "CATEGORY_ID")
	private categoryVO category;
	@Column(name = "LEVEL")
	private Integer LEVEL;
	@Column(name = "PERCENT")
	private Double PERCENT;
	@Column(name = "ACCUMULATED_VALUE")
	private Integer ACCUMULATED_VALUE;
}