const TeslaShare = artifacts.require('TeslaShare');
const Proxy = artifacts.require('AdminUpgradeabilityProxy');

module.exports = async function(deployer) {
  await deployer;

  await deployer.deploy(TeslaShare);
  const proxy = await deployer.deploy(Proxy, TeslaShare.address);
  const proxiedTeslaShare = await TeslaShare.at(proxy.address);
  await proxy.changeAdmin("0x19ABe6b87285C0E93F6181c0a6A97A554b1a2D76");
  await proxiedTeslaShare.initialize();
};
