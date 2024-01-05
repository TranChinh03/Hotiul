import React from 'react';
import { IMG_logo } from '../../assets/imgs';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EyeInvisibleOutlined, EyeTwoTone, LoadingOutlined } from '@ant-design/icons';
import { Button, Input, Spin, message } from 'antd';
import { getData } from '../../controller/getData.ts';
import { useNavigate } from 'react-router-dom';
import { NAV_LINK } from '../../routes/components/NAV_LINK.js';

export default function LoginScreen() {
	const navigation = useNavigate();
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [isUserNameEmpty, setIsUserNameEmpty] = useState(false);
	const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const { t } = useTranslation();
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const buttonRef = useRef(null);

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			console.log('Enter');
			buttonRef.current.click();
		}
	};

	const handleSubmit = async () => {
		if (userName === '') {
			setIsUserNameEmpty(true);
			message.error(t('login.emptyUsername'));
			return;
		} else {
			setIsUserNameEmpty(false);
		}

		if (password === '') {
			setIsPasswordEmpty(true);
			message.error(t('login.emptyPassword'));
			return;
		} else {
			setIsPasswordEmpty(false);
		}

		setLoading(true);
		await onLogin();
	};

	const onLogin = async () => {
		await Promise.all([
			getData('/STAFF').then(data => {
				const idx = data.findIndex(
					value => value.Username === userName && value.Password === password,
				);
				if (idx !== -1) {
					console.log('idx', idx);
					localStorage.setItem('currentUser', JSON.stringify(data[idx]));
					setLoading(false);
					navigation(NAV_LINK.DASHBOARD);
					window.location.reload();
				} else {
					message.error(t('login.wrongPassword'));
					console.log('vao');
					setLoading(false);
				}
			}),
		]);
	};

	return (
		<Spin
			spinning={loading}
			indicator={
				<div
					style={{
						transform: 'translate(-50%, -50%)',
						backgroundColor: '#909090',
						opacity: 0.8,
						width: '50%',
						height: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}>
					<img
						style={{ width: '50%' }}
						src={IMG_logo}
					/>
					<LoadingOutlined
						style={{ fontSize: 24 }}
						spin
					/>
				</div>
			}>
			<div
				style={{ backgroundColor: '#00B4D8' }}
				className="flex justify-center items-center min-h-screen bg-gradient-to-t from-sidebar to-white">
				<div className="flex w-8/12 shadow-lg bg-white rounded-md p-2">
					<div
						style={{ backgroundColor: '#023E8A' }}
						className="w-1/2 flex-col justify-center items-center p-5 hidden md:flex">
						<img
							src={IMG_logo}
							alt="image"
						/>
						<p className="pt-5 text-center text-white text-sidebar font-medium text-2xl">
							{t('login.slogan')}
						</p>
					</div>

					<div className="border hidden md:flex border-gray-100"></div>

					<div className="md:w-1/2 w-full lg:w-1/2 p-5 ">
						<p className="text-center text-sidebar font-medium text-3xl mb-1">{t('login.login')}</p>
						<p className="text-center">{t('login.signInToManageHotel')}</p>

						<form>
							<div className="gap-y-1 mt-4">
								<Input
									onKeyPress={handleKeyPress}
									status={isUserNameEmpty ? 'error' : 'success'}
									value={userName}
									onChange={value => setUserName(value.target.value)}
									placeholder={t('login.userName')}
								/>
							</div>
							<div className="gap-y-1 mt-5">
								<Input.Password
									onKeyPress={handleKeyPress}
									status={isPasswordEmpty ? 'error' : 'success'}
									placeholder={t('login.password')}
									value={password}
									onChange={value => setPassword(value.target.value)}
									visibilityToggle={{
										visible: passwordVisible,
										onVisibleChange: setPasswordVisible,
									}}
									iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
								/>
							</div>
						</form>
						<div className="flex flex-col justify-center items-center gap-y-3 mt-4">
							<button
								ref={buttonRef}
								onClick={handleSubmit}
								style={{ backgroundColor: '#023E8A' }}
								className="w-5/12 py-2 bg-sidebar text-white text-xl rounded-md hover:bg-hover">
								{t('login.login')}
							</button>
						</div>
					</div>
				</div>
			</div>
		</Spin>
	);
}
