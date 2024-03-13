import React from 'react'
import Brand from '../shared/Brand/Brand'
import "./_index.scss"
import { useTranslation } from 'react-i18next';
import { changeHtmlDirection, langSwitching } from '../../helpers';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const items = [
    {
        label: <button onClick={() => changeHtmlDirection("ar")} > عربي </button>,
        key: '0',
    },
    {
        label: <button onClick={() => changeHtmlDirection("en")}  > EN </button>,
        key: '1',
    }
];
const NavBar = () => {
    const { t, i18n: { language } } = useTranslation();

    return (
        <nav className='main_nav sticky-top'>
            <div className="ctr  d-flex justify-content-between ">
                <Brand />
                <Dropdown className='lang_select' menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            {langSwitching(language, "عربي", "EN")}
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>

            </div>

        </nav>
    )
}

export default NavBar