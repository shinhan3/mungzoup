package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


import com.shinhan.sbproject.VO.RatingCategoryVO;

public interface RatingCategoryRepository extends CrudRepository<RatingCategoryVO, Integer>{
	
    @Query(value="select rp.review_content, rp.count, r.image " +
            "from rating_category r, " + 
                "(select r.review_content, count(*) count from payment p inner join rating_category r " +
                "on p.rating_category_id = r.rating_category_id " + 
                "WHERE p.store_id = ?1 " + 
                "GROUP BY r.review_content) rp " +
            "where r.review_content = rp.review_content", nativeQuery=true)
    List<Object[]> selectContnetAndCount(Integer storeId);

    @Query(value="select * from rating_category", nativeQuery=true)
    List<RatingCategoryVO> selectAll();
}
