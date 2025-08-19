import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Typography, Spin, Button } from "antd";
import "../styles/PostDetail.css";

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

    if (loading) return <Spin tip="Loading post..." />;

    if (!post) return <p>Post not found</p>;

    return (
        <div className="post-detail-container">
            <Button
                type="default"
                onClick={() => navigate(-1)}
                className="post-detail-back-btn"
            >
                Back
            </Button>

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
