import React, { Component, ReactNode } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface ErrorBoundaryState {
  hasError: boolean;
  sectionName: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  sectionName: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, sectionName: props.sectionName };
  }

  static getDerivedStateFromError(): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error in section [${this.state.sectionName}]:`, error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ErrorBoundary sectionName="Navigation">
        <Navigation />
      </ErrorBoundary>
      <main>
        <ErrorBoundary sectionName="Hero">
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary sectionName="Services">
          <Services />
        </ErrorBoundary>
        <ErrorBoundary sectionName="About">
          <About />
        </ErrorBoundary>
        <ErrorBoundary sectionName="Testimonials">
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary sectionName="Contact">
          <Contact />
        </ErrorBoundary>
      </main>
      <ErrorBoundary sectionName="Footer">
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
