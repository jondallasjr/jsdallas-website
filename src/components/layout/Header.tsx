import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif text-gray-900">
              J.S. Dallas, Inc.
            </h1>
          </div>
          <div className="hidden md:flex items-center">
            <Navigation />
          </div>
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;