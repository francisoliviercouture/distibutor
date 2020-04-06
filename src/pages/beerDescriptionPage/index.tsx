import React from 'react';
import { PageHeader, Descriptions, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import ambigue from '../../assets/demo/ambigue.png';

export function BeerDescriptionPage() {
    let history = useHistory();

    return (
        <>
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => history.goBack()}
                  title="Voie Maltée - L'Ambiguë"
                  subTitle="Bitter"
                />
              </div>
            <section className="app-content--section">
                <img src={ambigue} alt="" style={{maxHeight: '10rem'}}/>
                <Descriptions title="Beer Info">
                    <Descriptions.Item label="Name">Beer name</Descriptions.Item>
                    <Descriptions.Item label="IBU">20</Descriptions.Item>
                    <Descriptions.Item label="Alcool percentage">45%</Descriptions.Item>
                    <Descriptions.Item label="Better served with">Pork, Nothing</Descriptions.Item>
                    <Descriptions.Item label="In Stock">200</Descriptions.Item>
                </Descriptions>
                <Button>dsads</Button>
            </section>
        </>
    );
}

export default BeerDescriptionPage;