import Col41 from '../components/cartbox/Col41';
import Col42 from '../components/cartbox/Col42';
import Col43 from '../components/cartbox/Col43';
import Col44 from '../components/cartbox/Col44';
import Col8 from '../components/cartbox/Col8';


function Main() {
    return (
        <div className="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" className="container">
                <div className="row g-5 gx-xxl-8">
                    <Col41 />
                    <Col8 />
                </div>
                <div className="row g-5 gx-xxl-8">
                    <Col43 />
                    <Col42 />
                    <Col44 />
                </div>
            </div>
        </div>
    )
}

export default Main;