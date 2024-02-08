package com.shinhan.sbproject.VO;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Table(name = "category")

public class categoryVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer CATEGORY_ID;
	private String CATEGORY_NAME;
	private String IMAGE;
}