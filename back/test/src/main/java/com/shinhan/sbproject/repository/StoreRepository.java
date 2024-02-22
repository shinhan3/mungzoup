package com.shinhan.sbproject.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.shinhan.sbproject.VO.StoreVO;

public interface StoreRepository extends CrudRepository<StoreVO, Integer>{
   @Query("select s from StoreVO s where s.storeId between 0 and 8")
    List<StoreVO> selectAll5();

    @Query("select s.storeName, s.storeAddress, c.categoryId, c.image " + 
                "from StoreVO s inner join CategoryVO c on s.category = c " + 
                "where s.storeId = ?1")
    List<Object[]> selectNameAndAddress(Integer storeId);

   @Query("select storeName from StoreVO where storeAddress like %?1%")
    String selectByStoreAddress(String address);

    @Query(value = "SELECT c.category_name, s.STORE_NAME, s.STORE_ADDRESS, s.OPEN_TIME, s.CLOSED_DAYS, c.IMAGE, s.STORE_LATITUDE, s.STORE_LONGITUDE " +
            "FROM store s JOIN category c ON s.category_id = c.CATEGORY_ID " +
            "WHERE STORE_ADDRESS LIKE %?1% AND s.category_id NOT IN (1,2,7,10,12,13,5)", nativeQuery = true)
    List<Object[]> selectArea(String pickingArea);

    @Query(value = "SELECT s.*,c.CATEGORY_NAME, " 
            +"(6371 * ACOS( COS( RADIANS( :userLat ) ) * COS( RADIANS( s.STORE_LATITUDE ) ) * COS( RADIANS( s.STORE_LONGITUDE ) - RADIANS( :userLng ) ) + SIN( RADIANS( :userLat ) ) * SIN( RADIANS( s.STORE_LATITUDE ) ) ) ) AS distance, "
            +"COUNT(PAY_NUM) AS cnt_pay, COUNT(RATING_CATEGORY_ID) AS review "
            +"FROM store s left JOIN payment p USING (STORE_ID) LEFT JOIN category c USING(CATEGORY_ID) "
            +"WHERE ( 6371 * ACOS( COS( RADIANS( :userLat ) ) * COS( RADIANS( s.STORE_LATITUDE ) ) * COS( RADIANS( s.STORE_LONGITUDE ) - RADIANS( :userLng ) ) + SIN( RADIANS( :userLat ) ) * SIN( RADIANS( s.STORE_LATITUDE ) ) ) )  < 1 "
            +"GROUP BY s.STORE_ID ORDER BY cnt_pay DESC", nativeQuery = true )
    List<Map<String, Object>>  getStoreOrderPay(@Param("userLng") Double userLng,@Param("userLat") Double userLat);

    @Query(value = "SELECT s.*,c.CATEGORY_NAME,( 6371 * ACOS( COS( RADIANS( :userLat ) ) * COS( RADIANS( s.STORE_LATITUDE ) ) * COS( RADIANS( s.STORE_LONGITUDE ) - RADIANS( :userLng ) ) + SIN( RADIANS( :userLat ) ) * SIN( RADIANS( s.STORE_LATITUDE ) ) ) ) AS distance, "
            +"COUNT(PAY_NUM) AS cnt_pay, COUNT(RATING_CATEGORY_ID) AS review "
            +"FROM store s left JOIN payment p USING (STORE_ID) LEFT JOIN category c USING(CATEGORY_ID) "
            +"WHERE ( 6371 * ACOS( COS( RADIANS( :userLat ) ) * COS( RADIANS( s.STORE_LATITUDE ) ) * COS( RADIANS( s.STORE_LONGITUDE ) - RADIANS( :userLng ) ) + SIN( RADIANS( :userLat ) ) * SIN( RADIANS( s.STORE_LATITUDE ) ) ) )  < 1 "
            +"GROUP BY s.STORE_ID ORDER BY review DESC", nativeQuery = true )
    List<Map<String, Object>>  getStoreOrderReview(@Param("userLng") Double userLng,@Param("userLat") Double userLat);

    @Query(value = "SELECT s.*,c.CATEGORY_NAME,( 6371 * ACOS( COS( RADIANS( :userLat ) ) * COS( RADIANS( s.STORE_LATITUDE ) ) * COS( RADIANS( s.STORE_LONGITUDE ) - RADIANS( :userLng ) ) + SIN( RADIANS( :userLat ) ) * SIN( RADIANS( s.STORE_LATITUDE ) ) ) ) AS distance, "
            +"COUNT(PAY_NUM) AS cnt_pay, COUNT(RATING_CATEGORY_ID) AS review "
            +"FROM store s left JOIN payment p USING (STORE_ID) LEFT JOIN category c USING(CATEGORY_ID) "
            +"WHERE ( 6371 * ACOS( COS( RADIANS( :userLat ) ) * COS( RADIANS( s.STORE_LATITUDE ) ) * COS( RADIANS( s.STORE_LONGITUDE ) - RADIANS( :userLng ) ) + SIN( RADIANS( :userLat ) ) * SIN( RADIANS( s.STORE_LATITUDE ) ) ) )  < 1 "
            +"GROUP BY s.STORE_ID ORDER BY distance", nativeQuery = true )
    List<Map<String, Object>>  getStoreOrderDistance(@Param("userLng") Double userLng,@Param("userLat") Double userLat);

    @Query(value = "SELECT s.*,c.CATEGORY_NAME,( 6371 * ACOS( COS( RADIANS( :userLat ) ) * COS( RADIANS( s.STORE_LATITUDE ) ) * COS( RADIANS( s.STORE_LONGITUDE ) - RADIANS( :userLng ) ) + SIN( RADIANS( :userLat ) ) * SIN( RADIANS( s.STORE_LATITUDE ) ) ) ) AS distance, "
            +"COUNT(PAY_NUM) AS cnt_pay, COUNT(RATING_CATEGORY_ID) AS review "
            +"FROM store s left JOIN payment p USING (STORE_ID) LEFT JOIN category c USING(CATEGORY_ID) "
            +"WHERE ( 6371 * ACOS( COS( RADIANS( :userLat ) ) * COS( RADIANS( s.STORE_LATITUDE ) ) * COS( RADIANS( s.STORE_LONGITUDE ) - RADIANS( :userLng ) ) + SIN( RADIANS( :userLat ) ) * SIN( RADIANS( s.STORE_LATITUDE ) ) ) )  < 1 "
            +"GROUP BY s.STORE_ID ORDER BY POST_COUNT DESC", nativeQuery = true )
    List<Map<String, Object>>  getStoreOrderPostCnt(@Param("userLng") Double userLng,@Param("userLat") Double userLat);
}

