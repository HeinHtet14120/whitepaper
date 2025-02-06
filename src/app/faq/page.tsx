export default function FAQ() {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
  
        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">AI Chat Integration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">What is the AI Chat powered by?</h3>
                <p className="mt-2">Our AI chat system is powered by DeepSeek, providing advanced market analysis and real-time insights for crypto trading.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">What can I ask the AI?</h3>
                <p className="mt-2">You can ask about market trends, price analysis, trading strategies, and get real-time insights about various cryptocurrencies.</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Dashboard Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">What metrics are available in the dashboard?</h3>
                <p className="mt-2">Our dashboard provides comprehensive metrics including Price, Market Cap, Liquidity, 24h Volume, Number of Holders, and AI-powered price predictions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Can I customize the dashboard?</h3>
                <p className="mt-2">Yes, users can customize their dashboard layout and choose which metrics to display based on their preferences and needs.</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Social Intelligence</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">How does the tweet filtering system work?</h3>
                <p className="mt-2">Our advanced filtering system allows you to search and filter tweets based on engagement metrics, sentiment analysis, and custom keywords.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How often is social data updated?</h3>
                <p className="mt-2">Social data is updated in real-time, providing the most current information about market sentiment and trending discussions.</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Wallet Integration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">What wallet information can I access?</h3>
                <p className="mt-2">Users can view their wallet balances, transaction history, and track their portfolio performance across multiple chains.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Is my wallet data secure?</h3>
                <p className="mt-2">Yes, we prioritize security and only access public blockchain data. We never store private keys or sensitive wallet information.</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">When will the token swap feature be available?</h3>
                <p className="mt-2">The token swap feature is currently in development. Join our Discord or follow us on Twitter for the latest updates on the release timeline.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">What new API features are coming?</h3>
                <p className="mt-2">We're working on WebSocket support, GraphQL integration, and additional SDK languages. Check our roadmap for more details.</p>
              </div>
            </div>
          </div>
  
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Support & Community</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">How can I get help?</h3>
                <p className="mt-2">You can:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Join our Discord community</li>
                  <li>Follow us on Twitter @JrMafia404</li>
                  <li>Check our documentation</li>
                  <li>Email support for direct assistance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How can I provide feedback?</h3>
                <p className="mt-2">We welcome feedback through our Discord channel, GitHub issues, or direct email. Your input helps us improve our platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }