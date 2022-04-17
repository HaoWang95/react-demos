import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class CustomErrorBoundary extends Component<ErrorProps, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    console.log("Uncaught Error", _error, errorInfo);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback? this.props.fallback: (<h1>Sorry, there is an error</h1>)
    }
    return this.props.children;
  }
}

export default CustomErrorBoundary;
