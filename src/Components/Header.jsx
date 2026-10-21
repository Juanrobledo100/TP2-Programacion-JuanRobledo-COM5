function Header({ rol }) {
  return (
    <header className="bg-body-tertiary border-bottom px-4 py-3">
      <span className="text-body-secondary">{rol}</span>
    </header>
  );
}

export default Header;
