import Block from "../src/block";

describe("Block tests", () => {
  let genesis: Block;
  beforeAll(()=> {
    genesis = new Block(0, "", "Genesis Block")
  })
  test("Should be valid", () => {
    const block = new Block(1, genesis.hash, "Genesis")
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeTruthy()
  })

  test("Should NOT be valid (previusHash)", () => {
    const block = new Block(1, "", "Genesis")
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy()
  })

  test("Should NOT be valid (index)", () => {
    const block = new Block(-1, genesis.hash, "Genesis")
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy()
  })

  test("Should NOT be valid (data)", () => {
    const block = new Block(1, genesis.hash, "Genesis")
    block.data = ""
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy()
  })
  test("Should NOT be valid (timestemp)", () => {
    const block = new Block(1, genesis.hash, "Genesis")
    block.timestamp = 0
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy()
  })
  test("Should NOT be valid (hash)", () => {
    const block = new Block(1, genesis.hash, "Genesis")
    block.hash = ""
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy()
  })
})