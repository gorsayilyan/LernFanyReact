// import React from 'react';
// import { useFormik } from 'formik';

// // A custom validation function. This must return an object
// // which keys are symmetrical to our values/initialValues
// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//       errors.firstName = 'Must be 15 characters or less';
//     }
  
//     if (!values.lastName) {
//       errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//       errors.lastName = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };
  
//   const SignupForm = () => {
//     // Pass the useFormik() hook initial form values and a submit function that will
//     // be called when the form is submitted
//     const formik = useFormik({
//       initialValues: {
//         firstName: '',
//         lastName: '',
//         email: '',
//       },
//       validate,
//       onSubmit: values => {
//         alert(JSON.stringify(values, null, 2));
//       },
//     });
//     return (
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           id="firstName"
//           name="firstName"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.firstName}
//         />
//         {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           id="lastName"
//           name="lastName"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.lastName}
//         />
//         {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
//         <label htmlFor="email">Email Address</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//         {formik.errors.email ? <div>{formik.errors.email}</div> : null}
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };
// export default SignupForm




















// import React from 'react';
// import { useFormik } from 'formik';

// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validate,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstName}
//       />
//       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastName}
//       />
//       {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.errors.email ? <div>{formik.errors.email}</div> : null}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm





















// import React from 'react';
// import { useFormik } from 'formik';

// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validate,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstName}
//       />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div>{formik.errors.firstName}</div>
//       ) : null}
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastName}
//       />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div>{formik.errors.lastName}</div>
//       ) : null}
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default SignupForm













// --------------------------========== Yup =========-------------------------

// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, 'Must be 15 characters or less')
//         .required('Required'),
//       lastName: Yup.string()
//         .max(20, 'Must be 20 characters or less')
//         .required('Required'),
//       email: Yup.string()
//         .email('Invalid email address')
//         .required('Required'),
//     }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstName}
//       />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div>{formik.errors.firstName}</div>
//       ) : null}
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastName}
//       />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div>{formik.errors.lastName}</div>
//       ) : null}
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm
















// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, 'Must be 15 characters or less')
//         .required('Required'),
//       lastName: Yup.string()
//         .max(20, 'Must be 20 characters or less')
//         .required('Required'),
//       email: Yup.string()
//         .email('Invalid email address')
//         .required('Required'),
//     }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input name="firstName" {...formik.getFieldProps('firstName')} />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div>{formik.errors.firstName}</div>
//       ) : null}
//       <label htmlFor="lastName">Last Name</label>
//       <input name="lastName" {...formik.getFieldProps('lastName')} />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div>{formik.errors.lastName}</div>
//       ) : null}
//       <label htmlFor="email">Email Address</label>
//       <input name="email" {...formik.getFieldProps('email')} />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default SignupForm












// import React from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   return (
//     <Formik
//       initialValues={{ firstName: '', lastName: '', email: '' }}
//       validationSchema={Yup.object({
//         firstName: Yup.string()
//           .max(15, 'Must be 15 characters or less')
//           .required('Required'),
//         lastName: Yup.string()
//           .max(20, 'Must be 20 characters or less')
//           .required('Required'),
//         email: Yup.string()
//           .email('Invalid email address')
//           .required('Required'),
//       })} 
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {formik => (
//         <form onSubmit={formik.handleSubmit}>
//           <label htmlFor="firstName">First Name</label>
//           <input id="firstName" {...formik.getFieldProps('firstName')} />
//           {formik.touched.firstName && formik.errors.firstName ? (
//             <div>{formik.errors.firstName}</div>
//           ) : null}
//           <label htmlFor="lastName">Last Name</label>
//           <input id="lastName" {...formik.getFieldProps('lastName')} />
//           {formik.touched.lastName && formik.errors.lastName ? (
//             <div>{formik.errors.lastName}</div>
//           ) : null}
//           <label htmlFor="email">Email Address</label>
//           <input id="email" {...formik.getFieldProps('email')} />
//           {formik.touched.email && formik.errors.email ? (
//             <div>{formik.errors.email}</div>
//           ) : null}
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </Formik>
//   );
// };

// export default SignupForm













// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   return (
//     <Formik
//       initialValues={{ firstName: '', lastName: '', email: '' }}
//       validationSchema={Yup.object({
//         firstName: Yup.string()
//           .max(15, 'Must be 15 characters or less')
//           .required('Required'),
//         lastName: Yup.string()
//           .max(20, 'Must be 20 characters or less')
//           .required('Required'),
//         email: Yup.string()
//           .email('Invalid email address')
//           .required('Required'),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field name="firstName" type="text" />
//         <ErrorMessage name="firstName" />
//         <label htmlFor="lastName">Last Name</label>
//         <Field name="lastName" type="text" />
//         <ErrorMessage name="lastName" />
//         <label htmlFor="email">Email Address</label>
//         <Field name="email" type="email" />
//         <ErrorMessage name="email" />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default SignupForm
















// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Form, useField } from 'formik';
// import styled from '@emotion/styled';
// import * as Yup from 'yup';

// const MyTextInput = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input> and also replace ErrorMessage entirely.
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// const MyCheckbox = ({ children, ...props }) => {
//   // We need to tell useField what type of input this is
//   // since React treats radios and checkboxes differently
//   // than inputs/select/textarea.
//   const [field, meta] = useField({ ...props, type: 'checkbox' });
//   return (
//     <>
//       <label className="checkbox">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// // Styled components ....
// const StyledSelect = styled.select`
//   /** ... * /
// `;

// const StyledErrorMessage = styled.div`
//   /** ... * /
// `;

// const StyledLabel = styled.label`
//  /** ...* /
// `;

// const MySelect = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
//       <StyledSelect {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <StyledErrorMessage>{meta.error}</StyledErrorMessage>
//       ) : null}
//     </>
//   );
// };

// // And now we can use these
// const SignupForm = () => {
//   return (
//     <>
//       <h1>Subscribe!</h1>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           email: '',
//           acceptedTerms: false, // added for our checkbox
//           jobType: '', // added for our select
//         }}
//         validationSchema={Yup.object({
//           firstName: Yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required('Required'),
//           lastName: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('Required'),
//           email: Yup.string()
//             .email('Invalid email address')
//             .required('Required'),
//           acceptedTerms: Yup.boolean()
//             .required('Required')
//             .oneOf([true], 'You must accept the terms and conditions.'),
//           jobType: Yup.string()
//             .oneOf(
//               ['designer', 'development', 'product', 'other'],
//               'Invalid Job Type'
//             )
//             .required('Required'),
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         <Form>
//           <MyTextInput
//             label="First Name"
//             name="firstName"
//             type="text"
//             placeholder="Jane"
//           />
//           <MyTextInput
//             label="Last Name"
//             name="lastName"
//             type="text"
//             placeholder="Doe"
//           />
//           <MyTextInput
//             label="Email Address"
//             name="email"
//             type="email"
//             placeholder="jane@formik.com"
//           />
//           <MySelect label="Job Type" name="jobType">
//             <option value="">Select a job type</option>
//             <option value="designer">Designer</option>
//             <option value="development">Developer</option>
//             <option value="product">Product Manager</option>
//             <option value="other">Other</option>
//           </MySelect>
//           <MyCheckbox name="acceptedTerms">
//             I accept the terms and conditions
//           </MyCheckbox>

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </>
//   );
// };
// export default SignupForm