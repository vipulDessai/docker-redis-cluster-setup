import { createCluster } from "redis";

const redisConnector = async () => {
  const cluster = createCluster({
    rootNodes: [
      {
        url: "redis://localhost:7000",
      },
      {
        url: "redis://localhost:7001",
      },
      {
        url: "redis://localhost:7002",
      },
      {
        url: "redis://localhost:7003",
      },
      {
        url: "redis://localhost:7004",
      },
      {
        url: "redis://localhost:7005",
      },
    ],
  });

  // @ts-ignore
  cluster.on("error", (err) => {
    console.log("Redis Cluster Error", err);
  });

  await cluster.connect();

  await cluster.set("k-from-ts-index", "v1-from-ts-index");
  const value = await cluster.get("k-from-ts-index");

  console.log(`value is ${value}`);
};

redisConnector();
