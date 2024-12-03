import style from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const addFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.number().required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={addFormSchema}
    >
      <Form className={style.form}>
        <div className={style.fieldWrap}>
          <label className={style.formLabel} htmlFor="name">
            Name
          </label>
          <Field
            className={style.formField}
            name="name"
            type="text"
            placeholder="Joan Smith"
          />
          <ErrorMessage className={style.error} name="name" component="span" />
        </div>
        <div className={style.fieldWrap}>
          <label className={style.formLabel} htmlFor="number">
            Number
          </label>
          <Field
            className={style.formField}
            name="number"
            type="text"
            placeholder="111-11-11"
          />
          <ErrorMessage
            className={style.error}
            name="number"
            component="span"
          />
        </div>

        <button className={style.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
