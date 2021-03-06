import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// import { Button, FormGroup, FormControl } from "react-bootstrap"
import {
	authRegisterCustomerCreator,
	authRegisterSellerCreator,
} from "../../redux/actions/auth";
import corpName from "../../assets/img/logo.png";
import classname from "../../helpers/classJoiner";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
	const dispatch = useDispatch();
	const [userType, setUserType] = useState(false);

	const { handleSubmit, register, errors } = useForm();

	const { user: registerUser } = useSelector((state) => state.auth);

	useEffect(() => {
		if (registerUser.msg === "Register Success") {
			props.history.push("/");
		}
	}, [registerUser.msg]);

	// useEffect(() => {
	// 	if (registerUser.msg === "Register Success") {
	// 		return console.log("customer dah register");
	// 	}
	// }, [registerUser.msg]);

	// useEffect(() => {
	// 	if (registerUser.msg === "Register Success") {
	// 		return console.log("seller dah register");
	// 	}
	// }, [registerUser.msg]);

	const onSubmitCustomer = (data) => {
		// console.log('kambing')
		dispatch(authRegisterCustomerCreator(data));
	};

	const onSubmitSeller = (data) => {
		dispatch(authRegisterSellerCreator(data));
	};

	return (
		<div className={classname(styles.body)}>
			{userType === false ? (
				<div>
					<form
						className={classname(styles.login)}
						onSubmit={handleSubmit(onSubmitCustomer)}
					>
						{/* <p className={classname(styles.corpName)}>Blanja</p> */}
						<img
							alt="logo"
							className={classname(styles.logo)}
							src={corpName}
						/>
						<p className={classname(styles.desc)}>
							Please sign up with your account
						</p>
						<div className={classname(styles.userType)}>
							{userType === false ? (
								<button
									className={classname(
										styles.userTypeBtnCustomerActive
									)}
								>
									Customer
								</button>
							) : (
								<button
									className={classname(
										styles.userTypeBtnCustomer
									)}
								>
									Customer
								</button>
							)}
							<button
								className={classname(styles.userTypeBtnSeller)}
								onClick={(e) => {
									e.preventDefault();
									setUserType(true);
								}}
							>
								Seller
							</button>
						</div>
						<form className={classname(styles.formContainer)}>
							<p style={{ fontSize: 16, color: "red" }}>
								{errors.name && errors.name.message}
							</p>
							<div>
								<input
									className={classname(styles.emailInput)}
									placeholder="Name"
									name="name"
									ref={register({
										required: "Required",
									})}
								/>
							</div>

							<p style={{ fontSize: 16, color: "red" }}>
								{errors.email && errors.email.message}
							</p>
							<div>
								<input
									className={classname(styles.emailInput)}
									placeholder="Email"
									name="email"
									ref={register({
										required: "Required",
										pattern: {
											value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
											message: "Bukan email",
										},
									})}
								/>
							</div>

							<p style={{ fontSize: 16, color: "red" }}>
								{errors.password && errors.password.message}
							</p>
							<div>
								<input
									className={classname(styles.passwordInput)}
									placeholder="Password"
									name="password"
									type="password"
									ref={register({
										required: "Required",
										pattern: {
											value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
											message: "Bukan password",
										},
									})}
								/>
							</div>
							<button
								className={classname(styles.loginSubmit)}
								type="submit"
							>
								Submit
							</button>
						</form>
					</form>
					<div className={classname(styles.signUpBtn)}>
						<p>
							Already have a Tokopedia account?{" "}
							<span onClick={() => {}}>
								<Link className={classname(styles.bla)} to="/">
									Login
								</Link>
							</span>
						</p>
					</div>
				</div>
			) : (
				<div>
					<form
						className={classname(styles.login)}
						onSubmit={handleSubmit(onSubmitSeller)}
					>
						{/* <p className={classname(styles.corpName)}>Blanja</p> */}
						<img
							alt="logo"
							className={classname(styles.logo)}
							src={corpName}
						/>
						<p className={classname(styles.desc)}>
							Please sign up with your seller account
						</p>
						<div className={classname(styles.userType)}>
							<button
								className={classname(
									styles.userTypeBtnCustomer
								)}
								onClick={(e) => {
									e.preventDefault();
									setUserType(false);
								}}
							>
								Customer
							</button>
							{userType === true ? (
								<button
									className={classname(
										styles.userTypeBtnSellerActive
									)}
								>
									Seller
								</button>
							) : (
								<button
									className={classname(
										styles.userTypeBtnSeller
									)}
								>
									Seller
								</button>
							)}
						</div>
						<form className={classname(styles.formContainer)}>
							<p style={{ fontSize: 16, color: "red" }}>
								{errors.name && errors.name.message}
							</p>
							<div>
								<input
									className={classname(styles.emailInput)}
									placeholder="Name"
									name="name"
									ref={register({
										required: "Required",
									})}
								/>
							</div>

							<p style={{ fontSize: 16, color: "red" }}>
								{errors.email && errors.email.message}
							</p>
							<div>
								<input
									className={classname(styles.emailInput)}
									placeholder="Email"
									name="email"
									ref={register({
										required: "Required",
										pattern: {
											value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
											message: "Bukan email",
										},
									})}
								/>
							</div>

							<p style={{ fontSize: 16, color: "red" }}>
								{errors.phone_number &&
									errors.phone_number.message}
							</p>
							<div>
								<input
									className={classname(styles.emailInput)}
									placeholder="Phone number"
									name="phone_number"
									ref={register({
										required: "Required",
										pattern: {
											value: /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/,
											message: "Bukan number",
										},
									})}
								/>
							</div>

							<p style={{ fontSize: 16, color: "red" }}>
								{errors.storeName && errors.storeName.message}
							</p>
							<div>
								<input
									className={classname(styles.emailInput)}
									placeholder="Store Name"
									name="storeName"
									ref={register({
										required: "Required",
									})}
								/>
							</div>
							<p style={{ fontSize: 16, color: "red" }}>
								{errors.password && errors.password.message}
							</p>
							<div>
								<input
									className={classname(styles.passwordInput)}
									placeholder="Password"
									name="password"
									type="password"
									ref={register({
										required: "Required",
										pattern: {
											value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
											message: "Bukan password",
										},
									})}
								/>
							</div>
							<button
								className={classname(styles.loginSubmit)}
								type="submit"
							>
								Submit
							</button>
						</form>
					</form>
					<div className={classname(styles.signUpBtn)}>
						<p>
							Already have a Tokopedia account?{" "}
							<span onClick={() => {}}>
								<Link
									className={classname(styles.bla)}
									to="/login"
								>
									Login
								</Link>
							</span>
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Login;
