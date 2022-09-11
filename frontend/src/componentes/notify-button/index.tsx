import NotifyIcon from '../../assets/img/notify-icon.svg'
import { BASE_URL } from '../../utils/request';
import axios from "axios";

import './styles.css'
import { toast } from 'react-toastify';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS enviado com sucesso.");
        })
}

function NotifyButton({ saleId }: Props) {

    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={NotifyIcon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotifyButton;
