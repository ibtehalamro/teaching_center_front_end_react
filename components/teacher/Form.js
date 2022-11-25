import React from 'react';
import form from '../../styles/form/form.module.scss';
import   {useRouter}  from 'next/router';
import TextInput from '../Form/TextInput';

export const Form = ({submit}) => {
  const router = useRouter();
  return (
    <div className={form.form_Container}>
    <h1 className={form.form_container_title}>Create New Teacher</h1>
   <form className={form.form} onSubmit={(event)=>submit( event,router)}>
   <TextInput elementClass={form.form__group} name="firstName" label="First name" />
   <TextInput elementClass={form.form__group} name="secondName" label="Second name" />
   <TextInput elementClass={form.form__group} name="lastName" label="Last name" />
   <TextInput elementClass={form.form__group} name="city" label="City" />
   <TextInput elementClass={form.form__group} name="mobileNumber" label="Mobile Number" />

  
    <input type="submit" value={"Enter"} />
   </form>
   </div>
  )
}
