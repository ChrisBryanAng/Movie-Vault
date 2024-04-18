import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import Logo from "/assets/logo.svg";
import { Input } from "../components";

const Login = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},

		// Validate Form
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid Email Address")
				.required("Can't be empty!"),
			password: Yup.string().required("Can't be empty!"),
		}),

		// Submit form
		onSubmit: async (values) => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log(values);
			navigate("/");
		},
	});

	return (
		<div className="flex flex-col space-y-[90px] items-center w-full h-full p-6">
			<div className="h-8 w-10 mt-12 rounded-tl-lg rounded-bl-lg rounded-br-lg">
				<img alt="logo" src={Logo} className="object-cover h-full w-full" />
			</div>

			<form
				onSubmit={formik.handleSubmit}
				className="w-full md:w-[70%] lg:w-[30%]"
			>
				<div className="flex flex-col gap-8 bg-MV-Semi-Black rounded-lg px-6 py-8">
					<p className="h-[50px] text-4xl font-OutfitLight font-light text-white">
						Login
					</p>
					<Input
						id="email"
						type="text"
						placeholder="Email Address"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isError={formik.errors.email}
						errorMessage={formik.errors.email}
						isTouched={formik.touched.email}
					/>
					<Input
						id="password"
						type="text"
						placeholder="Password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isError={formik.errors.password}
						errorMessage={formik.errors.password}
						isTouched={formik.touched.password}
					/>
					<button
						type="submit"
						disabled={formik.isSubmitting}
						className="mt-2 cusrsor-pointer hover:bg-white bg-MV-Red rounded-md p-4 text-white hover:text-black font-OutfitLight font-light text-base text-center"
					>
						{formik.isSubmitting ? "Submitting..." : "Log in to your Account"}
					</button>
					<p className="flex text-white self-center text-base">
						Don't have an account? &nbsp;{" "}
						<Link to="/SignUp">
							<span className="text-MV-Red">Sign Up</span>
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
