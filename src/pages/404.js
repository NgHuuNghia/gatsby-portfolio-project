import React from 'react'
import { Link } from 'gatsby'
import '../styles/404.scss'
const NotFoundPage = () => {

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>Oops! Page not found</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>Xin lỗi, trang này không tồn tại hoặc đã bị xoá.</h2>
                <h2>trở lại <Link to="/">trang chủ</Link></h2>
            </div>
        </div>
    )
}

export default NotFoundPage;