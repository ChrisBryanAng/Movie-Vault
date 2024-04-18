interface IInput {
	type: string;
	id: string;
	placeholder: string;
	errorMessage: string;
	isError: boolean;
	value: any;
	onChange: any;
	onBlur: any;
	isTouched: any;
}

const Input = ({
	type,
	id,
	placeholder,
	errorMessage,
	isError,
	onChange,
	onBlur,
	value,
	isTouched,
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
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{isError && isTouched ? (
				<div className="absolute z-10 top-[2px] right-0 font-OutfitLight font-light text-red-400">
					{errorMessage}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Input;
