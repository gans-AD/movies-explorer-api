import "./InfoTooltip.css"

function InfoTooltip(props) {
    return (
        <div className={`info-tooltip ${props.isOpen ? "info-tooltip_opened" : "info-tooltip_closed"}`}>
            <article className="info-tooltip__container">
                <div className="info-tooltip__status info-tooltip__success"></div>
                <h3 className="info-tooltip__title">Успешно</h3>
                <p className="info-tooltip__text">{props.text}</p>
                <button
                    type="button"
                    className="info-tooltip__close-btn"
                    aria-label="кнопка закрыть"
                    onClick={props.onClose}
                ></button>
            </article>
        </div>
    )
}

export default InfoTooltip;