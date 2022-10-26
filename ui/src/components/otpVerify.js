import React, { useState } from 'react';
import styles from './style.module.css';
import axios from 'axios';

function OtpVerify(props) {
	axios.defaults.withCredentials = true;

	const [ error, setError ] = useState({
		error: '',
		success: ''
	});
	const { value, handleChange } = props;
	const back = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	const confirmOtp = () => {
		axios
			.post('http://localhost:8888/verifyOTP', {
				phone: `+91${value.phone}`,
				hash: `${value.hash}`,
				otp: `${value.otp}`,
				withCredentials: true
			})
			.then(function(res) {
				console.log(res.data);
				sessionStorage.setItem("isLoggedIn", "true");
				window.location.reload();
			})
			.catch(function(error) {
				console.log(error.response.data);
				setError({ ...error, error: error.response.data.msg });
			});
	};
	return (
		<div className={styles}>
			<div className={styles.background}>
				<div className="d-flex pb-3 flex-column align-items-center justify-content-center min-vh-100">
					<h1 className="py-5">Decentralized E-Voting System</h1>
					<div className={styles.input_container}>
						<input
							type="tel"
							value={value.otp}
							onChange={handleChange('otp')}
							placeholder="Enter the 6 digits OTP"
							className= "form-control"
						/>
					</div>					
					<div className={styles.error}>{error.error}</div>
					<div className={styles.success}>{error.success}</div>
					<br/>
					
					<div className="d-flex flex-column align-items-center justify-content-center">
						<button onClick={confirmOtp} className="btn btn-outline-primary my-1">
							Confirm OTP
						</button>					
						<button onClick={back} className="btn btn-outline-danger my-1">
							Back
						</button>
					</div>
				</div>
				<div className="shadow rounded p-2">
					Deployed application requires OTP authentication.
				</div>
			</div>
		</div>
	);
}

export default OtpVerify;
