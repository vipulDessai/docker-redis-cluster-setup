import { RedisClusterType, createCluster } from 'redis';

const cacheClusterUrls = {
  rootNodes: [
    {
      url: 'redis://localhost:7000',
    },
    {
      url: 'redis://localhost:7001',
    },
    {
      url: 'redis://localhost:7002',
    },
    {
      url: 'redis://localhost:7003',
    },
    {
      url: 'redis://localhost:7004',
    },
    {
      url: 'redis://localhost:7005',
    },
  ],
};

export class LsCacheRedisConnector {
  private cluster: RedisClusterType;
  constructor() {
    this.cluster = createCluster(cacheClusterUrls);

    // @ts-ignore
    this.cluster.on('error', (err) => {
      console.log('Redis Cluster Error', err);
    });
  }
  public async redisCommandOperation(methodName: string, ...requestBody: any) {
    await this.cluster.connect();

    const res = await this.cluster.GET(...requestBody);

    await this.cluster.disconnect();

    return res;
  }
}

async function main() {
  try {
    const c = new LsCacheRedisConnector();
    const res = await c.redisCommandOperation('GET', 'k1');

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

main();
