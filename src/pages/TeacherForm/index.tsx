import React from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primero passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>
                        Seus Dados
                    </legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <TextArea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>
                        Sobre a aula
                    </legend>
                    <Select name="subject" label="Matéria" />
                    <Input name="cost" label="Custo de sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Seus Dados
                    </legend>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso" />
                        Importante! <br />
                        Preencha todos os dados.

                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}
export default TeacherForm;