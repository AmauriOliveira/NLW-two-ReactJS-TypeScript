import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/22779227?s=460&u=bd374c5009fd9a146fc8a10fcd63020ca1ea34bb&v=4" alt="Amauri Oliveira" />
                <div>
                    <strong>Amauri Oliveira</strong>
                    <span>Memes</span>

                </div>
            </header>
            <p>
                Ser professor é muito mais que exercer uma profissão,
                dar aulas, aplicar e corrigir provas.
                Ser professor é uma profissão que exige muito esforço,
                preparo;
            </p>
            <footer>
                <p>
                    Preço por Hora
               <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img
                        src={whatsappIcon}
                        alt="whatsApp"
                    />
            Entrar em contato
        </button>
            </footer>
        </article>
    );
}
export default TeacherItem;