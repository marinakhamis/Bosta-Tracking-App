import React from 'react'
import { langSwitching } from "../../../helpers/index";
import { useTranslation } from 'react-i18next';
import LogoAr from "../../../assets/icons/LogoAr.svg"
import LogoEn from "../../../assets/icons/LogoEn.svg"
import { Link } from 'react-router-dom';

const Brand = () => {
    //Lang config
    const { t, i18n: { language } } = useTranslation();
    console.log("Lang", language)
    return (
        <Link to="/">
            <img alt="Bosta Logo" src={langSwitching(language, LogoAr, LogoEn)} />
        </Link>
    )
}

export default Brand