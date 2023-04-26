# redis docker cluster setup

## clean build no cache

```properties
docker compose up --build
```

## detached mode compose

```properties
docker compose up --build -d
```

## get the redis docker ip address

```
hostname -I
```

## redis cli cluster

```properties
redis-cli --cluster create localhost:6379 localhost:6380 localhost:6381 localhost:6382 localhost:6383 localhost:6384 --cluster-replicas 1

# or

redis-cli --cluster create 172.18.0.3:6379 172.18.0.2:6380 172.18.0.6:6381 172.18.0.5:6382 172.18.0.4:6383 172.18.0.7:6384 --cluster-replicas 1
```
