import './ContactForm.css';
import Navbar from '../../Components/Home/Navbar/Navbar';
import images01 from '../../images/arrowpic.jpg';
import { useState } from 'react';


const ContactForm = () => {

const [info, setInfo] = useState({});

const handleBlur = e => {

	const newInfo = { ...info };
	newInfo[e.target.name] = e.target.value;
	setInfo(newInfo);
};

const handleSubmit=(e)=>
    {

        e.preventDefault();

        const message=info.message;
        const email=info.email;

        const name=info.name;

        const date=new Date();

        const month=date.getMonth()+1;

        const day=date.getDate()

        const year=date.getFullYear();

        const reviewDate={day,month,year};



        const ContactInfo={name,message,email,reviewDate};


        console.log(ContactInfo);

           fetch('http://localhost:5000/addContact',
           {
               method:'POST',
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify(ContactInfo)
           })
           .then(res=>res.json())
           .then(result=>
            {
                if(result)alert('Successfully Contact');
            })

    }


	
    return (
		<div>
			<Navbar></Navbar>

            <div class="contact1">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
				<img style={{height:'500px',width:'500px'}}src={images01} alt="IMG"/>
			</div>

			<form onSubmit={handleSubmit} class="contact1-form validate-form">
				<span class="contact1-form-title">
					Contact Us
				</span>

				<div class="wrap-input1 validate-input">
					<input onBlur={handleBlur} class="input1" type="text" name="name" placeholder="Name"/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input">
					<input onBlur={handleBlur} class="input1" type="text" name="email" placeholder="Email"/>
					<span class="shadow-input1"></span>
				</div>

				

				<div class="wrap-input1 validate-input">
					<textarea onBlur={handleBlur} class="input1" name="message" placeholder="Message"></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button class="contact1-form-btn">
						<span>
							Send
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>

        
		</div>
		
    );
};

export default ContactForm;