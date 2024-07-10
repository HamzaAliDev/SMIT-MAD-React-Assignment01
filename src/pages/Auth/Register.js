import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button'

const uniqueId = () => Math.random().toString(36).slice(4);
let initialState = { fullName: "",email: "", password: ""};
const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const LOCAL_STORAGE_KEY = 'myProjectUsers';

export default function Register() {

const [state, setState] = useState(initialState)
const [users, setUsers] = useState([])
const navigate = useNavigate()


    // Load users from local storage when the component mounts
    useEffect(() => {
        const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);



const handleChange = (e) => { 
    setState(s => ({...s,[e.target.name]: e.target.value}))        
}

const handleRegister = () => {
    let { fullName ,email, password } = state
    fullName = fullName.trim()
    email = email.trim()

    if(fullName === "" || email === "" || password === ''){ return toast.error("All fields are must required")}
    if(!email.match(isValidEmail)){return toast.error("Invalid Email")}  
    if(password.length < 6){return toast.warning("Password must be 6 characters")}
    if(users.find(user => user.email === email)){return toast.info("Already Have an account")}
    
    let user = {
        fullName,
        email,
        password,
        id:uniqueId()
    }
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUsers)); // Store users in local storage
    toast.success("Added User Successfully!");
    setState(initialState);
    navigate("/")
    // console.log(users);

}




    return (
        <main>
            <div className="container" >
                <div className="card card-size p-4">
                    <div className="card-body">
                        <h3 className="m-3">Register</h3>
                        <p className="m-3 fw-normal">Continue your design journey with us.</p>
                        <div className="m-3">
                            <label className="form-label fw-semibold fs-6" >Full Name</label>
                            <input type="text" className="form-control" name='fullName'  value={state.fullName} onChange={handleChange} />
                        </div>
                        <div className="m-3">
                            <label className="form-label fw-semibold fs-6" >Email address</label>
                            <input type="email" className="form-control" name='email'  value={state.email} onChange={handleChange} />
                        </div>
                        <div className="m-3">
                            <label className="form-label fw-semibold fs-6" >Password</label>
                            <input type="password" className="form-control" name='password' value={state.password} onChange={handleChange}/>
                        </div>
                        <div className='row px-4 mt-5'>
                            <Button text="Register" onClick={handleRegister}/>
                        </div>
                        <div className='row mt-3'>
                            <div className="col d-inline-flex  align-items-center justify-content-center">
                                <p className="mb-0">Already have an account?</p><Link to='/' className="fw-semibold fs-6  link-underline link-underline-opacity-0 link-underline-opacity-75-hover" style={{ color: '#234050' }}>Login</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    )
}
