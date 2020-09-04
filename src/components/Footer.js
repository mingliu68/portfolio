import React from 'react';


const Footer = () => {
    const year = new Date().getFullYear()

    const footerContent = (viewType) => {
        return (
            <div>
                <span className="copyright">&copy;</span>
                <span>{year} Ming Liu </span>

                {
                    viewType === "mobile"
                        ? <br />
                        : viewType === "full"
                            ? <span className="diamond">&diams;</span>
                            : null
                }
                <span> hello</span>
                <span className="at">@</span>
                <span>mingliu.dev </span>
                <span className="diamond">&diams;</span>
                <span> Built in NY with </span>
                <span className="heart">♥</span>
            </div>
        )
    }

    return (
        <div className="footer-inner">
            <div className="mobile-footer">
                {footerContent("mobile")}
            </div>
            <div className="full-footer">
                {footerContent("full")}
            </div>
        </div>
    )
}

export default Footer;