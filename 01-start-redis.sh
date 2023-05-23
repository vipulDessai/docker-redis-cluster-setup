#!/bin/sh

cd 7000
nohup redis-server redis.conf &
cd ..

cd 7001
nohup redis-server redis.conf &
cd ..

cd 7002
nohup redis-server redis.conf &
cd ..

cd 7003
nohup redis-server redis.conf &
cd ..

cd 7004
nohup redis-server redis.conf &
cd ..

cd 7005
redis-server redis.conf