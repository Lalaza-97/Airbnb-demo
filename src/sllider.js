import React from 'react'

function sllider() {
    constructor(props) {
        super(props)

        this.state = {
            slides:[],
            number_of_slides_by_index:2
        }
    }
    return (
       
            <Fragment>
                <Button className='prev'>Prev</Button>
                <Button className='next'>Next</Button>
                <div ref={} className='view_port'></div>
                <div ref={ref_id => this.touch_area} 
                style={Styles.touch_area} className='text'>
                <div className='images_container'></div>
                </div>
            </Fragment>
      
    )
}

export default sllider
