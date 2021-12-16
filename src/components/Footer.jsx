import "../styles/Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <img src="/logo.svg" alt="" className="footer_logo" />
            <p className="footer_text">
                <span>c</span> {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer
