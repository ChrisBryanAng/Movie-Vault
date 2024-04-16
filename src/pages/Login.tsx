import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";
import { Input } from "../components";

const Login = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>();

	const delay = async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
		try {
			delay();
			console.log(data);
			navigate("/");
		} catch (error) {
			setError("root", {
				message: "This email is already taken.",
			});
		}
	};
	return (
		<div className="flex flex-col space-y-[90px] items-center w-full h-full p-6">
			<div className="h-8 w-10 mt-12 rounded-tl-lg rounded-bl-lg rounded-br-lg">
				<img alt="logo" src={Logo} className="object-cover h-full w-full" />
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
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
						register={register}
						isError={errors.email}
						errorMessage={errors.email?.message}
					/>
					<Input
						id="password"
						type="text"
						placeholder="Password"
						register={register}
						isError={errors.password}
						errorMessage={errors.password?.message}
					/>
					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-2 cusrsor-pointer hover:bg-white bg-MV-Red rounded-md p-4 text-white hover:text-black font-OutfitLight font-light text-base text-center"
					>
						{isSubmitting ? "Submitting..." : "Log in to your Account"}
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
