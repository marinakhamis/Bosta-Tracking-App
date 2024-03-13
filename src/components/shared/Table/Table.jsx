import { Table } from 'antd';
import { useTranslation } from 'react-i18next';


const ReusableTable = ({ columns, data }) => {

    const { t } = useTranslation()
    return (
        <div className='table_ctr'>
            <p className='my-3 text__secondary fs-16 fw-bolder'> {t("ShipmentDetails")} </p>
            <Table
                pagination={false}
                scroll={{
                    y: 240,
                }}
                columns={columns}
                dataSource={data}
                size="small" />
        </div>
    )
}

export default ReusableTable