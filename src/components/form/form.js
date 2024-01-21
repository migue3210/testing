import React from 'react'
import './form.css'
const CustomInput = ({ ...props }) => {

    return (
        <>
            <div className="input_wrapp">
                {props.label &&
                    <p className="label">
                        {props.label}
                    </p>
                }
                <div className='input_container'>
                    {props.preffixIcon &&
                        <div className="input_icon">
                            {props.preffixIcon}
                        </div>
                    }

                    <input
                        type={Text}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        name={props.name}
                    />

                    {props.suffixIcon &&
                        <div className="input_icon">
                            {props.suffixIcon}
                        </div>
                    }

                </div>
            </div>
        </>
    )
}


export default CustomInput