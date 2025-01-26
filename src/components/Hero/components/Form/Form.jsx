import React from 'react';
import Button from '../shared/Button/Button';
import Title from '../shared/Title/Title';
import Input from './components/Input/Input';
import './form.css';

function Form({ title }) {
  return (
    <div className="form">
      <Title titleText="ثبت نام" darkOrLight="dark" textCenter="textCenter" />
      <form className="form__elements">
        <Input type="text" placeholder="نام خود را وارد کنید" />
        <Input type="text" placeholder="رمز خود را وارد نمایید" />
      </form>
      <Button btnContent="ثبت نام" />
    </div>
  );
}

export default Form;
