import React, { useState } from "react";
import Web3 from "web3";
import getAccountDetails from "../web3/web3";

const web3 = new Web3(window.ethereum);

function SignIn() {
  const [signedIn, setSignedIn] = useState(false);

  const handleClick = async () => {
    try {
      await window.ethereum.enable();
      setSignedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const {account, totalEthSpent,balance} = getAccountDetails
  console.log(account)

  return (
    <div>
      {signedIn ? 
        <p>Signed in to MetaMask</p>
       : 
        <button onClick={handleClick}>Sign in to MetaMask</button>
      }
      <p>{account}</p>
    </div>
  );
}

export default SignIn;
