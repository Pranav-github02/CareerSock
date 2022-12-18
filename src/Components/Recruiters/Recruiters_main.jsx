import axios from 'axios'
import React, { PureComponent } from 'react'
import RecruitersCard from './RecruitersCard'
import './recruiters-main.css'

class Recruiters_main extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            recruiters: null
        }
    }
    componentDidMount() {
        let url = `https://careersockserver-env-1.eba-pjpi9zpp.ap-south-1.elasticbeanstalk.com/recruiters`
        axios.get(url)
            .then(res => {
                this.setState({ recruiters: res.data })
            })
            .catch(err => console.error(err))
    }
    render() {
        let recruiters = <p>Loading.....</p>
        if (this.state.recruiters != null) {
            recruiters = (
                <>
                    {
                        this.state.recruiters.map((obj) =>
                            <RecruitersCard
                                key={obj.id}
                                organisation={obj.organisation}
                                logo={obj.logo}
                                location={obj.location}
                                jobs={obj.jobs}
                                rating={obj.rating}
                            />
                        )
                    }
                </>
            )
        }
        return (
            <div className='recruiters-main'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
                            <div className='row'>
                                {recruiters}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recruiters_main