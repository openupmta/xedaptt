import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import URL_SERVER from '../Enum';
class ProductItem extends Component {
    to_slug(str) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {
        const { product } = this.props;
        return (
            <Col sm="4">
                <Card style={{ margin: "10px" }}>
                    <Link to={"/product-detail/1"} >
                        <CardImg top width="100%" src={URL_SERVER+product.imageUrl} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardText>{product.description}</CardText>
                        </CardBody>

                    </Link>
                </Card>

            </Col>

        );
    }
}

export default ProductItem;