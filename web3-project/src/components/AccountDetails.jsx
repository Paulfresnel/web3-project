import React, { useState, useEffect } from "react";
import getAccountDetails from "../web3/web3";

function AccountDetails() {
  const [details, setDetails] = useState({
    account: "",
    totalEthSpent: 0,
    balance: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const details = await getAccountDetails();
      console.log("fetched")
      console.log(details)
      setDetails(details);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Account: {details.account}</p>
      <p>Total ETH Spent on Gas: {details.totalEthSpent}</p>
      <p>Current Balance: {details.balance}</p>
    </div>
  );
}

export default AccountDetails;
