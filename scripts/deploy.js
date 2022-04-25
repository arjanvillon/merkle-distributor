async function main() {
  // We get the contract to MerkleDistributor
  const MerkleDistributor = await ethers.getContractFactory('MerkleDistributor')
  const merkleDistributor = await MerkleDistributor.deploy(
    '0x3597e30D8Fa8F9a9Fd5db8A6FAFE872c8E720B14',
    '0x6c4f7c393f1c0a0d88cd772af156ba03cf81d0ec5a79e94abe47b74ea69d7d00'
  )

  console.log(`MerkleDistributor contract deployed to: ${merkleDistributor.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
