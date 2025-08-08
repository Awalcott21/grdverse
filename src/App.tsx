import { useState } from "react";

export function SecurityScout() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [finding, setFinding] = useState<null | {
    issue: string;
    fix: string;
    explanation: string;
  }>(null);

  const handleScan = () => {
    setLoading(true);
    setFinding(null);
    setTimeout(() => {
      setFinding({
        issue: "Exposed AWS IAM Key in GitHub Repo",
        fix: "Revoke the key, rotate credentials, and set up IAM alerts.",
        explanation:
          "A sensitive IAM key was committed in a GitHub repo. If exposed publicly, it could allow attackers to access AWS resources. Immediate action is required to secure your infrastructure.",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">🛡️ GridVerse Security Scout (Alpha)</h2>
      <input
        type="text"
        placeholder="Enter GitHub repo or domain"
        className="w-full p-2 border rounded mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleScan}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        {loading ? "Scanning..." : "Scan Now"}
      </button>

      {finding && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p><strong>🔍 Finding:</strong> {finding.issue}</p>
          <p><strong>🛠️ Fix Suggestion:</strong> {finding.fix}</p>
          <p><strong>🤖 AI Explanation:</strong> {finding.explanation}</p>
          <button
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => alert("Fix logic coming soon!")}
          >
            Generate Fix
          </button>
        </div>
      )}
    </div>
  );
}


export default App;
