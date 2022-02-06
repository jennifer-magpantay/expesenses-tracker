import React, {FormEvent, useState} from "react";
import {api } from '../services/api';
import Modal from "react-modal";
import { ModalForm, ModalTypeContainer} from "./_newTransactionsModal";
import closeIcon from '../../assets/close-icon.svg';
import incomeIcon from '../../assets/income-icon.svg';
import outcomeIcon from '../../assets/outcome-icon.svg';

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionsModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) => {

  const [title, setTitle] = useState('');
  const[amount, setAmount] = useState(0);
  const [type, setType]= useState('');
  const [category, setCategory]= useState('');
  const [date, setDate] =useState(new Date());

  function handleFormSubmit(event: FormEvent){
    event.preventDefault();

    const data = {title, amount, type, category, date};
    api.post('/transactions', data);

    setTitle('');
    setAmount(0);
    setType('');
    setCategory('');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal--overlay"
      className="modal--content"
    >

    <button type="button" className="button--modal-close" onClick={onRequestClose}>
      <img src={closeIcon} alt='closing button'/>
    </button>

      <ModalForm onSubmit={handleFormSubmit}>
          <span className="title">New Transaction</span>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={event => setTitle(event.target.value)}/>

        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" value={amount} onChange={event => setAmount(Number(event.target.value))}/>

        <ModalTypeContainer>
           <button type="button" className='modal--button-type' onClick={()=> setType('income')}>
      <img src={incomeIcon} alt='Income' className='icon-income'/>Income
    </button>

     <button type="button" className='modal--button-type' onClick={()=> setType('outcome')}>
      <img src={outcomeIcon} alt='Outcome' className='icon-outcome'/>Outcome
    </button>
        </ModalTypeContainer>

        <label htmlFor="category">Category</label>
        <input type="text" name="category" id="category" value={category} onChange={event => setCategory(event.target.value)}/>

        <button type="submit" className='form--button-submit'>REGISTER</button>
      </ModalForm>
    </Modal>
  );
};
