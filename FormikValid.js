import React from "react";
import { Formik, Form} from  "formik";
import * as Yup from "yup";

const initialValues = {
    frstName: "",
    lastName: "",
}

const onSubmit = values => {
    console.log("formik values ", values)
}

const validationSchema = Yup.object({
    frstName:Yup.string().required("Recuired")
    .max(15,'Must be 15 characters or less')
    .min(2,'Must be 2 characters or more'),
    lastName:Yup.string().required("Recuired")
    .max(20,'Must be 20 characters or less')
    .min(5,'Must be 5 characters or more')
})


function FormikValid (){    

        return(
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {props=>(
                    console.log(props.touched),

                 <Form onSubmit={props.handleSubmit}>
                    <label>First name</label>
                    <br/>
                    <input 
                        name="frstName" 
                        onChange={props.handleChange} 
                        value={props.values.frstName}
                        onBlur={props.handleBlur}
                    />
                    <br />
                    {
                    props.touched.frstName && props.errors.frstName && 
                    <div className="errorMasage">{props.errors.frstName}</div>
                    }
                    <br />
                    <br/>
                    <label>First name</label>
                    <br/>
                    <input 
                        name="lastName" 
                        onChange={props.handleChange} 
                        value={props.values.lastName}
                        onBlur={props.handleBlur}
                    />
                    <br/>
                    {props.touched.lastName && props.errors.lastName?
                    <div className="errorMasage">{props.errors.lastName}</div>:
                    null}
                    <br/>
                    <button type="submit">Submit</button>
                </Form>   
                )}        
            </Formik>
        )
}

export default FormikValid