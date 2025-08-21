import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Typography, Spin, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../styles/PostDetail.css";
import {ScaleSpinner} from "../components/ScaleSpinner.jsx";

const { Title, Paragraph } = Typography;

export const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const docRef = doc(db, "posts", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setPost({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setPost(null);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching post:", error);
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

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

    if (!post) return <p>No posts yet</p>;

    return (
        <div className="post-detail-container">
            <Button
                type="text" // no border, no background
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate(-1)}
                className="post-detail-back-btn"
                aria-label="Go back"
            />

            <Title className="post-detail-title">{post.title}</Title>
            <Paragraph className="post-detail-content">{post.content}</Paragraph>

            {post.createdAt && (
                <small className="post-detail-date">
                    {new Date(post.createdAt.seconds * 1000).toLocaleString()}
                </small>
            )}
        </div>
    );
};
