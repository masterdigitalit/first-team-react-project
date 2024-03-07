import { useState } from "react";

export default function Personal() {
	const [email, SetEmail] = useState("");
	const [name, SetName] = useState("");
	const [surName, SetSurName] = useState("");
	const [lastName, SetlastName] = useState("");

	const [phone, SetPhone] = useState("");
	const [country, SetCountry] = useState("");
	const [city, SetCity] = useState("");

	console.table(email, name, surName, lastName, phone, country, city);

	return (
		<div className="inputs-and-user">
			<div className="inputs">
				<div className="user-input">
					<label className="text">Ваш e-mail</label>
					<input
						type="text"
						placeholder="test@mail.ru"
						name="input"
						className="input"
						onChange={(el) => {
							SetEmail(el.target.value);
						}}
					/>
				</div>
				<div className="user-input">
					<label className="text">Ваш номер телефона</label>
					<div className="input">
						<input
							type="text"
							placeholder="+7 977 777 77 77"
							name="input"
							className="input"
							onChange={(el) => {
								SetPhone(el.target.value);
							}}
						/>
					</div>
				</div>
				<div className="user-input">
					<label className="text">Ваше имя</label>
					<div className="input">
						<input
							type="text"
							placeholder="Евгений"
							name="input"
							className="input"
							onChange={(el) => {
								SetName(el.target.value);
							}}
						/>
					</div>
				</div>
				<div className="user-input no-title">
					<label className="text"></label>
					<div className="input">
		
    <input  autoComplete="false" role="combobox" list="browsers" id="input" name="browsers" placeholder="город"/>


  <datalist id="browsers" role="listbox">

    <option value="Москва">Москва</option>
    <option value="Лондон">Лондон</option>
		<option value="Париж">Париж</option>

  </datalist>



   
 
					</div>
				</div>
				<div className="user-input no-title">
					<label className="text"></label>
					<div className="input">
						<input
							type="text"
							placeholder="Ваша фамилия"
							name="input"
							className="input"
							onChange={(el) => {
								SetSurName(el.target.value);
							}}
						/>
						<a href="#" className="password-control">
							<svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.73499 2.09999L2.94583 7.16916C2.76499 7.36166 2.58999 7.74083 2.55499 8.00333L2.33916 9.89333C2.26333 10.5758 2.75333 11.0425 3.42999 10.9258L5.30833 10.605C5.57083 10.5583 5.93833 10.3658 6.11916 10.1675L10.9083 5.09833C11.7367 4.22333 12.11 3.22583 10.8208 2.00666C9.53749 0.799161 8.56333 1.22499 7.73499 2.09999Z"
									stroke="#BFC4D4"
								/>
								<path d="M6.93584 2.94583C7.18667 4.55583 8.49334 5.78666 10.115 5.95" stroke="#BFC4D4" />
								<path d="M1.75 12.8333H12.25" stroke="#BFC4D4" />
							</svg>
						</a>
					</div>
				</div>
				<div className="user-input no-title">
					<label className="text"></label>
					<div className="input">
						<input
							type="text"
							placeholder="Город"
							name="input"
							className="input"
							onChange={(el) => {
								SetCity(el.target.value);
							}}
						/>
						<a href="#" className="password-control">
							<svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.73499 2.09999L2.94583 7.16916C2.76499 7.36166 2.58999 7.74083 2.55499 8.00333L2.33916 9.89333C2.26333 10.5758 2.75333 11.0425 3.42999 10.9258L5.30833 10.605C5.57083 10.5583 5.93833 10.3658 6.11916 10.1675L10.9083 5.09833C11.7367 4.22333 12.11 3.22583 10.8208 2.00666C9.53749 0.799161 8.56333 1.22499 7.73499 2.09999Z"
									stroke="#BFC4D4"
								/>
								<path d="M6.93584 2.94583C7.18667 4.55583 8.49334 5.78666 10.115 5.95" stroke="#BFC4D4" />
								<path d="M1.75 12.8333H12.25" stroke="#BFC4D4" />
							</svg>
						</a>
					</div>
				</div>
				<div className="user-input no-title">
					<label className="text"></label>
					<div className="input">
						<input
							type="text"
							placeholder="Ваше отчество"
							name="input"
							className="input"
							onChange={(el) => {
								SetlastName(el.target.value);
							}}
						/>
						<a href="#" className="password-control">
							<svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.73499 2.09999L2.94583 7.16916C2.76499 7.36166 2.58999 7.74083 2.55499 8.00333L2.33916 9.89333C2.26333 10.5758 2.75333 11.0425 3.42999 10.9258L5.30833 10.605C5.57083 10.5583 5.93833 10.3658 6.11916 10.1675L10.9083 5.09833C11.7367 4.22333 12.11 3.22583 10.8208 2.00666C9.53749 0.799161 8.56333 1.22499 7.73499 2.09999Z"
									stroke="#BFC4D4"
								/>
								<path d="M6.93584 2.94583C7.18667 4.55583 8.49334 5.78666 10.115 5.95" stroke="#BFC4D4" />
								<path d="M1.75 12.8333H12.25" stroke="#BFC4D4" />
							</svg>
						</a>
					</div>
				</div>
				<div className="save">
					<button>Сохранить изменения</button>
				</div>
			</div>
			<div className="user-icon">
				<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="75" cy="75" r="75" fill="white" />
					<circle cx="75" cy="75" r="74.5" stroke="black" />
				</svg>
				<div className="user">ЕИ</div>
			</div>
		</div>
	);
}
