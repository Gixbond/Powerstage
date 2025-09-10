import { Component } from 'react';

export class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('WebGL Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0D] p-6">
          <div className="max-w-md text-center">
            <h2 className="text-xl font-bold text-white mb-4">3D Visualization Not Available</h2>
            <p className="text-gray-400 mb-6">
              Your browser might not support WebGL, or there might be an issue with your graphics card.
              Try updating your browser or graphics drivers.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
