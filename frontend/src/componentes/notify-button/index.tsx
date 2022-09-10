import NotifyIcon from '../../assets/img/notify-icon.svg'

import './styles.css'

function NotifyButton() {

    return (
        <>
            <div className="dsmeta-red-btn">
                <img src={NotifyIcon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotifyButton;
