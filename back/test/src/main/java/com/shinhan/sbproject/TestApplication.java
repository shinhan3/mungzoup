package com.shinhan.sbproject;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.NumberFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.util.ObjectUtils;

import com.shinhan.sbproject.VO.BenefitVO;
import com.shinhan.sbproject.VO.CardVO;
import com.shinhan.sbproject.VO.CreditVO;
import com.shinhan.sbproject.VO.PaymentVO;
import com.shinhan.sbproject.VO.StoreVO;
import com.shinhan.sbproject.repository.BenefitRepository;
import com.shinhan.sbproject.repository.CardRepository;
import com.shinhan.sbproject.repository.CreditRepository;
import com.shinhan.sbproject.repository.PaymentRepository;
import com.shinhan.sbproject.repository.StoreRepository;
import com.shinhan.sbproject.repository.UserRepository;

@EnableScheduling
@SpringBootApplication
public class TestApplication {
	@Autowired
	UserRepository userRep;

	@Autowired
	PaymentRepository payRep;

	@Autowired
	CreditRepository creditRep;

	@Autowired
	BenefitRepository beneRep;

	@Autowired
	CardRepository cardRep;

	@Autowired
	StoreRepository storeRep;

	private static String WEB_DRIVER_PATH="C:\\Users\\User\\git\\shinhanProject\\project3\\back\\test\\src\\main\\java\\com\\shinhan\\sbproject\\chromedriver.exe";

	static Double maxDiscount = 0.0;
	static Map<Integer, Map<Integer,CreditVO>> creditMap;
	static Map<Integer,Integer> priceMap;
	static int cntC = 0;
	static int[] Level = new int[5];
	public static void main(String[] args) {
		SpringApplication.run(TestApplication.class, args);
	}
	
	// @Scheduled(cron = "0 0 0 1 * *") 
	@Scheduled(fixedDelay = 10000000)
	public void crawling() throws IOException {
		
		List<StoreVO> storeList = new ArrayList<>();

		storeRep.findAll().forEach((store)->{
			// System.out.println(store); 
			storeList.add(store);
		});
		for(StoreVO store:storeList){
			cntC++;
			Integer PostCountInt =0;
			long PostCount =0;
			String URL = "https://www.google.com/search?q=21세기맑은약국 인천광역시 부평구 길주로 623";
			
            // String URL = "https://www.google.com/search?q="+"%22"+store.getStoreName()+"%22"+" "+"%22"+store.getStoreAddress()+"%22";
			try{
				
				Thread.sleep(10000);
			Document doc = Jsoup.connect(URL).get();
			System.out.println(doc.getElementById("result-stats").text().split(" ").length);
			if(doc.getElementById("result-stats").text().split(" ").length == 4){
				String data =  doc.getElementById("result-stats").text().split(" ")[2];
				// System.out.println(data);
				String valueStr=data.substring(0,data.length()-1);
				// System.out.println("valueStr: "+valueStr);
				valueStr =  valueStr.replaceAll(",", "");
				// System.out.println(valueStr);
				// System.out.println(valueStr.length());
				PostCount =  Long.parseLong(valueStr);
				if(PostCount > Integer.MAX_VALUE){
					// System.out.println("크다");
					PostCountInt = Integer.MAX_VALUE;
				}else{
					PostCountInt = Integer.parseInt(valueStr);
				}
				System.out.println("Store: "+store);
				System.out.println("valueStr: "+valueStr);
				System.out.println("Postcount: "+PostCountInt);
				store.setPostCount(PostCountInt);
				storeRep.save(store); 
			}}catch(Exception e){
				System.out.println(e);
			}
		}

	}

	
	@Scheduled(cron = "0 0 0 1 * *") 
	public void scheduleFixedRateTask() {
		List<String> users=userRep.getUsers();
		creditMap = new HashMap<>();

		creditRep.findAll().forEach(value->{
			if(creditMap.get(value.getCategory().getCategoryId())==null){
				creditMap.put(value.getCategory().getCategoryId(), new HashMap<Integer,CreditVO>());
			}
			creditMap.get(value.getCategory().getCategoryId())
						.put(value.getLevel(), value);
		});
		System.out.println(creditMap.toString()+"aaaaa");
		System.out.println(users.toString());
		for(String userId : users){
			int[][] DisPriceCheckArr=payRep.getDisPriceCheck(userId);
			priceMap = new HashMap<>();
			priceMap.put(1, 0);
			priceMap.put(5, 0);
			priceMap.put(7, 0);
			priceMap.put(8, 0);
			priceMap.put(10, 0);
			for(int[] arr : DisPriceCheckArr){
				priceMap.put(arr[0], arr[1]);
			}
			System.out.println(Arrays.deepToString(DisPriceCheckArr));
			System.out.println(priceMap.toString());
			maxDiscount =0.0;
			for(int i=0;i<Level.length;i++){
				Level[i]=0;
			}
			dfs(0, 0, 0, 0, 0);
			System.out.println("end"+ Arrays.toString(Level));
			List<BenefitVO> benefitList=beneRep.getBenefitToday(userId);
			System.out.println(benefitList.toString());
			if(benefitList.size()>0){
				Map<Integer,BenefitVO> benefitMap = new HashMap<>();
				benefitList.stream().forEach((benefit)->{
					if(benefit.getCredit().getCategory().getCategoryId() == 1){
						benefit.setCredit(creditMap.get(1).get(Level[0]));
						benefitMap.put(1,benefit);
					}else if(benefit.getCredit().getCategory().getCategoryId() == 5){
						benefit.setCredit(creditMap.get(5).get(Level[1]));
						benefitMap.put(5,benefit);
					}else if(benefit.getCredit().getCategory().getCategoryId() == 7){
						benefit.setCredit(creditMap.get(7).get(Level[2]));
						benefitMap.put(7,benefit);
					}else if(benefit.getCredit().getCategory().getCategoryId() == 8){
						benefit.setCredit(creditMap.get(8).get(Level[3]));
						benefitMap.put(8,benefit);
					}else if(benefit.getCredit().getCategory().getCategoryId() == 10){
						benefit.setCredit(creditMap.get(10).get(Level[4]));
						benefitMap.put(10,benefit);
					}
				});
				beneRep.saveAll(benefitList);
				System.out.println(benefitList.toString()+benefitList.size());
				List<PaymentVO> payList=payRep.getPaymentToDay(userId);
				System.out.println(payList.toString());
				payList.stream().forEach(pay->{
					if(pay.getStore().getCategory().getCategoryId()==1){
						pay.setBenefit(benefitMap.get(1));
					}else if(pay.getStore().getCategory().getCategoryId()==5){
						pay.setBenefit(benefitMap.get(5));
					}else if(pay.getStore().getCategory().getCategoryId()==7){
						pay.setBenefit(benefitMap.get(7));
					}else if(pay.getStore().getCategory().getCategoryId()==8){
						pay.setBenefit(benefitMap.get(8));
					}else if(pay.getStore().getCategory().getCategoryId()==10){
						pay.setBenefit(benefitMap.get(10));
					}
				}); 
				payRep.saveAll(payList);
			}else{
				CardVO card=cardRep.getCardByUserId(userId);
				int[] category_arr = {1,5,7,8,10};
				List<BenefitVO> newBenefitList = new ArrayList<>();
				Map<Integer,BenefitVO> benefitMap = new HashMap<>();
				for(int i=0;i<5;i++){
					BenefitVO benefit = new BenefitVO().builder()
					.benefitType(false)
					.card(card)
					.isMaxBenefit(true)
					.confirmed(true)
					.credit(creditMap.get(category_arr[i]).get(Level[i]))
					.build();
					
					benefitMap.put(category_arr[i],benefit);
					newBenefitList.add(benefit);
				}
				beneRep.saveAll(newBenefitList);
				
				List<PaymentVO> payList=payRep.getPaymentToDay(userId);
				
				payList.stream().forEach(pay->{
					if(pay.getStore().getCategory().getCategoryId()==1){
						pay.setBenefit(benefitMap.get(1));
					}else if(pay.getStore().getCategory().getCategoryId()==5){
						pay.setBenefit(benefitMap.get(5));
					}else if(pay.getStore().getCategory().getCategoryId()==7){
						pay.setBenefit(benefitMap.get(7));
					}else if(pay.getStore().getCategory().getCategoryId()==8){
						pay.setBenefit(benefitMap.get(8));
					}else if(pay.getStore().getCategory().getCategoryId()==10){
						pay.setBenefit(benefitMap.get(10));
					}
				}); 
				
				payRep.saveAll(payList);

			}
		}
	}

