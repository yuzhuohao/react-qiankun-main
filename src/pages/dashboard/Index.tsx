import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Index.less';

const Dashboard: React.FC = () => {
	return (
		<div className="dashborad">
			<FormattedMessage id="sender" />
		</div>
	);
};

export default Dashboard;
