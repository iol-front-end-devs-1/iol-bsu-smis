import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <img className='form-img-5' src='img/img-5.svg' alt='spaceship' />
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Sign Up
        </h1>
        <h2>
          Enter your details below
        </h2>

        {/*LRN*/}
        <div className='form-inputs'>
          <label className='form-label'>LRN</label>
          <input
            className='form-input'
            type='number'
            name='lrn'
            placeholder='Enter your LRN'
            value={values.lrn}
            onChange={handleChange}
          />
          {errors.lrn && <p>{errors.lrn}</p>}
        </div>

        {/*Secondary Laboratory School*/}
        <div className='form-inputs'>
          <label className='form-label'>Secondary Laboratory School</label>
          <input
            className='form-input'
            type='text'
            name='sls'
            placeholder='Enter your Secondary Laboratory School'
            value={values.sls}
            onChange={handleChange}
          />
          {errors.sls && <p>{errors.sls}</p>}
        </div>

        {/*First Name*/}
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your First Name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>

        {/*Last Name*/}
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your Last Name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>        

        {/*Mobile Number*/}
        <div className='form-inputs'>
          <label className='form-label'>Mobile Number</label>
          <input
            className='form-input'
            type='number'
            name='mobilenumber'
            placeholder='Enter your Mobile Number'
            value={values.mobilenumber}
            onChange={handleChange}
          />
          {errors.mobilenumber && <p>{errors.mobilenumber}</p>}
        </div>           

        
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;