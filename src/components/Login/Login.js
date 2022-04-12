import React, {useState, useCallback} from 'react';
import { Formik } from 'formik';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import axios from 'axios'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [exist, setExist] = useState(false)
    
    const handlePassword = useCallback(() => setShowPassword(!showPassword))
    
    return (
     <Formik
       initialValues={{ email: '', password: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'این فیلد ضروری است';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'آدرس ایمیل نامعتبر است';
         }
         if(!values.password){
          errors.password = 'این فیلد ضروری است'
        }else if(values.password.length < 6){
          errors.password = "رمز عبور وارد شده خیلی کوتاه هست"
        }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            setSubmitting(false);
            axios.get('http://localhost:3001/users')
                .then(res => res.data).then(users => setExist(users.includes(user => {
                  return user.email == values.email && user.password == values.password
                }))).then(alert(exist ? 'خوش آمدید' : 'اطلاعات وارد شده نادرست است!'))
                .then(console.log(exist))
            
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form className='form-login' onSubmit={handleSubmit}>
            <h2 className='form-header'>خوش آمدید</h2>
            <div className='field'>
                <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='ایمیل'
                />
            </div>
            <p className='error'>
                {errors.email && touched.email && errors.email}
            </p>
            <div className='field'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder='رمز عبور'
                />
                {showPassword ? 
                    <BsFillEyeFill className='stylePass' onClick={handlePassword}/> :
                    <BsFillEyeSlashFill className='stylePass' onClick={handlePassword}/>}
           </div>
           <p className='error'>
              {errors.password && touched.password && errors.password}
          </p>
           <p className='forgot'>فراموش کردید؟</p>
           <button type="submit" disabled={isSubmitting} className='submit'>
             ورود
           </button>
         </form>
       )}
     </Formik>
    )
}

export default Login;
