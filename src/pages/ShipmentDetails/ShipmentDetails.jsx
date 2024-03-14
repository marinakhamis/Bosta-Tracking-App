import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetShipmentDetailsQuery } from '../../store/service/shipments';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { Table, ShipmentSteps } from '../../components';

//assets
import repotImg from "../../assets/icons/faq_icon.svg"
import { FileDoneOutlined, TruckOutlined, CheckCircleFilled, DeliveredProcedureOutlined } from "@ant-design/icons"


//styles
import "./_index.scss"

const ShipmentDetails = () => {
    // translation
    const { t } = useTranslation();
    // get id of shipment
    const { id } = useParams();
    const steps = [
        { id: 1, title: 'TICKET_CREATED', icon: <CheckCircleFilled /> },
        { id: 2, title: 'PACKAGE_RECEIVED', icon: <DeliveredProcedureOutlined /> },
        { id: 3, title: 'OUT_FOR_DELIVERY', icon: <TruckOutlined /> },
        { id: 4, title: 'DELIVERED', icon: <FileDoneOutlined /> }
    ];
    const [currentStep, setCurrentStep] = useState('');
    // Call api 
    const { data: shipment, isLoading, isError, isSuccess, isValid, error } = useGetShipmentDetailsQuery(id);
    const columns = [
        {
            title: t('Hub'),
            dataIndex: 'hub',
        },
        {
            title: t('Date'),
            dataIndex: 'timestamp',
            render: (record) => (<p className='m-0'> {dayjs(`${record}`).format("DD/MM/YYYY")} </p>),

        },
        {
            title: t('Time'),
            dataIndex: 'timestamp',
            render: (record) => (<p className='m-0'> {dayjs(`${record}`).format("h:mm A")} </p>),

        },
        {
            title: t('Details'),
            dataIndex: 'reason',


        }
    ];
    useEffect(() => {
        if (isSuccess) {
            const matchingStep = steps.find((step) => step?.title == shipment?.CurrentStatus?.state);
            setCurrentStep(matchingStep)

        }
    }, [isSuccess])


    return (
        <div className='ctr d-flex flex-column gap-5'>
            {/* Start Tracking details header */}
            <div className='shipment-header'>
                <div className='shipment-header_info p-5 d-flex flex-row justify-content-between'>
                    <div className='d-flex flex-column gap-1'>
                        <p className='text__gray fs-13 fw-normal m-0'>  {t("TrackingNumber")} {shipment?.TrackingNumber}  </p>
                        <p className='m-0  fw-semibold'>{t(shipment?.CurrentStatus?.state)} </p>
                    </div>
                    <div className='d-flex flex-column gap-1'>
                        <p className='text__gray fs-13  fw-normal m-0'>  {t("LastUpdate")}  </p>
                        <p className='m-0  fw-semibold'>{dayjs(shipment?.CurrentStatus?.timeStamp).format("LLLL")} </p>
                    </div>
                    <div className='d-flex flex-column gap-1'>
                        <p className='text__gray fs-13  fw-normal m-0'>  {t("provider")} </p>
                        <p className='m-0  fw-semibold'>{t(shipment?.provider)} </p>
                    </div>
                    <div className='d-flex flex-column gap-1'>
                        <p className='text__gray fs-13 fw-normal  m-0'>  {t("PromisedDate")} </p>
                        <p className='m-0  fw-semibold'>{dayjs(shipment?.PromisedDate).format("D MMM YYYY")} </p>
                    </div>
                </div>
                <hr className='separator' />
                {/* Start Shipment Process Steps */}
                <ShipmentSteps currentStep={currentStep} steps={steps} />
                {/* End Shipment Process Steps */}

            </div>
            {/* End Tracking details header */}


            <div className='shipment__details gap-5 '>
                {/* Start Details Table  */}
                <Table columns={columns} data={shipment?.TransitEvents} />
                {/* End Details Table  */}

                <div className='d-flex flex-column gap-4'>
                    {/* Start address info */}
                    <div>
                        <p className='my-3 text__secondary fs-16 fw-bolder'> {t("ShipmentAddress")} </p>
                        <div className="bg__muted p-5 br__1">
                            <p className='text__gray m-0 fw-normal'>   {t("Address")} </p>
                        </div>
                    </div>
                    {/* End address info */}

                    {/* Start Report a problem */}
                    <div className='p-5 br__1 d-flex flex-row gap-5 flex-wrap align-items-center'>
                        <img src={repotImg} alt='Report a problem'
                            width={150}
                            className='d-block'
                        />
                        <div>
                            <p className='fw-bold fs-4'> {t("ShipmentProblem")} </p>
                            <button className='btn__primary'> {t("ReportProblem")} </button>
                        </div>
                    </div>
                    {/* End Report a problem */}

                </div>

            </div>
        </div>
    )
}

export default ShipmentDetails