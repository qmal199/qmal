import { useState } from "react";
import { createWallet } from "../lib/wallet";

export default function Home() {
  const [wallet, setWallet] = useState(null);

  const create = () => {
    const w = createWallet();
    localStorage.setItem("wallet", JSON.stringify(w));
    setWallet(w);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>V14 Pro Wallet</h1>

      <div style={styles.card}>
        <p>Secure Web3 Wallet</p>

        <button onClick={create} style={styles.button}>
          Create Wallet
        </button>

        {wallet && (
          <div style={styles.addr}>
            {wallet.address}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#0B0F14",
    minHeight: "100vh",
    color: "#fff",
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: "bold"
  },
  card: {
    background: "#161C24",
    padding: 20,
    borderRadius: 12,
    marginTop: 20
  },
  button: {
    background: "#2F80ED",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    border: "none",
    marginTop: 10
  },
  addr: {
    marginTop: 10,
    fontSize: 12,
    opacity: 0.8
  }
};