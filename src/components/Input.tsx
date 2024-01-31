interface IInput {
	type: string;
	id: string;
	placeholder: string;
	register: any;
	errorMessage: string;
	isError: boolean;
}

const Input = ({
	type,
	id,
	placeholder,
	register,
	errorMessage,
	isError,
}: IInput) => {
	return (
		<div className="relative">
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				className={`text-base placeholder-gray-400 border-b-[1px] px-4 ${
					isError ? "border-b-MV-Red" : "border-b-MV-Blue"
				} focus:border-white pb-4 w-full bg-transparent outline-none text-white caret-MV-Red`}
				{...register(id, {
					required: "Can't be empty",
				})}
			/>
			{isError && (
				<div className="absolute z-10 top-[2px] right-0 font-OutfitLight font-light text-red-400">
					{errorMessage}
				</div>
			)}
		</div>
	);
};

export default Input;
