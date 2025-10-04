

import { useState } from 'react';
const agentAccessKey = import.meta.env.VITE_AGENT_ACCESS_KEY;
const agentEndpoint = import.meta.env.VITE_AGENT_ENDPOINT || 'https://cqrjegghbiq2fth4scnwjbtf.agents.do-ai.run';

const App = () => {
  const [username, setUsername] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');
    const body = {
      messages: [
        {
          role: 'user',
          content: `My Github profile URL is https://github.com/${username}`,
        },
      ],
    };
    try {
      const res = await fetch(`${agentEndpoint}/api/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(agentAccessKey ? { 'Authorization': `Bearer ${agentAccessKey}` } : {}),
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setResponse('Error: ' + err);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>HacktoMatch</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <label>
          GitHub Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '1rem' }} disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {response && (
        <div>
          <h2>API Response:</h2>
          <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px' }}>{response}</pre>
        </div>
      )}
    </div>
  );
}

export default App