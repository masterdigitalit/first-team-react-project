import {useState} from "react";

export default function ChangePassword() {
	const [lastPassword, SetLastPassword] = useState('')
	const [newPassword, SetNewPassword] = useState('')
	console.log(lastPassword, newPassword)
	return (
	
			<div className="change-password">
				<div className="user-input no-title">
					<label  className="text"></label>
					<input type="text" placeholder="Старый пароль" name="input" className="input"onChange={(el)=>{SetLastPassword(el.target.value)}}/>
				</div>
				<div className="user-input">
					<label  className="text">
						Новый пароль
					</label>
					<div className="input">
						<input type="password" placeholder="•••••••••••••" name="input" className="input" onChange={(el)=>{SetNewPassword(el.target.value)}} />
						<a href="#" className="password-control">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.08829 7.00002C9.08829 8.15502 8.15495 9.08835 6.99995 9.08835C5.84495 9.08835 4.91162 8.15502 4.91162 7.00002C4.91162 5.84502 5.84495 4.91168 6.99995 4.91168C8.15495 4.91168 9.08829 5.84502 9.08829 7.00002Z" stroke="#BFC4D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.00003 11.8242C9.0592 11.8242 10.9784 10.6108 12.3142 8.51085C12.8392 7.68835 12.8392 6.30585 12.3142 5.48335C10.9784 3.38335 9.0592 2.17001 7.00003 2.17001C4.94086 2.17001 3.0217 3.38335 1.68586 5.48335C1.16086 6.30585 1.16086 7.68835 1.68586 8.51085C3.0217 10.6108 4.94086 11.8242 7.00003 11.8242Z" stroke="#BFC4D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

						</a>
					</div>
				</div>
				<div className="save">
					<button> Сохранить новый пароль</button>
				</div>
			</div>
	
	);
}
