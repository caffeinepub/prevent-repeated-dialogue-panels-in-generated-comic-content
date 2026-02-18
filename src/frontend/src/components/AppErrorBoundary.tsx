import React, { Component, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Global error boundary that catches render-time errors and displays
 * a comic-styled recovery UI instead of a blank/black screen.
 */
export class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="comic-page max-w-2xl w-full p-8 space-y-6">
            <div className="text-center space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl uppercase text-destructive tracking-tight">
                CRASH!
              </h1>
              <p className="font-heading text-2xl uppercase text-foreground tracking-tight">
                Something went wrong
              </p>
            </div>

            <Alert variant="destructive" className="border-4">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle className="font-heading text-lg uppercase">Error Details</AlertTitle>
              <AlertDescription className="mt-2">
                <p className="font-bold mb-2">The app encountered an unexpected error:</p>
                <pre className="text-xs bg-destructive/10 p-3 border-2 border-destructive/20 overflow-auto max-h-32">
                  {this.state.error?.message || 'Unknown error'}
                </pre>
              </AlertDescription>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={this.handleReset}
                size="lg"
                className="font-heading text-lg uppercase border-4 shadow-[4px_4px_0_oklch(var(--border))]"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Try Again
              </Button>
              <Button
                onClick={this.handleReload}
                variant="outline"
                size="lg"
                className="font-heading text-lg uppercase border-4 shadow-[4px_4px_0_oklch(var(--border))]"
              >
                Reload Page
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              If this problem persists, try clearing your browser cache or using a different browser.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
