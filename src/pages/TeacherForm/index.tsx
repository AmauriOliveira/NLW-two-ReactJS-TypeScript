import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState(
        [
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]
    );

    function addNewScheduleItem() {
        setScheduleItems(
            [
                ...scheduleItems,
                {
                    week_day: 0,
                    from: '',
                    to: ''
                }
            ]
        );

    };

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();


        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro Realizado com sucesso!!!');

            history.push('/');// manda de volta a home
        }).catch(() => {
            alert('Erro no cadastro!!!');
        });

    };

    function setSheduleItemVelue(position: number, field: string, value: string) {
        const updateSheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return { ...scheduleItem }
        });

        setScheduleItems(updateSheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primero passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>
                            Seus Dados
                    </legend>
                        <Input
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(event) => { setName(event.target.value) }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(event) => { setAvatar(event.target.value) }}
                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(event) => { setWhatsapp(event.target.value) }}
                        />
                        <TextArea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(event) => { setBio(event.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Sobre a aula
                    </legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(event) => { setSubject(event.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Historia', label: 'Historia' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Inglês', label: 'Inglês' },
                                { value: 'Sociologia', label: 'Sociologia' },
                                { value: 'Filosofia', label: 'Filosofia' },
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo de sua hora por aula"
                            value={cost}
                            onChange={(event) => { setCost(event.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                        </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={index} className="shedule-item" >
                                    <Select
                                        name="week_day"
                                        value={scheduleItem.week_day}
                                        label="Dia da Semana"
                                        onChange={(event) => setSheduleItemVelue(index, 'week_day', event.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-Feira' },
                                            { value: '2', label: 'Terça-Feira' },
                                            { value: '3', label: 'Quarta-Feira' },
                                            { value: '4', label: 'Quinta-Feira' },
                                            { value: '5', label: 'Sexta-Feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={(event) => setSheduleItemVelue(index, 'from', event.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={(event) => setSheduleItemVelue(index, 'to', event.target.value)}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso" />
                        Importante! <br />
                        Preencha todos os dados.

                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}
export default TeacherForm;