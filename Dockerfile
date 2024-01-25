FROM mariadb
ENV TZ Asia/Seoul
ENV MARIADB_ROOT_PASSWORD=12345
ENV MARIADB_DATABASE=testdb
#타임존 설정
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ADD db_user.sql /docker-entrypoint-initdb.d/00_db_user.sql
# ADD db_data.sql /docker-entrypoint-initdb.d/01_db_all.sql
WORKDIR /
EXPOSE 3306
