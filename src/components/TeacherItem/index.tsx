import React from 'react';
import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface teacherInterface {
    id: number;
    subject: string;
    cost: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}
interface TeacherItemProps {
    teacher: teacherInterface;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
    const { id, subject, cost, name, avatar, whatsapp, bio, } = teacher;

    function createNewConnection() {
        api.post('connections', {
            user_id: id,
        });
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={avatar} alt={name} />
                <div>
                    <strong>{name}</strong>
                    <span>{subject}</span>

                </div>
            </header>
            <p>{bio}</p>
            <footer>
                <p>
                    Preço por Hora
               <strong>R$ {cost}</strong>
                </p>
                <a
                    onClick={createNewConnection}
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={whatsappIcon}
                        alt="whatsApp"
                    />
            Entrar em contato
        </a>
            </footer>
        </article>
    );
}
export default TeacherItem;