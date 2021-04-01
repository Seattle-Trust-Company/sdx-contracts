const TeslaShare = artifacts.require('TeslaShare');
const Proxy = artifacts.require('AdminUpgradeabilityProxy');

module.exports = async function(deployer) {
  await deployer;

  await deployer.deploy(TeslaShare);
  const proxy = await deployer.deploy(Proxy, TeslaShare.address);
  const proxiedTeslaShare = await TeslaShare.at(proxy.address);
  await proxy.changeAdmin("0xf0b1eef88956b0a307fa87b5f5671aad6a5d330f");
  await proxiedTeslaShare.initialize();
};
