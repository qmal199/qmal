import { useState } from "react";
import { getSwap } from "../lib/swap";

export default function Swap() {
  const [result, setResult] = useState(null);

  const run = async () => {
    const r = await getSwap("ETH", "USDT", 1);
    setResult(r);
  };

  return (
    <div style={styles.container}>
      <h2>Swap</h2>

      <div style={styles.card}>
        <button onClick={run} style={styles.button}>
          Get Best Price
        </button>

        {result && (
          <pre style={{ color: "#0f0" }}>
            {JSON.stringify(result, null, 2)}
          </pre>
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
  card: {
    background: "#161C24",
    padding: 20,
    borderRadius: 12
  },
  button: {
    background: "#27AE60",
    color: "#fff",
    padding: 10,
    border: "none",
    borderRadius: 8
  }
};