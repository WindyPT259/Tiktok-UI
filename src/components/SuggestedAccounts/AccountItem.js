import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src="" alt="" />
            <div className={cx('item-infor')}>
                <p className={cx('nickname')}>
                    <strong>lephthao</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phương Thảo</p>
            </div>
            <div className={cx('account-item')}></div>
        </div>
    );
}
AccountItem.propTypes = {};

export default AccountItem;
