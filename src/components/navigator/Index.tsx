import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Button } from 'antd';
import { changeDirection, changeLanguage } from '@/stores/actions';
import actions from '@/action';
const { Option } = Select;

const TopNavigator: React.FC = () => {
	const { intlState } = useSelector((store: any) => store);
	const dispatch = useDispatch();

	const { language, languageList, direction } = intlState;

	function handleChangeLanguage(value: string) {
		actions.setGlobalState({
			language: value,
		});
		dispatch(changeLanguage(value));
	}

	function handleChangeDirection() {
		dispatch(changeDirection());
	}

	return (
		<div className="top_navigator" style={{ marginRight: '32px' }}>
			<Select
				size="small"
				defaultValue={language}
				onChange={handleChangeLanguage}
			>
				{languageList.map((item: { name: string; code: string }) => {
					return (
						<Option key={item.code} value={item.code}>
							{item.name}
						</Option>
					);
				})}
			</Select>
			<Button
				size="small"
				style={{ margin: '0 16px' }}
				onClick={() => {
					handleChangeDirection();
				}}
			>
				{direction}
			</Button>
		</div>
	);
};
export default TopNavigator;
