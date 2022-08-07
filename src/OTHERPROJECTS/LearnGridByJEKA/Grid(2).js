import React from "react";
import './Grid(2).css'

const GridByJeka =()=>{
    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="content">
                    <h1>Grid Layout</h1>
                    <div className="grid">
                        <div className="grid_body">
                            <div className="gridItem">1</div>
                            <div className="gridItem">2</div>
                            <div className="gridItem">3</div>
                            <div className="gridItem">4</div>
                            <div className="gridItem">5</div>
                            <div className="gridItem">6</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800">
                            <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                Lorem ipsum...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default GridByJeka

