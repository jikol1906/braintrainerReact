import React from 'react';
import './Modal.scss';
import { Transition } from 'react-transition-group';

const Modal = ({show,correct,numOfQuestions}) => {

    return (
        <Transition
                in={show}
                timeout={500}
                unmountOnExit
            >
                {state => (
                    <React.Fragment>
                        <div className={`overlay overlay-${state}`}></div>
                        <div className={`modal modal-${state}`}>
                            <div className="modal-body">
                                <h3>Your got</h3>
                                <p>{correct} out of {numOfQuestions} correct.</p>
                            </div>
                        </div>
                    </React.Fragment>
                )}
        </Transition>

    );

};

export default Modal;




