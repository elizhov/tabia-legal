import React, { useEffect, useState } from "react";
import { Carousel, Row, Col, Spin } from "antd";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";
import { PostCard } from "../components/PostCard.jsx";
import {ScaleSpinner} from "../components/ScaleSpinner.jsx";

const slideStyle = {
    width: "100vw",
    height: "100vh",
    position: "relative",
    background: "#000",
    overflow: "hidden",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.05)",
    filter: "blur(6px)",
};

const textBoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textAlign: "center",
    zIndex: 2,
    background: "none",
    boxShadow: "none",
    lineHeight: 1.2,
};

const textShadowStyle = {
    textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
};

const images = [
    {
        url: "https://images.unsplash.com/photo-1586782002395-4b748cf6e71d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
        url: "https://images.unsplash.com/photo-1601711635481-b2c394118b53?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
        url: "https://images7.alphacoders.com/724/724579.jpg",
    },
];

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsRef = collection(db, "posts");
                const q = query(postsRef, orderBy("createdAt", "desc"), limit(3));
                const querySnapshot = await getDocs(q);
                const postsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            {/* Carousel */}
            <Carousel>
                {images.map(({ url }, i) => (
                    <div key={i}>
                        <div style={slideStyle}>
                            <img src={url} alt="" style={imgStyle} />
                            <div style={textBoxStyle}>
                                <div style={{ fontSize: "4rem", fontWeight: 900, ...textShadowStyle }}>
                                    TABIA
                                </div>
                                <div style={{ fontSize: "4rem", fontWeight: 900, ...textShadowStyle }}>
                                    LEGAL & ADVISORY
                                </div>
                                <div
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: 500,
                                        marginTop: "20px",
                                        ...textShadowStyle,
                                    }}
                                >
                                    TAKING YOU TO THE TOP OF YOUR GAME
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Latest Posts Section */}
            <div style={{ margin: "0 auto" }}>
                <div style={{ backgroundColor: '#7c1524', padding: "30px 20px", marginBottom: "20px" }}>
                    <h2
                        style={{
                            fontSize: "2rem",
                            margin: 0,
                            textAlign: "center",
                            color: "#fff",
                            fontWeight: 700,
                            letterSpacing: "1px",
                        }}
                    >
                        Latest News & Insights
                    </h2>
                </div>

                <div style={{ padding: "0 40px" }}>
                    {loading ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "100px 0",
                            }}
                        >
                            <Spin indicator={<ScaleSpinner size={64} />} tip="Loading posts..." />
                        </div>
                    ) : (
                        <Row gutter={[24, 24]}>
                            {posts.map((post) => (
                                <Col xs={24} sm={12} md={8} key={post.id}>
                                    <PostCard post={post} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </div>

            </div>
        </>
    );
};

