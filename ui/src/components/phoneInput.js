import React from 'react';
import styles from './style.module.css';
import axios from 'axios';

function PhoneInput(props) {
	const { value, handleChange, hashHandleChange } = props;

	const Continue = (e) => {
		axios
			.post('http://localhost:8888/sendOTP', {
				phone: `+91${value.phone}`
			})
			.then(function(res) {
				console.log(res.data.otp);
				const hash = res.data.hash;
				hashHandleChange(hash);
			});

		e.preventDefault();
		props.nextStep();
	};
	return (
		<div className={styles}>
			<div className="d-flex pb-3 flex-column align-items-center justify-content-center min-vh-100">
				<h1 className="py-5">Decentralized E-Voting System</h1>
				<div className={styles.container}>					
					<div className={styles.input_container}>
						<input
							type="tel"
							value={value.phone}
							onChange={handleChange('phone')}
							placeholder="Enter your phone number"
							className="form-control"
							style={{width: "130%"}}
						/>
					</div>
					<button onClick={Continue} className="btn btn-outline-dark my-3">
						Send OTP
					</button>
				</div>
			
			<br/>
			
			<div className="shadow rounded p-2">
				Deployed application requires OTP authentication.
			</div>
			</div>
		</div>
	);
}

export default PhoneInput;
