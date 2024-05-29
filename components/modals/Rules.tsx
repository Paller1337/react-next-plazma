import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import Button from '../Button';

const RulesModal = ({ isOpen, onRequestClose, contentLabel }) => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => { setIsVisible(true) }, 1500)
        return () => { clearTimeout(t) }
    }, [])
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    zIndex: 100,
                },
                content: {
                    padding: '20px 40px',
                    borderRadius: '0px',
                    width: 'fit-content',
                    height: 'fit-content',
                    maxWidth: '94vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 18,
                    flexDirection: 'column',
                    inset: '50%',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#252525',
                    marginTop: isVisible ? '0px' : '20vh',
                    opacity: isVisible ? '1' : '0',
                    transition: 'all .32s ease-in-out',
                },
            }}
        >
            <div className='worktime-section' style={{
                width: '-webkit-fill-available',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
            }}>
                <div className='aquatory-worktime__heading'>
                    <span className='title'>Правила посещения акватории</span>
                </div>

                <div className='worktime-section__timetable rules-section'>
                    <div className='worktime-section__timetable-content'>
                        <div className='worktime-section__timetable-row'>
                            <ul>
                                <li className='page-aquatory__list-item'>Приглашать диджеев, музыкантов гостям строго запрещено!</li>
                                <li className='page-aquatory__list-item'>Запрещено использование личной музыкальной аппаратуры.</li>
                                <li className='page-aquatory__list-item'>На всей территории Парк-отеля фото и видеосъёмка с
                                    дальнейшим использованием материалов в коммерческих целях запрещена!</li>
                                <li className='page-aquatory__list-item'>Купание в водоёме лицам до 18 лет без сопровождения взрослых запрещено!</li>
                                <li className='page-aquatory__list-item'>Вход на территорию в состоянии алкогольного опьянения запрещен.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <span style={{ fontSize: 14, textAlign: 'center' }}>При бронировании номеров вы соглашаетесь с правилами посещения акватории.</span>
            <div className='btn btn_black' onClick={onRequestClose} color='Gray'>Хорошо</div>
        </ReactModal>
    );
};

export default RulesModal
