function Header({ onMenuClick,menuOpen }) {
    return (
        <header className="header">
            <h1>Expense Tracker</h1>
            <button
                type="button"
                className="mobile-menu-button"
                onClick={onMenuClick}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
            >
                ☰
            </button>
        </header>
    );
}

export default Header;