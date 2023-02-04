import Web3 from "web3";

const web3 = new Web3(window.ethereum);

async function getAccountDetails() {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  console.log(account)

  // Get total ETH spent on gas for transactions
  const totalGasSpent = await web3.eth.getPastTransactionCount(account);
  const gasPrice = await web3.eth.getGasPrice();
  const totalEthSpent = totalGasSpent * gasPrice;

  // Get total current balance
  const balance = await web3.eth.getBalance(account);

  return {
    account,
    totalEthSpent,
    balance
  };
}

export default getAccountDetails;
