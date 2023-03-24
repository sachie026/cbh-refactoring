const crypto = require("crypto");

exports.deterministicPartitionKey = (partition) => {
  const DEFAULT_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKeyOutput;

  if (partition) {
    if (partition.partitionKey) {
      partitionKeyOutput = partition.partitionKey;
    } else {
      const data = JSON.stringify(partition);
      partitionKeyOutput = crypto
        .createHash("sha3-512")
        .update(data)
        .digest("hex");
    }
  }

  if (partitionKeyOutput) {
    if (typeof partitionKeyOutput !== "string") {
      partitionKeyOutput = JSON.stringify(partitionKeyOutput);
    }
  } else {
    partitionKeyOutput = DEFAULT_PARTITION_KEY;
  }

  if (partitionKeyOutput.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKeyOutput = crypto
      .createHash("sha3-512")
      .update(partitionKeyOutput)
      .digest("hex");
  }
  return partitionKeyOutput;
};
