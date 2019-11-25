import React from 'react'

const Pagination = () => {
    return(
        <div class="container-page-navigation">
            <div class="container-page-navigation-cont">
                <ul class="ul-page-navigation">
                    <li><a class="activ-page-navigation" href=""><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><input class="activ-inp-page-navigation" type="number" value="3"/></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a class="activ-page-navigation" href=""><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>
                </ul>
            </div>     
        </div>
    )
}

export default Pagination
