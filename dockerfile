FROM redis
COPY a_master.conf /usr/local/etc/redis/a_master.conf
COPY b_master.conf /usr/local/etc/redis/b_master.conf
COPY c_master.conf /usr/local/etc/redis/c_master.conf
COPY a_replica.conf /usr/local/etc/redis/a_replica.conf
COPY b_replica.conf /usr/local/etc/redis/b_replica.conf
COPY c_replica.conf /usr/local/etc/redis/c_replica.conf