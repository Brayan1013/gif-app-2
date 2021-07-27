import React, { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';
import './home.css';
import { CardComponent } from './Card';
import axios from 'axios';
import { Loading } from './Loading';
import { motion } from 'framer-motion';

export const Home = () => {
    const [gift, setGift] = useState("One Punch");
    const [gifs, setGifs] = useState([]);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Y8LBKPkkaTKLW2m2nbjnTyz11ki0K5Rl&q=${gift}&limit=6&offset=0&rating=g&lang=en`;

    const handleInputText = (event) => {
        setGift(event.target.value);
    }

    const getGifInformation = async () => {
        const { data } = await axios.get(url);
        setGifs(data.data);
    }

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        transition: { duration: 4 }
    }


    useEffect(() => {
        getGifInformation();
    }, [gift])
    return (
        <>
            <Row>
                <Col span={24} className="head-text">Bienvenidos a la nueva app</Col>
            </Row>

            <Row>
                <Col span={24} className="input-container">
                    <Input value={gift} onChange={handleInputText} className="input-text" placeholder="Search a gif" />
                </Col>
            </Row>

            <Row>
                <Col span={24} className="loading-container">
                    {gift.length > 0 && gifs.length === 0 &&
                        <Loading />
                    }
                </Col>
            </Row>

            <motion.div initial="hidden" animate="visible" variants={variants} className="card-container">
                {gifs.length !== 0 &&
                    gifs.map(gif => {
                        return (
                            <CardComponent key={gif.id} {...gif} />
                        )
                    })
                }
            </motion.div>
        </>
    )
}
