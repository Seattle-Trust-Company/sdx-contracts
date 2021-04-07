const Tesla = artifacts.require('Tesla');
const Proxy = artifacts.require('AdminUpgradeabilityProxy');

const node_01_addr = "0x19ABe6b87285C0E93F6181c0a6A97A554b1a2D76";

module.exports = async function(deployer) {
  await deployer;
  await deployer.deploy(Tesla);
  const proxy = await deployer.deploy(Proxy, TeslaShare.address);
  const proxiedTesla = await Tesla.at(proxy.address);
  await proxy.changeAdmin(node_01_addr);
  await proxiedTesla.initialize();
};