	public void dfs(int hospitalLevel,int beautyLevel,int petShopLevel,int restaurantLevel,int consignmentLevel){
		// System.out.println(creditMap.get(1).toString()+"bbb");
		int credit_value = creditMap.get(1).get(hospitalLevel).getAccumulatedValue()
						 + creditMap.get(5).get(beautyLevel).getAccumulatedValue()
						 + creditMap.get(7).get(petShopLevel).getAccumulatedValue()
						 + creditMap.get(8).get(restaurantLevel).getAccumulatedValue()
						 + creditMap.get(10).get(consignmentLevel).getAccumulatedValue()
		;
		if(credit_value>60) return; 
		Double total_discount = priceMap.get(1) * creditMap.get(1).get(hospitalLevel).getPercent() / 100.0
							+	priceMap.get(5) * creditMap.get(5).get(beautyLevel).getPercent() / 100.0
							+	priceMap.get(7) * creditMap.get(7).get(petShopLevel).getPercent() / 100.0
							+	priceMap.get(8) * creditMap.get(8).get(restaurantLevel).getPercent() / 100.0
							+	priceMap.get(10) * creditMap.get(10).get(consignmentLevel).getPercent() / 100.0
		;
		if(total_discount >= maxDiscount){
			maxDiscount = total_discount;
			Level[0]=hospitalLevel;
			Level[1]=beautyLevel;
			Level[2]=petShopLevel;
			Level[3]=restaurantLevel;
			Level[4]=consignmentLevel;
		}

		if(hospitalLevel+1<6){
			dfs(hospitalLevel+1, beautyLevel, petShopLevel, restaurantLevel, consignmentLevel);
		}

		
		if(beautyLevel+1<6){
			dfs(hospitalLevel, beautyLevel+1, petShopLevel, restaurantLevel, consignmentLevel);
		}

		
		if(petShopLevel+1<6){
			dfs(hospitalLevel, beautyLevel, petShopLevel+1, restaurantLevel, consignmentLevel);
		}

		
		if(restaurantLevel+1<6){
			dfs(hospitalLevel, beautyLevel, petShopLevel, restaurantLevel+1, consignmentLevel);
		}

		
		if(consignmentLevel+1<6){
			dfs(hospitalLevel, beautyLevel, petShopLevel, restaurantLevel, consignmentLevel+1);
		}

	}

	 

}