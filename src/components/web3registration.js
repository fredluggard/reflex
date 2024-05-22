import { useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../Contract/constant";

console.log(contractAbi, contractAddress);

function Web3registration() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setProvider(provider);
      setSigner(signer);
      setWalletAddress(address);
      console.log(provider);
      console.log(signer);
      console.log(address);
    } else {
      alert("Please install MetaMask!");
    }
  };

  const registerUser = async () => {
    if (signer) {
      const UserRegistrationContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      try {
        const isRegistered = await UserRegistrationContract.registeredUsers(
          walletAddress
        );
        if (isRegistered) {
          setError("You already registered");
          return;
        }

        const tx = await UserRegistrationContract.register();
        await tx.wait();
        setError("");
        setIsRegistered(true);
        console.log("User registered:", tx);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      alert("Please connect your wallet first!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Registration dApp</h1>
        {!signer ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <button onClick={registerUser}>Register</button>
        )}
        {walletAddress && <p>Connected Wallet Address: {walletAddress}</p>}
        {isRegistered && <p>User successfully registered!</p>}
        {error && <p style={{ color: "red" }}> {error}</p>}
      </header>
    </div>
  );
}

export default Web3registration;
