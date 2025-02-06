export default function ComingSoon() {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-8">Coming Soon Features</h1>
  
        <div className="space-y-8">
  
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Extended API Support</h2>
            <div className="space-y-4">
              <p>New API features and improvements:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>WebSocket endpoints for real-time data</li>
                <li>GraphQL API support</li>
                <li>Additional SDK languages (Go, Java, Rust)</li>
                <li>Enhanced rate limits for enterprise users</li>
                <li>Improved documentation and code examples</li>
              </ul>
            </div>
          </div>
  
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
            <div className="space-y-4">
              <p>Follow our development progress:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Join our Discord community for development updates</li>
                <li>Follow us on Twitter @prime_ai404</li>
                <li>Subscribe to our newsletter for launch notifications</li>
                <li>Check our GitHub repository for technical previews</li>
              </ul>
            </div>
          </div>
  
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Beta Testing</h2>
            <div className="space-y-4">
              <p>Get early access to these features:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Sign up for our beta testing program</li>
                <li>Test new features before public release</li>
                <li>Provide feedback to shape development</li>
                <li>Earn rewards for active participation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }