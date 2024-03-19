import React, { useState } from 'react'

const FormValidation = () => {

    let[formstate,setFormstate]=useState({
        Requiredfield:"",Email:"",Password:"",ConfirmPassword:"",URL:"",Digits:"",Number:"",AlphaNumeric:"",TextArea:""
    })

    let{Requiredfield,Email,Password,ConfirmPassword,URL,Digits,Number,AlphaNumeric,TextArea}=formstate;

    let handleChange=(e)=>{
        let{name,value}=e.target;
        setFormstate({...formstate,[name]:value})
    }

    let[errors,setErrors]=useState({});

    let handlesubmit=(e)=>{
        e.preventDefault();

        let validationErrors={};

        if(Requiredfield ==""){ validationErrors.Requiredfield="Enter Value" }

        if(Email=="")
        { validationErrors.Email="Enter values";}
        else if(!/\S+@\S+\.\S+/.test(Email))
        { validationErrors.Email="Enter valid email";  }

        if(Password=="" || ConfirmPassword==""){ validationErrors.Password="Enter Some Credentials"; }
        if(ConfirmPassword != Password){ validationErrors.ConfirmPassword="Enter Password Correctly" }

        const RegexDig = /^[0-9]+$/
        if(Digits=="")
        { validationErrors.Digits="Enter values";}
        else if(RegexDig.test(Digits))
        { validationErrors.Digits="Enter valid Digit";  }

        const regexUrl= /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

        if(URL=="")
        { validationErrors.URL="Enter values";}
        else if(regexUrl.test(URL))
        { validationErrors.URL="Enter valid email";  }

        if(Number=="")
        { validationErrors.Number="Enter values";}
        else if(/^-?\d+(?:\.\d+)?$/.test(Number))
        { validationErrors.Number="Enter valid Number";  }

        if(AlphaNumeric=="")
        { validationErrors.AlphaNumeric="Enter values";}
        else if(/^[a-zA-Z0-9\s]+$/ .test(AlphaNumeric))
        { validationErrors.AlphaNumeric="Enter valid email";  }

        if(TextArea=="") {validationErrors.TextArea="Enter values";}

        setErrors(validationErrors)
    }

    let handleReset=(e)=>{
        e.preventDefault();
        setFormstate({
        Requiredfield:"",Email:"",Password:"",ConfirmPassword:"",URL:"",Digits:"",Number:"",AlphaNumeric:"",TextArea:""
    })
    }

  return (
    <form className='w-6/12 bg-transparent py-5 px-9 '>
        <h1 className=' text-lg font-bold  text-red-800 border-b-[2px]'>Form Validation</h1>
        
        <main className='form-group p-2 my-3'>
            <label htmlFor="">RequiredField</label>
            <div className='inp mt-2'> <input type="text" onChange={handleChange} value={Requiredfield} name='Requiredfield' className='bg-gray-50 border w-full rounded p-1'/> </div>
            <div className='form-group text-red-800'> {errors.Requiredfield && <span>Enter some Value</span>} </div>
        </main>

        <main className='form-group p-2 my-3'>
            <label htmlFor="">Email</label>
            <div className='inp mt-2'> <input type="email"  value={Email} onChange={handleChange} name="Email" placeholder='Email' className='bg-gray-50 border w-full rounded p-1'/> </div>
            <div className='form-group text-red-800'>{errors.Email && <span>{errors.Email}</span>}</div>
        </main>

        <main className='form-group p-2 my-3'>
            <label htmlFor="">Password</label>
            <div className='inp mt-2'><input type="password" value={Password} onChange={handleChange} className='bg-gray-50 border w-full rounded p-1' name='Password' placeholder='password' /></div>
            <div className='form-group text-red-800'> {errors.Password && <span>{errors.Password}</span>} </div>

            <div className='inp mt-2'> <input type="password" onChange={handleChange} value={ConfirmPassword} name="ConfirmPassword" className='bg-gray-50 border w-full rounded p-1' placeholder='conformpassword' /> </div>

            <div className='form-group text-red-800'> {errors.ConfirmPassword && <span>{errors.ConfirmPassword}</span>} </div>
        </main>

        <main className='form-group p-2 my-3'>
            <label htmlFor="">URL</label>
            <div className='inp mt-2'> <input type="text" name='URL' value={URL} onChange={handleChange} placeholder='URL' className='bg-gray-50 border w-full rounded p-1' /> </div>
            <div className='form-group text-red-800'> {errors.URL && <span>{errors.URL}</span>} </div>
        </main>

        <main className='form-group p-2 my-3'>
            <label htmlFor="">Digits</label>
            <div className='inp mt-2' > <input onChange={handleChange} value={Digits} className='bg-gray-50 border w-full rounded p-1' type="text" name='Digits' placeholder='digits' /> </div>
            <div className='form-group text-red-800'> {errors.Digits && <span>{errors.Digits}</span>} </div>
        </main>

        <main className='form-group p-2 my-3'>
            <label htmlFor="">Number</label>
            <div className='inp mt-2'> <input type="text" onChange={handleChange} value={Number} name='Number' placeholder='digits' className='bg-gray-50 border w-full rounded p-1'/> </div>
            <div className='form-group text-red-800'> {errors.Number && <span>{errors.Number}</span>} </div>
        </main>

        <main className='form-group p-2 my-3'>
            <label htmlFor="">Alpha-numeric</label>
            <div className='inp mt-2'> <input type="text" value={AlphaNumeric} onChange={handleChange} name='AlphaNumeric' placeholder='digits' className='bg-gray-50 border w-full rounded p-1' /> </div>
            <div className='form-group text-red-800'> {errors.AlphaNumeric && <span>{errors.AlphaNumeric}</span>} </div>
        </main>

        <main className='form-group p-2 my-3'>
            <label htmlFor="">TextArea</label>
            <div className='inp mt-2'> <textarea value={TextArea} onChange={handleChange} name="TextArea" id="" cols="" rows="5" className='bg-gray-50 border w-full rounded p-1'></textarea> </div>
            <div className='form-group text-red-800'> {errors.TextArea && <span>{errors.TextArea}</span>} </div>
        </main>

        <main > 
            <div>
                <button onClick={handlesubmit} className='bg-red-800 rounded-md px-4 py-1'>Submit</button>
                <button onClick={handleReset} className='bg-red-800 rounded-md px-4 py-1 ms-3'>Cancel</button>
            </div>
        </main>

    </form>
  )
}

export default FormValidation
