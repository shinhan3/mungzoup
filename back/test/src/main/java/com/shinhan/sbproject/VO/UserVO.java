package com.shinhan.sbproject.VO;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "user")

public class UserVO {
	@Id
	private String userId;
	private String userPassword;
	private String userName;
	@OneToOne

	@JoinColumn(name = "cardId")
	private CardVO card;
	@CreationTimestamp
	private Timestamp subscribeDay;
	
}
