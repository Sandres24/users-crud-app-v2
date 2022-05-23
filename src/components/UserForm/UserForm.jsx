import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import './UserForm.css';

function UserForm({
   selectedUser,
   postUser,
   updateUser,
   handleCloseModal,
   handleDeselectUser,
}) {
   return (
      <Formik
         initialValues={{
            first_name: selectedUser.first_name || '',
            last_name: selectedUser.last_name || '',
            email: selectedUser.email || '',
            password: selectedUser.password || '',
            birthday: selectedUser.birthday || '',
         }}
         onSubmit={(values, { resetForm }) => {
            const user = {
               first_name: values.first_name,
               last_name: values.last_name,
               email: values.email,
               password: values.password,
               birthday: values.birthday,
            };
            if (!selectedUser.id) {
               postUser(user)
                  .then(() => {
                     resetForm();
                     handleCloseModal();
                  })
                  .catch((error) => {
                     console.error(error.response);
                  });
            } else {
               updateUser(selectedUser.id, user)
                  .then(() => {
                     resetForm();
                     handleCloseModal();
                  })
                  .catch((error) => {
                     console.error(error);
                  });
            }
         }}
         validate={(values) => {
            const errors = {};

            if (!values.first_name)
               errors.first_name = 'This field is required';
            if (!values.last_name) errors.last_name = 'This field is required';
            if (!values.email) errors.email = 'This field is required';
            if (!values.password) errors.password = 'This field is required';
            if (!values.birthday) errors.birthday = 'This field is required';

            return errors;
         }}
         enableReinitialize
      >
         {({ errors, resetForm }) => (
            <Form className='user-form'>
               <div className='form-group'>
                  <label className='label-field'>First name</label>
                  <Field
                     className='field'
                     type='text'
                     name='first_name'
                     autoComplete='off'
                  />
                  <ErrorMessage
                     name='first_name'
                     component={() => (
                        <small className='error-field-validation'>
                           {errors.first_name}
                        </small>
                     )}
                  />
               </div>
               <div className='form-group'>
                  <label className='label-field'>Last name</label>
                  <Field
                     className='field'
                     type='text'
                     name='last_name'
                     autoComplete='off'
                  />
                  <ErrorMessage
                     name='last_name'
                     component={() => (
                        <small className='error-field-validation'>
                           {errors.last_name}
                        </small>
                     )}
                  />
               </div>
               <div className='form-group'>
                  <label className='label-field'>Email</label>
                  <Field
                     className='field'
                     type='text'
                     name='email'
                     autoComplete='off'
                  />
                  <ErrorMessage
                     name='email'
                     component={() => (
                        <small className='error-field-validation'>
                           {errors.email}
                        </small>
                     )}
                  />
               </div>
               <div className='form-group'>
                  <label className='label-field'>Password</label>
                  <Field
                     className='field'
                     type='password'
                     name='password'
                     autoComplete='off'
                  />
                  <ErrorMessage
                     name='password'
                     component={() => (
                        <small className='error-field-validation'>
                           {errors.password}
                        </small>
                     )}
                  />
               </div>
               <div className='form-group'>
                  <label className='label-field'>Birthday</label>
                  <Field
                     className='field'
                     type='date'
                     name='birthday'
                     autoComplete='off'
                  />
                  <ErrorMessage
                     name='birthday'
                     component={() => (
                        <small className='error-field-validation'>
                           {errors.birthday}
                        </small>
                     )}
                  />
               </div>
               <div className='user-form-btn-section'>
                  <button
                     className='btn btn-user-form btn-submit-user'
                     type='submit'
                  >
                     {selectedUser.id ? 'Update user' : 'Add user'}
                  </button>
                  <button
                     className='btn btn-user-form btn-cancell-user'
                     type='button'
                     onClick={() => {
                        resetForm();
                        handleDeselectUser();
                     }}
                  >
                     Cancell
                  </button>
               </div>
            </Form>
         )}
      </Formik>
   );
}

export default UserForm;
