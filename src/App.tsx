import React, { useState } from 'react';
import './App.css';
import PolicyForm from './components/PolicyForm';
import PolicyOutput from './components/PolicyOutput';
import { Toaster } from './components/ui/toaster';

function App() {
  const [generatedPolicy, setGeneratedPolicy] = useState<{ content: string; title: string } | null>(null);

  const handlePolicyGenerated = (content: string, title: string) => {
    setGeneratedPolicy({ content, title });
  };

  return (
    <div className="App min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">AI Legal Policy Generator</h1>
          <p className="mt-3 text-lg text-gray-600">Generate professional legal policies for your business in seconds</p>
        </header>
        
        <PolicyForm onPolicyGenerated={handlePolicyGenerated} />
        
        {generatedPolicy && (
          <PolicyOutput 
            content={generatedPolicy.content} 
            title={generatedPolicy.title} 
            visible={!!generatedPolicy} 
          />
        )}

        <Toaster />
      </div>
    </div>
  );
}

export default App;