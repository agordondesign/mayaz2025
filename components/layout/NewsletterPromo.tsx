'use client';

//import Image from 'next/image';
import { useEffect, useState } from 'react';
import { uuid } from '@sanity/uuid';
import { toast } from 'react-toastify';
import { client } from '@/sanity/lib/client';

/*type Props = {
	data: any;
	submission: any;
	children: any;
};*/

type NewsletterProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	submission: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	childParent: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	submittedEmail: any;
	setIsOpen: boolean;
};

export default function Mailer(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	this: any,
	{ childParent, submittedEmail }: NewsletterProps
) {
	const data = false;
	const submission = true;
	const [showCode, setShowCode] = useState(false);
	//const [title, setTitle] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPhone, setUserPhone] = useState('');
	//const [phone, setPhone] = useState('');
	const validate = (email: string) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};
	const validatePhone = (phone: string) => {
		const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return re.test(phone);
	};

	async function submitHandler(e: React.FormEvent) {
		e.preventDefault();
		console.log('Thank you for subscribing!');
		if (!validate(userEmail)) {
			console.log('Please enter a valid email address');
			return;
		}
		if (!validatePhone(userPhone)) {
			console.log('Please enter a valid phone number');
			return;
		}
		const result = await client
			.create({
				_id: uuid(),
				_type: 'userEmail',
				email: userEmail,
				phone: userPhone,
			})
			//.then((res) => res)
			.then((res) => {
				//submittedEmail(submission);
				return res;
			})
			.catch((err) => console.log(err));
		return result;
	}

	function submitionHandler() {
		submittedEmail(submission);
		childParent(data);
	}
	//setShowCode(!showCode);
	const notify = () =>
		toast.success('Copied!', {
			position: 'bottom-right',
			className: 'toasty',
		});

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	function copyToClipboard(e: any) {
		//navigator.clipboard.writeText('shukran10!');
		//notify();
		//alert('Copied to clipboard!');
		navigator.clipboard.writeText('shukran10!');
		notify();
	}

	function validateEmail(email: string, phone: string) {
		if (validate(userEmail) && validatePhone(userPhone)) {
			setShowCode(!showCode);
		}
	}

	useEffect(() => {
		const phone_input = document.getElementById(
			'myform_phone'
		) as HTMLInputElement;

		if (phone_input) {
			phone_input.addEventListener('input', () => {
				phone_input.setCustomValidity('');
				phone_input.checkValidity();
			});
		}

		phone_input?.addEventListener('invalid', () => {
			if (phone_input.value === '') {
				phone_input.setCustomValidity(
					'Enter phone number in this format: 123-456-7890'
				);
			}
		});
	});
	[];

	return (
		<div className="text-center">
			<div className="flex min-h-screen md:min-h-[400px] flex-col justify-start md:justify-center bg-transparent">
				<div className="group md:h-[600px] w-screen md:w-[600px] [perspective:1000px]">
					<div
						className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
							showCode ? '[transform:rotateY(180deg)]' : ''
						}`}
					>
						<div className="absolute inset-0">
							<div className="h-screen md:h-full w-screen md:w-full object-cover shadow-black/40 bg-white p-5">
								<div className="container max-w-full mx-auto flex flex-col justify-center items-center h-full gap-6 md:gap-4 p-10 border border-mayazDark">
									<button
										type="button"
										className="absolute top-5 right-5 p-2 border border-mayazDark text-black"
									>
										{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
										{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-8 h-8"
											onClick={() => childParent(data)}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
									<h1 className="font-semibold font-brandFont uppercase py-4 border-t border-b border-mayaz/30">
										<span className="inline-block text-2xl font-medium uppercase">
											Subscribe for
										</span>
										<br />
										<span className="inline-block text-4xl md:text-5xl py-1">
											10% OFF
										</span>
										<br />
										<span className="inline-block text-2xl font-medium uppercase">
											your next order*
										</span>
									</h1>
									<span className="block text-[10px] md:text-xs md:max-w-md">
										<span>*</span>
										<span>
											Subscribe to our mailing list to recieve email and text
											message promotions and updates. Code is valid for ONE use
											per user and online purchases only.
										</span>
									</span>
									<div className="text-black text-2xl w-full">
										<form
											onSubmit={submitHandler}
											className="flex flex-col justify-between items-center gap-3 md:gap-4 !w-full"
										>
											<input
												onChange={(e) => setUserEmail(e.target.value)}
												value={userEmail}
												type="email"
												required
												placeholder="Enter your email"
												className="border border-mayazDark bg-mayazLight pt-3 pb-2 md:pt-4 md:pb-3 px-4 w-full lg:w-[400px] max-w-full placeholder:text-mayazDark placeholder:italic text-black text-normal text-base"
											/>
											<input
												onChange={(e) => setUserPhone(e.target.value)}
												value={userPhone}
												id="myform_phone"
												type="tel"
												pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
												required
												placeholder="Enter your phone number (123-456-7890)"
												className="border border-mayazDark bg-mayazLight pt-3 pb-2 md:pt-4 md:pb-3 px-4 w-full lg:w-[400px] max-w-full placeholder:text-mayazDark placeholder:italic text-black text-normal text-base focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
											/>
											<button
												onClick={() => validateEmail(userEmail, userPhone)}
												//onClick={() => setShowCode(!showCode)}
												//disabled={!validate(userEmail)}
												type="submit"
												className="w-full lg:w-[400px] max-w-full font-medium text-white bg-black border border-transparent hover:text-black hover:border-mayaz hover:bg-white uppercase px-6 pt-3 pb-2 md:pt-4 md:pb-3 text-2xl outline-none focus:outline-none md:mt-2 ease-linear transition-all duration-150"
											>
												Get 10% OFF
											</button>
											<button
												className="w-auto font-medium text-black background-transparent hover:text-mayazDark px-6 text-xl outline-none focus:outline-none ease-linear transition-all duration-150"
												type="button"
												onClick={() => childParent(data)}
											>
												I don't want to save.
											</button>
											<span className="text-xs text-mayaz">
												*$50 minimum purchase
											</span>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div
							// biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
							className={`absolute inset-0 h-screen md:h-[600px] w-full bg-black px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}
						>
							<div className="container flex flex-col justify-center items-center gap-8 p-10 min-h-full">
								<h1 className="text-xl text-center text-white font-brandFont uppercase">
									Promo Code:
								</h1>
								<button
									className="border border-dashed border-mayaz/50 bg-mayazAlt/20 rounded-3xl p-8"
									type="button"
									onClick={copyToClipboard}
								>
									<code className="text-xl md:text-3xl tracking-[0.75em] text-mayazDark">
										shukran10!
									</code>
									<div className="flex justify-center items-center mx-auto gap-3 pt-4">
										<div className="">
											{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="#958A79"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
												/>
											</svg>
										</div>
										<span className="text-mayazDark text-sm">copy code</span>
									</div>
								</button>
								<button
									className="w-full font-medium text-white background-transparent border border-mayaz hover:text-black hover:bg-white uppercase px-6 pt-4 pb-3 text-sm outline-none focus:outline-none mb-1 mt-6 ease-linear transition-all duration-150"
									type="button"
									onClick={submitionHandler}
								>
									Close
								</button>
								<span className="text-xs text-mayaz">
									*$50 minimum purchase
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} // biome-ignore lint/suspicious/noExplicitAny: <explanation>
// biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
{
	/*function setUserData(arg0: any) {
	throw new Error('Function not implemented.');
}

function setShowCode(arg0: boolean) {
	throw new Error('Function not implemented.');
}*/
}
