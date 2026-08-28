function Card({ title, children }) {
    return <div className="dashboard-card">
        <h5>{title}</h5>
        {children}
    </div>
}

export default Card;