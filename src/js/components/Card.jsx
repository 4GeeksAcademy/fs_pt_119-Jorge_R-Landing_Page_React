import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card m-3" style={{ width: "18rem" }}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card m-3" style={{ width: "18rem" }}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card m-3" style={{ width: "18rem" }}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card m-3" style={{ width: "18rem" }}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;