import {useState} from "react";
import Personal from "./page-components/Personal";
import ChangePassword from "./page-components/ChangePassword.jsx";

export default function User() {
	const [page, SetPage] = useState('personal')
	const pages = {
		'personal': <Personal/>,
		'change-password': <ChangePassword/>,
		'notification-settings': <></>,

	}
	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="sidebar">
						<div className="top">
							<div className="user-name">
								<div className="short">ЕИ</div>
								<div className="long">Имя Фамилия</div>
							</div>
							<div className="links">
								<ul>
									<li>
										<a href="#chat">Чат с поддержкой</a>
									</li>
									<li>
										<a href="#settings">Настройки аккаунта</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="bottom">
							<div className="leave">Выйти из аккаунта</div>
						</div>
					</div>
					<div className="change-settings-screen">
						<div className="title">Настройки аккаунта</div>
						<div className="links-to-departments">
							<ul>
								<li className={page == 'personal' && 'active'} onClick={()=>{SetPage('personal')}}>Личные данные</li>
								<li className={page == 'change-password' && 'active'} onClick={()=>{SetPage('change-password')}}>Смена пароля</li>
								<li className={page == 'notification-settings' && 'active'} onClick={()=>{SetPage('notification-settings')}}>Настройки уведомлений</li>
							</ul>
						</div>
						{page &&  pages[page]}
						
					</div>
				</div>
			</div>
		</section>
	);
}
