import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import { Input } from "../components";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = handleSubmit(async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log(data);
		} catch (error) {
			setError("root", {
				message: "This email is already taken.",
			});
		}
	});
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
						Sign Up
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
					<Input
						id="confirmpassword"
						type="text"
						placeholder="Confirm Password"
						register={register}
						isError={errors.confirmpassword}
						errorMessage={errors.confirmpassword?.message}
					/>
					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-2 cusrsor-pointer hover:bg-white bg-MV-Red rounded-md p-4 text-white hover:text-black font-OutfitLight font-light text-base text-center"
					>
						{isSubmitting ? "Submitting..." : "Create new account"}
					</button>
					<p className="flex text-white self-center text-base">
						Already have an account? &nbsp;{" "}
						<Link to="/Login">
							<span className="text-MV-Red">Login</span>
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
