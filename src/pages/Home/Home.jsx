import { useTranslation } from "react-i18next";
import locationIcon from "../../assets/images/location.png"
import { useState } from "react";
import deliveryIcon from "../../assets/icons/delivery-service.svg"
import { useNavigate } from 'react-router-dom';
//styles
import "./_index.scss"
import { Input, Space } from 'antd';
const { Search } = Input;
const Home = () => {
    const {
        t,
        i18n: { language },
    } = useTranslation();
    const [inputValue, setInputValue] = useState('7234258');
    const navigate = useNavigate();

    const handleClick = () => {
        if (inputValue !== "")
            navigate(`/tracking-shipments/${inputValue}`);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="bg__pale home">
            <div className="ctr">
                <div className="d-flex flex-lg-row flex-column-reverse gap-3 align-items-center justify-content-between">
                    <div>
                        <h1 className="text_lg fw-bolder"> {t("TrackOrder")} </h1>
                        <p className="text__gray fw-medium px-2">  Ex:  7234258 , 13737343, 67151313 </p>
                        <div className="d-flex flex-column">
                            <Search
                                size="large"
                                value={inputValue}
                                onChange={handleChange}
                                onSearch={handleClick}
                                enterButton />
                        </div>
                    </div>

                    <div className="img_ctr">
                        <img src={deliveryIcon} className="w-100 h-100" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home