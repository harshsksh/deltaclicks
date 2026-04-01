'use client';

import { Component } from 'react';
import Link from 'next/link';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // In production, you could log to an error tracking service
    // if (process.env.NODE_ENV === 'production') {
    //   logErrorToService(error, errorInfo);
    // }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-boundary text-text-primary px-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold mb-4 text-primary-light">Oops!</h1>
            <p className="text-text-secondary mb-6">
              Something went wrong. Don't worry, our team has been notified and we're working on it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Go Home
              </button>
              <Link
                href="/contact"
                className="border-2 border-primary/50 text-primary hover:bg-primary/10 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact Support
              </Link>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-focus/50 p-4 rounded-lg">
                <summary className="cursor-pointer text-text-muted mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-text-secondary overflow-auto max-h-64">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
