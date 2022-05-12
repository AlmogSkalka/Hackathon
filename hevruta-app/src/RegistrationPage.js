import React from 'react'
import { Formik } from 'formik';

export default function RegistrationPage() {


    return (
        <div>
            <h1>טופס הרשמה לתנועת חברותא!</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'חובה למלא אימייל';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'כתובת אימייל אינה תקינה';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
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
                    <form onSubmit={handleSubmit}>
                        <label>כתובת דואר אלקטרוני</label>
                        <br />
                        <input
                            type="email"
                            name="uEmail"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='כתובת אימייל'
                        />
                        {errors.email && touched.email && errors.email}
                        <br />
                        <label>סיסמה</label>
                        <br />
                        <input
                            type="password"
                            name="uPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder='סיסמה'

                        />
                        <br />
                        <label>שם פרטי</label>
                        <br />
                        <input
                            type="text"
                            name="uName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='שם פרטי'
                        />
                        <br />
                        <label>שם משפחה</label>
                        <br />
                        <input
                            type="text"
                            name="uLastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='שם משפחה'
                        />
                        <br />
                        <label>תאריך לידה</label>
                        <br />
                        <input
                            type="date"
                            name="uBirthday"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <br />
                        <label>מספר נייד</label>
                        <br />
                        <input
                            type="number"
                            name="uBirthday"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>)
}
