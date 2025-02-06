export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-gray-300">Junior Mafia Documentation</h1>
      
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <div className="text-2xl text-gray-400 font-bold mb-4">Welcome to Junior Mafia</div>
        <div className="mb-4 text-gray-400">
          This documentation will help you understand and integrate with our comprehensive crypto intelligence platform.
          Explore our various features and learn how to leverage our powerful APIs.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 text-gray-400 dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">AI Chat Integration</h3>
          <p>Learn how to integrate our DeepSeek-powered chatbot for automated crypto analysis and real-time market insights.</p>
        </div>

        <div className="bg-gray-50 text-gray-400 dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Dashboard API</h3>
          <p>Access comprehensive market data including price feeds, liquidity metrics, holder analytics, and AI-powered price predictions for each coin through our customizable dashboard endpoints.</p>
        </div>

        <div className="bg-gray-50 text-gray-400 dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">AI Predictions</h3>
          <p>Get detailed AI-driven price predictions and market trend analysis for every tracked cryptocurrency, powered by advanced machine learning models.</p>
        </div>

        <div className="bg-gray-50 text-gray-400 dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Social Data API</h3>
          <p>Access top tweets for any cryptocurrency and utilize our advanced filtering system to search tweets by engagement, sentiment, and custom parameters. Track social trends and community insights in real-time.</p>
        </div>

        <div className="bg-gray-50 text-gray-400 dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Wallet Integration</h3>
          <p>Connect user wallets and access transaction history with our secure wallet tracking endpoints.</p>
        </div>

        <div className="bg-gray-50 text-gray-400 dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Market Analytics</h3>
          <p>Access detailed market metrics including Price, Market Cap, Liquidity, 24h Volume, and Holder statistics with AI-powered insights for each coin.</p>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-400">Checkout our coming soon features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>Token swap integration for seamless trading</li>
          <li>Extended API support with additional endpoints</li>
          <li>Check out our Authentication guide to get your API keys</li>
          <li>Explore our comprehensive API endpoints documentation</li>
          <li>Learn about rate limits and best practices</li>
          <li>Join our community for support and updates</li>
          <li>Review our FAQ for common integration questions</li>
        </ul>
      </div>
    </div>
  )
}

