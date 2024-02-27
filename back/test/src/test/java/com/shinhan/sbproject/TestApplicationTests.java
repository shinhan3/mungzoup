package com.shinhan.sbproject;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.shinhan.sbproject.VO.PaymentVO;
import com.shinhan.sbproject.VO.RatingCategoryVO;
import com.shinhan.sbproject.VO.StoreVO;
import com.shinhan.sbproject.VO.UserVO;
import com.shinhan.sbproject.repository.PaymentRepository;
import com.shinhan.sbproject.repository.StoreRepository;
import com.shinhan.sbproject.repository.UserRepository;

@SpringBootTest
class TestApplicationTests {

	@Autowired
	StoreRepository sRep;

	@Autowired
	UserRepository uRep;
	
	@Autowired
	PaymentRepository pRep;
	
	static int totalCnt = 0;
	static int[] categoryId1 = { 1, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 17 };
	static int[] categoryId2 = { 1, 3, 5, 6, 10, 12, 13, 14 };
	static int[] categoryId3 = { 1, 3, 4, 5, 6, 8, 14 };
	static int[] categoryId4 = { 1, 3, 4, 5, 6, 8, 14 };
	static int[] categoryId5 = { 1, 3, 4, 5, 6, 8, 9, 14, 16, 17 };
	static int[] categoryId6 = { 1, 3, 4, 5, 6, 8, 14 };
	static int[] categoryId7 = { 1, 2, 3, 4, 5, 6, 7, 8, 12, 14, 15 };
	static int[] categoryId8 = { 1, 3, 4, 5, 6, 8, 14, 15 };
	static int[] categoryId9 = { 1, 3, 4, 5, 6, 8, 14 };
	static int[] categoryId10 = { 1, 3, 4, 5, 6, 9, 10, 14, 15, 17 };
	static int[] categoryId12 = { 1, 3, 4, 5, 6, 9, 14, 15 };
	static int[] categoryId13 = { 1, 3, 4, 5, 6, 9, 14, 15 };

	@Test
	void contextLoads() {
		Random random = new Random();
		UserVO user = uRep.findById("user3").orElse(null);
		StoreVO store_aaa=sRep.findById(20930).orElse(null);
		int cnt = 832;
		totalCnt = cnt + totalCnt;

		List<PaymentVO> payList = new ArrayList<>();
		for (int i = 0; i < cnt; i++) {
			PaymentVO pay = new PaymentVO();
			pay.setStore(store_aaa);
			pay.setUser(user);
			pay.setPrice(1);
			if (random.nextFloat() < 1.2) {

				switch (store_aaa.getCategory().getCategoryId()) {
				case 1: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId1[random.nextInt(categoryId1.length)]).build());
					break;
				}
				
				case 2: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId2[random.nextInt(categoryId2.length)]).build());
					break;
				}
				
				case 3: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId3[random.nextInt(categoryId3.length)]).build());
					break;
				}
				
				case 4: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId4[random.nextInt(categoryId4.length)]).build());
					break;
				}
				
				case 5: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId5[random.nextInt(categoryId5.length)]).build());
					break;
				}
				
				case 6: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId6[random.nextInt(categoryId6.length)]).build());
					break;
				}
				
				case 7: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId7[random.nextInt(categoryId7.length)]).build());
					break;
				}
				
				case 8: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId8[random.nextInt(categoryId8.length)]).build());
					break;
				}
				
				case 9: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId9[random.nextInt(categoryId9.length)]).build());
					break;
				}
				
				case 10: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId10[random.nextInt(categoryId10.length)]).build());
					break;
				}
				
				case 12: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId12[random.nextInt(categoryId12.length)]).build());
					break;
				}
				
				case 13: {
					pay.setRatingCategory(new RatingCategoryVO().builder()
							.ratingCategoryId(categoryId13[random.nextInt(categoryId13.length)]).build());
					break;
				}
				
				}

			}
			payList.add(pay);
		}
		
//		List<PaymentVO> payList = new ArrayList<>();
//		sRep.findAll().forEach(store -> {
//			int cnt = (int) (store.getPostCount() * random.nextFloat() / 100);
//			totalCnt = cnt + totalCnt;
//
//			for (int i = 0; i < cnt; i++) {
//				PaymentVO pay = new PaymentVO();
//				pay.setStore(store);
//				pay.setUser(user);
//				pay.setPrice(1);
//				if (random.nextFloat() < 0.8) {
//
//					switch (store.getCategory().getCategoryId()) {
//					case 1: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId1[random.nextInt(categoryId1.length)]).build());
//						break;
//					}
//					
//					case 2: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId2[random.nextInt(categoryId2.length)]).build());
//						break;
//					}
//					
//					case 3: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId3[random.nextInt(categoryId3.length)]).build());
//						break;
//					}
//					
//					case 4: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId4[random.nextInt(categoryId4.length)]).build());
//						break;
//					}
//					
//					case 5: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId5[random.nextInt(categoryId5.length)]).build());
//						break;
//					}
//					
//					case 6: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId6[random.nextInt(categoryId6.length)]).build());
//						break;
//					}
//					
//					case 7: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId7[random.nextInt(categoryId7.length)]).build());
//						break;
//					}
//					
//					case 8: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId8[random.nextInt(categoryId8.length)]).build());
//						break;
//					}
//					
//					case 9: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId9[random.nextInt(categoryId9.length)]).build());
//						break;
//					}
//					
//					case 10: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId10[random.nextInt(categoryId10.length)]).build());
//						break;
//					}
//					
//					case 12: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId12[random.nextInt(categoryId12.length)]).build());
//						break;
//					}
//					
//					case 13: {
//						pay.setRatingCategory(new RatingCategoryVO().builder()
//								.ratingCategoryId(categoryId13[random.nextInt(categoryId13.length)]).build());
//						break;
//					}
//					
//					}
//
//				}
//				payList.add(pay);
//			}
//
//		});
		System.out.println(payList.size());
		System.out.println(totalCnt);
		pRep.saveAll(payList);
	}

}
