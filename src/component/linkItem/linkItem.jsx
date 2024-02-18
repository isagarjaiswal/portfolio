
export const LinkItem = ({ link, icon, className }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    }
    return (
        <div
            onClick={handleClick}
            className={`side-social-item`}
            rel="noopener  noreferrer">
            <div className={`side-social-item-${className}`}>
                {icon}
            </div>
        </div>
    )
}
