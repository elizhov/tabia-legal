import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts.js";
import { PostCard } from "../components/PostCard.jsx";
import { Row, Col, Spin } from "antd";
import { ScaleSpinner } from "../components/ScaleSpinner.jsx";


export const News = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
            setLoading(false);
        };
        loadPosts();
    }, []);

    if (loading)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "100px 0",
                }}
            >
                <Spin indicator={<ScaleSpinner size={64} />} tip="Loading posts..." />
            </div>
        );

    if (posts.length === 0) return <p>No posts yet</p>;

    return (
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "24px" }}>
            <h2
                style={{
                    fontFamily: "'Montserrat', serif !important",
                    fontWeight: 600,
                    fontSize: "32px",
                    lineHeight: 1.3,
                    marginBottom: "24px",
                    textAlign: "center"
                }}
            >
                Latest News
            </h2>


            <Row gutter={[16, 16]}>
                {posts.map((post) => (
                    <Col key={post.id} xs={24} sm={12} md={8}>
                        <PostCard post={post} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
