import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export const PostCard = ({ post }) => {
    return (
        <Link to={`/news/${post.id}`}>
            <Card hoverable style={{ width: "100%", marginBottom: 24 }}>
                <div style={{ marginBottom: 12 }}>
                    <h2 style={{ fontSize: "24px", lineHeight: "1.4", margin: 0 }}>
                        {post.title}
                    </h2>
                </div>
                <Meta
                    description={
                        <>
                            <p>{post.content}</p>
                            {post.createdAt && (
                                <small style={{ color: "gray" }}>
                                    {new Date(post.createdAt.seconds * 1000).toLocaleString()}
                                </small>
                            )}
                        </>
                    }
                />
            </Card>

        </Link>
    );
};
