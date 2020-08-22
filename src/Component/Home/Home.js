import React, { Component } from 'react';
import Content from '../Content/Content';
import URL_SERVER from '../Enum';
class Home extends Component {
    render() {
        return (
            <div>
                <Content title="This is the title1" image={URL_SERVER+"/img/01.jpg"} show={true}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</Content>
                <Content title="This is the title2" image={URL_SERVER+ "/img/02.jpg"} show={false}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</Content>
            </div>
        );
    }
}

export default Home;