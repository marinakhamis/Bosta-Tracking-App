/* eslint-disable react/prop-types */
import React from 'react';
import { Steps } from 'antd';
import { FileDoneOutlined, TruckOutlined, CheckCircleFilled } from "@ant-design/icons"
import { useTranslation } from 'react-i18next';
//styles 
import "./_index.scss"

const { Step } = Steps;

const ShipmentSteps = ({ steps, currentStep }) => {
    const matchingStep = steps.find((step) => step?.title === currentStep?.title);
    const matchingStepIndex = steps.findIndex((step) => step?.title === currentStep?.title);
    const { t } = useTranslation()

    return (
        <Steps
            current={matchingStep ? steps?.indexOf(matchingStep) : 0}
            className='p-5 steps'
            labelPlacement="vertical"
        >
            {steps?.map((step, index) => (
                <Step key={index} title={t(step?.title)}
                    icon={index === matchingStepIndex ? step?.icon : index < matchingStepIndex ? <CheckCircleFilled /> : step?.icon}
                    status={index === matchingStepIndex ? 'process' : index < matchingStepIndex ? 'finish' : 'wait'}
                />

            ))}
        </Steps>
    );
};

export default ShipmentSteps;