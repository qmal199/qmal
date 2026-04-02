export default function Dapp() {
  return (
    <div style={{ padding: 20, background: "#0B0F14", minHeight: "100vh", color: "#fff" }}>
      <h2>DApp Browser</h2>

      <input
        placeholder="Enter URL"
        style={{ width: "100%", padding: 10 }}
      />

      <button style={{ marginTop: 10, padding: 10 }}>
        Open
      </button>
    </div>
  );
}