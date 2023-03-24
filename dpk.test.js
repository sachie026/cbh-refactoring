const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const defaultKey = deterministicPartitionKey();
    expect(defaultKey).toBe("0");
  });

  it("Returns test string output for passed partition key", () => {
    const partition = {
      partitionKey: "test",
    };
    const result = deterministicPartitionKey(partition);
    expect(result).toBe("test");
  });

  it("Returns test string output for passed number partition key", () => {
    const partition = {
      partitionKey: 123,
    };
    const result = deterministicPartitionKey(partition);
    expect(result).toBe("123");
  });

  it("Returns sha string output for the input without partition key", () => {
    const partition = {};
    const result = deterministicPartitionKey(partition);
    expect(result).toBe(
      "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    );
  });

  it("Returns test sha output for passed string partition key with more than 256 chars", () => {
    const partition = {
      partitionKey: new Array(256 + 10).join("a"),
    };
    const result = deterministicPartitionKey(partition);
    expect(result).toBe(
      "f249b32de6b8357264218a9a0710b640adfcc93f96928fb6afcd79768d4707675296702ff5fde734ab27067344372affaec7438bc622accca7a7e7f438ea2e0f"
    );
  });
});
